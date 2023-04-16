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
import { Category } from "../entities/Category";
import { BooleanResponse } from "./user";
import { Type } from "../entities/Type";

@InputType()
class CategoryArgs {
  @Field()
  name: string;
  @Field(() => Number)
  type: number;
}

@Resolver(Category)
export class CategoryResolver {
  @Mutation(() => BooleanResponse)
  @UseMiddleware(isAuth)
  async addCategory(
    @Arg("args") inputArgs: CategoryArgs
  ): Promise<BooleanResponse> {
    try {
      const type = await Type.findOne(inputArgs.type);
      await Category.create({ name: inputArgs.name, type: type }).save();
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
  async editCategory(
    @Arg("id") id: number,
    @Arg("args") editArgs: CategoryArgs
  ): Promise<BooleanResponse> {
    if (!editArgs.name || editArgs.name === "")
      return {
        status: false,
        error: { target: "general", message: "name can not be empty!" },
      };
    const category = await Category.findOne(id);
    if (!category)
      return {
        status: false,
        error: { target: "general", message: "category does not exist!" },
      };
    try {
      const type = await Type.findOne(editArgs.type);
      category.name = editArgs.name;
      if (type) category.type = type;
      await category.save();
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
  async deleteCategory(@Arg("id") id: number): Promise<BooleanResponse> {
    try {
      await Category.delete(id);
    } catch (err) {
      console.error(err.message);
      return {
        status: false,
        error: { target: "general", message: err.message },
      };
    }
    return { status: true };
  }

  @Query(() => [Category])
  async getCategories(
    @Arg("type") type: number
  ): Promise<Category[] | BooleanResponse> {
    const dbType = await Type.findOne(type);
    if (dbType)
      return Category.find({ where: { type: type }, relations: ["type"] });
    else
      return {
        status: false,
        error: {
          target: "general",
          message: "That type does not exist.",
        },
      };
  }

  @Query(() => [Category])
  getAllCategories(): Promise<Category[]> {
    return Category.find({ relations: ["type"] });
  }
}
