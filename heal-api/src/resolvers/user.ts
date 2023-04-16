import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Resolver,
  Mutation,
  Query,
  Ctx,
  Arg,
  InputType,
  Field,
  ObjectType,
  UseMiddleware,
  Float,
} from "type-graphql";
import dragon from "argon2";
import {
  COOKIE_NAME,
  FORGET_PASSWORD_PREFIX,
  FRONT_END_ORIGIN,
} from "../constants";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { isAuth } from "../middleware/isAuth";
import { In } from "typeorm";
import { isAllowed } from "../middleware/isAllowed";
import { Permission } from "../entities/Permission";

@ObjectType()
export class FieldError {
  @Field()
  target?: string;
  @Field()
  message: string;
}

@InputType()
class EmailPasswordArgs {
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
export class BooleanResponse {
  @Field()
  status: boolean;
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

@InputType()
class RegisterUserArgs {
  @Field()
  firstname: string;
  @Field()
  middlename: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field()
  password: string;
}

@InputType()
class EditUserArgs {
  @Field()
  firstname: string;
  @Field()
  middlename: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
  @Field()
  phone: string;
}

@ObjectType()
class UserResponse {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  // @FieldResolver(() => String)
  // email(@Root() user: User, @Ctx() { req }: MyContext) {
  //   if (req.session.userId === user.id) return user.email;
  //   return "";
  // }

  @Mutation(() => BooleanResponse)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ): Promise<BooleanResponse> {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const token = v4();
      const key = FORGET_PASSWORD_PREFIX + token;
      try {
        redis.set(key, user.id, "ex", 1000 * 60 * 60 * 24 * 3); //3 days expiry time
        sendEmail(
          user.email,
          "Reset email here",
          `<a href='${FRONT_END_ORIGIN}/reset-email/${token}'>Click this link</a>`
        );
      } catch (err) {
        console.error(err.message);
        return {
          status: false,
          error: { target: "general", message: err.message },
        };
      }
    }
    return { status: true };
  }

  @Mutation(() => UserResponse)
  async resetPassword(
    @Arg("newPassword") newPassword: string,
    @Arg("token") token: string,
    @Ctx() { req, redis }: MyContext
  ): Promise<UserResponse> {
    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);
    if (!userId)
      return {
        error: {
          target: "Token",
          message: "Token expired, try forgot password again!",
        },
      };
    let clumsyUser: User | undefined = undefined;
    const idNum = parseInt(userId);
    try {
      clumsyUser = await User.findOne(idNum, { relations: ["role", "branch"] });
    } catch (err) {
      console.error(err);
    }
    await redis.del(key);
    if (!clumsyUser) {
      return {
        error: {
          target: "general",
          message: "User not found!",
        },
      };
    }
    const hashedpass = await dragon.hash(newPassword);
    clumsyUser.password = hashedpass;
    await User.update({ id: idNum }, { password: hashedpass });
    req.session.userId = clumsyUser.id;
    return { user: clumsyUser };
  }

  @Mutation(() => BooleanResponse)
  async register(
    @Arg("params") params: RegisterUserArgs
  ): Promise<BooleanResponse> {
    const hashedPassword = await dragon.hash(params.password);
    let user: User;
    try {
      user = await User.create({
        firstname: params.firstname,
        middlename: params.middlename ? params.middlename : "",
        lastname: params.lastname,
        email: params.email.toLowerCase(),
        phone: params.phone,
        password: hashedPassword,
      }).save();
      console.log("user: ", user);
    } catch (err) {
      if (err.code === "23505")
        return {
          status: false,
          error: {
            target: "username",
            message: "username already taken!",
          },
        };
      console.error("error message: ", err.message);
      return {
        status: false,
        error: {
          target: "general",
          message: "Something went wrong, try again!",
        },
      };
    }
    return { status: true };
  }

  @Mutation(() => BooleanResponse)
  async editUser(
    @Arg("id") id: number,
    @Arg("params") params: EditUserArgs
  ): Promise<BooleanResponse> {
    const user = await User.findOne(id);
    if (!user)
      return {
        status: false,
        error: { target: "general", message: "User does not exist!" },
      };

    try {
      await User.update({ id }, { ...params });
    } catch (err) {
      console.error("error message: ", err.message);
      return {
        status: false,
        error: {
          target: "general",
          message: "Something went wrong, try again!",
        },
      };
    }
    return { status: true };
  }

  @Mutation(() => BooleanResponse)
  async manageUserPermissions(
    @Arg("id") id: number,
    @Arg("permissions", () => [Number]) perms: number[]
  ): Promise<BooleanResponse> {
    const user = await User.findOne(id);
    if (!user)
      return {
        status: false,
        error: { target: "general", message: "User does not exist!" },
      };

    try {
      const newPerms = await Permission.find({ where: { id: In(perms) } });
      user.permissions = newPerms;
      await user.save();
    } catch (err) {
      console.error("error message: ", err.message);
      return {
        status: false,
        error: {
          target: "general",
          message: "Something went wrong, try again!",
        },
      };
    }
    return { status: true };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("params") params: EmailPasswordArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    console.log(req.session.userId);
    const similarUser = await User.findOne({
      where: { email: params.email.toLowerCase() },
      relations: ["role"],
    });
    if (!similarUser)
      return {
        error: {
          target: "general",
          message: "incorrect credentials!",
        },
      };
    const valid = await dragon.verify(similarUser.password, params.password);
    if (!valid) {
      return {
        error: {
          target: "general",
          message: "incorrect credentials!",
        },
      };
    }
    if (similarUser.deleted === true) {
      return {
        error: {
          target: "general",
          message: "User is not active!",
        },
      };
    }
    req.session.userId = similarUser.id;
    req.session.role = similarUser.role.name;
    return { user: similarUser };
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    const meUser = await User.findOne({
      where: {
        id: req.session.userId,
      },
      relations: ["role"],
    });
    return meUser;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    res.clearCookie(COOKIE_NAME);
    const sesh = await new Promise((resolve) => {
      req.session.destroy((err) => {
        console.log("we are destroying session");
        if (err) {
          console.log(err);
          return resolve(false);
        }
        return resolve(true);
      });
    });
    if (sesh) console.log(req.session);
    return sesh;
  }

  @Query(() => [User])
  @UseMiddleware(isAuth)
  @UseMiddleware(isAllowed(["admin"]))
  async getUsers(
    @Arg("roles", () => [Float], { nullable: true }) roles: number[]
  ): Promise<User[]> {
    let reqRes: User[] = [];
    if (roles === null || roles === undefined || roles.length === 0)
      reqRes = await User.find({ relations: ["role"] });
    else
      reqRes = await User.find({
        where: { roleId: In(roles) },
        relations: ["role"],
      });
    return reqRes;
  }

  @Query(() => User, { nullable: true })
  getUser(@Arg("id") id: number): Promise<User | undefined> {
    return User.findOne(id, {
      relations: ["role"],
    });
  }
}
