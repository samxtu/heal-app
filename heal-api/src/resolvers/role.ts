import { isAuth } from "../middleware/isAuth";
import {
  Arg,
  Mutation,
  Resolver,
  UseMiddleware,
  Query,
  InputType,
  Field,
} from "type-graphql";
import { Role } from "../entities/Role";
import { BooleanResponse } from "./user";
import { Permission } from "../entities/Permission";
import { In } from "typeorm";

@InputType()
class RoleArgs {
  @Field()
  name: string;
  @Field(() => [Number])
  permissions: [number];
}

@Resolver(Role)
export class RoleResolver {
  @Mutation(() => BooleanResponse)
  @UseMiddleware(isAuth)
  async addRole(@Arg("args") inputArgs: RoleArgs): Promise<BooleanResponse> {
    try {
      const perms = await Permission.find({
        where: { id: In(inputArgs.permissions) },
      });
      await Role.create({ name: inputArgs.name, permissions: perms }).save();
    } catch (err) {
      console.error(err.message);
      return {
        status: false,
        error: { target: "general", message: err.message },
      };
    }
    return { status: true };
  }

  @Mutation(() => BooleanResponse)
  @UseMiddleware(isAuth)
  async editRole(
    @Arg("id") id: number,
    @Arg("args") editArgs: RoleArgs
  ): Promise<BooleanResponse> {
    if (!editArgs.name || editArgs.name === "")
      return {
        status: false,
        error: { target: "general", message: "name can not be empty!" },
      };
    const role = await Role.findOne(id);
    if (!role)
      return {
        status: false,
        error: { target: "general", message: "role does not exist!" },
      };
    try {
      const perms = await Permission.find({
        where: { id: In(editArgs.permissions) },
      });
      role.name = editArgs.name;
      role.permissions = perms;
      await role.save();
    } catch (err) {
      console.error(err.message);
      return {
        status: false,
        error: { target: "general", message: err.message },
      };
    }
    return { status: true };
  }

  @Mutation(() => BooleanResponse)
  @UseMiddleware(isAuth)
  async deleteRole(@Arg("id") id: number): Promise<BooleanResponse> {
    try {
      await Role.delete(id);
    } catch (err) {
      console.error(err.message);
      return {
        status: false,
        error: { target: "general", message: err.message },
      };
    }
    return { status: true };
  }

  @Query(() => [Role])
  getRoles(): Promise<Role[]> {
    return Role.find({ relations: ["users"] });
  }
}
