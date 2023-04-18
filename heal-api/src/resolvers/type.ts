import { isAuth } from "../middleware/isAuth";
import {
  Arg,
  Mutation,
  Resolver,
  UseMiddleware,
  Query,
  InputType,
  Field,
  ObjectType,
} from "type-graphql";
import { Type } from "../entities/Type";
import { BooleanResponse } from "./user";
import { In } from "typeorm";
import { Category } from "../entities/Category";

@InputType()
class TypeArgs {
  @Field()
  name: string;
  @Field()
  description: string;
}

@InputType()
class TypeEditArgs {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field(() => [String])
  categories: [number];
}

@ObjectType()
export class BooleanResponseWithType extends BooleanResponse {
  @Field(() => Type, { nullable: true })
  data?: Type;
}

@Resolver(Type)
export class TypeResolver {
  @Mutation(() => BooleanResponseWithType)
  @UseMiddleware(isAuth)
  addType(@Arg("args") inputArgs: TypeArgs): Promise<BooleanResponseWithType> {
    return Type.create({
      name: inputArgs.name,
      description: inputArgs.description,
    })
      .save()
      .then((type) => {
        return { status: true, type: type };
      })
      .catch((error) => {
        console.error("we caught the error: ", error.message);
        return {
          status: false,
          error: { target: "general", message: error.message },
        };
      });
  }

  @Mutation(() => BooleanResponse)
  @UseMiddleware(isAuth)
  async editType(
    @Arg("id") id: number,
    @Arg("args") editArgs: TypeEditArgs
  ): Promise<BooleanResponse> {
    if (!editArgs.name || editArgs.name === "")
      return {
        status: false,
        error: { target: "general", message: "name can not be empty!" },
      };
    const type = await Type.findOne(id);
    if (!type)
      return {
        status: false,
        error: { target: "general", message: "type does not exist!" },
      };
    try {
      const cats = await Category.find({
        where: { id: In(editArgs.categories) },
      });
      type.name = editArgs.name;
      type.category = cats;
      await type.save();
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
  async deleteType(@Arg("id") id: number): Promise<BooleanResponse> {
    try {
      await Category.find({
        where: { type: id },
      })
        .then((cats) => {
          return cats.map((cat) => {
            return cat.id;
          });
        })
        .then((ids) => {
          return Category.delete(ids);
        })
        .catch((error) => {
          console.log(error.message);
          return {
            status: false,
            error: {
              target: "general",
              message: error.message,
            },
          };
        });
      await Type.delete(id);
    } catch (err) {
      console.error(err.message);
      return {
        status: false,
        error: { target: "general", message: err.message },
      };
    }
    return { status: true };
  }

  @Query(() => [Type])
  getTypes(): Promise<Type[]> {
    return Type.find({ relations: ["category"] });
  }

  @Query(() => Type, { nullable: true })
  async getType(@Arg("id") id: number): Promise<Type | undefined> {
    return Type.findOne(id, { relations: ["category"] });
  }
}
