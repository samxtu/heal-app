import { isAuth } from "../middleware/isAuth";
import { Arg, Mutation, Resolver, UseMiddleware, Query } from "type-graphql";
import { Permission } from "../entities/Permission";
import { BooleanResponse } from "./user";

@Resolver(Permission)
export class PermissionResolver {
  @Mutation(() => BooleanResponse)
  @UseMiddleware(isAuth)
  async addPermission(
    @Arg("name", () => String) name: string
  ): Promise<BooleanResponse> {
    try {
      await Permission.create({ name }).save();
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
  async editPermission(
    @Arg("id") id: number,
    @Arg("name", () => String) name: string
  ): Promise<BooleanResponse> {
    if (!name || name === "")
      return {
        status: false,
        error: { target: "general", message: "name can not be empty!" },
      };
    const permission = await Permission.findOne(id);
    if (!permission)
      return {
        status: false,
        error: { target: "general", message: "permission does not exist!" },
      };
    try {
      permission.name = name;
      await permission.save();
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
  async deletePermission(@Arg("id") id: number): Promise<BooleanResponse> {
    try {
      await Permission.delete(id);
    } catch (err) {
      console.error(err.message);
      return {
        status: false,
        error: { target: "general", message: err.message },
      };
    }
    return { status: true };
  }

  @Query(() => [Permission])
  getPermissions(): Promise<Permission[]> {
    return Permission.find({ relations: ["users", "roles"] });
  }
}
