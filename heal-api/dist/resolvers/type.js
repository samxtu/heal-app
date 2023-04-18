"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeResolver = exports.BooleanResponseWithType = void 0;
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const Type_1 = require("../entities/Type");
const user_1 = require("./user");
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
let TypeArgs = class TypeArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TypeArgs.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TypeArgs.prototype, "description", void 0);
TypeArgs = __decorate([
    (0, type_graphql_1.InputType)()
], TypeArgs);
let TypeEditArgs = class TypeEditArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TypeEditArgs.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TypeEditArgs.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], TypeEditArgs.prototype, "categories", void 0);
TypeEditArgs = __decorate([
    (0, type_graphql_1.InputType)()
], TypeEditArgs);
let BooleanResponseWithType = class BooleanResponseWithType extends user_1.BooleanResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => Type_1.Type, { nullable: true }),
    __metadata("design:type", Type_1.Type)
], BooleanResponseWithType.prototype, "data", void 0);
BooleanResponseWithType = __decorate([
    (0, type_graphql_1.ObjectType)()
], BooleanResponseWithType);
exports.BooleanResponseWithType = BooleanResponseWithType;
let TypeResolver = class TypeResolver {
    addType(inputArgs) {
        return Type_1.Type.create({
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
    editType(id, editArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!editArgs.name || editArgs.name === "")
                return {
                    status: false,
                    error: { target: "general", message: "name can not be empty!" },
                };
            const type = yield Type_1.Type.findOne(id);
            if (!type)
                return {
                    status: false,
                    error: { target: "general", message: "type does not exist!" },
                };
            try {
                const cats = yield Category_1.Category.find({
                    where: { id: (0, typeorm_1.In)(editArgs.categories) },
                });
                type.name = editArgs.name;
                type.category = cats;
                yield type.save();
            }
            catch (err) {
                console.error(err.message);
                return {
                    status: false,
                    error: { target: "general", message: err.message },
                };
            }
            return { status: true };
        });
    }
    deleteType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Category_1.Category.find({
                    where: { type: id },
                })
                    .then((cats) => {
                    return cats.map((cat) => {
                        return cat.id;
                    });
                })
                    .then((ids) => {
                    return Category_1.Category.delete(ids);
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
                yield Type_1.Type.delete(id);
            }
            catch (err) {
                console.error(err.message);
                return {
                    status: false,
                    error: { target: "general", message: err.message },
                };
            }
            return { status: true };
        });
    }
    getTypes() {
        return Type_1.Type.find({ relations: ["category"] });
    }
    getType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Type_1.Type.findOne(id, { relations: ["category"] });
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => BooleanResponseWithType),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("args")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TypeArgs]),
    __metadata("design:returntype", Promise)
], TypeResolver.prototype, "addType", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("args")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, TypeEditArgs]),
    __metadata("design:returntype", Promise)
], TypeResolver.prototype, "editType", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeResolver.prototype, "deleteType", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Type_1.Type]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeResolver.prototype, "getTypes", null);
__decorate([
    (0, type_graphql_1.Query)(() => Type_1.Type, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeResolver.prototype, "getType", null);
TypeResolver = __decorate([
    (0, type_graphql_1.Resolver)(Type_1.Type)
], TypeResolver);
exports.TypeResolver = TypeResolver;
//# sourceMappingURL=type.js.map