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
exports.CategoryResolver = void 0;
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const Category_1 = require("../entities/Category");
const user_1 = require("./user");
const Type_1 = require("../entities/Type");
let CategoryArgs = class CategoryArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryArgs.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], CategoryArgs.prototype, "type", void 0);
CategoryArgs = __decorate([
    (0, type_graphql_1.InputType)()
], CategoryArgs);
let CategoryResolver = class CategoryResolver {
    addCategory(inputArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type = yield Type_1.Type.findOne(inputArgs.type);
                yield Category_1.Category.create({ name: inputArgs.name, type: type }).save();
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
    editCategory(id, editArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!editArgs.name || editArgs.name === "")
                return {
                    status: false,
                    error: { target: "general", message: "name can not be empty!" },
                };
            const category = yield Category_1.Category.findOne(id);
            if (!category)
                return {
                    status: false,
                    error: { target: "general", message: "category does not exist!" },
                };
            try {
                const type = yield Type_1.Type.findOne(editArgs.type);
                category.name = editArgs.name;
                if (type)
                    category.type = type;
                yield category.save();
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
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Category_1.Category.delete(id);
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
    getCategories(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbType = yield Type_1.Type.findOne(type);
            if (dbType)
                return Category_1.Category.find({ where: { type: type }, relations: ["type"] });
            else
                return {
                    status: false,
                    error: {
                        target: "general",
                        message: "That type does not exist.",
                    },
                };
        });
    }
    getAllCategories() {
        return Category_1.Category.find({ relations: ["type"] });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("args")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "addCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("args")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "editCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Category_1.Category]),
    __param(0, (0, type_graphql_1.Arg)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategories", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Category_1.Category]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getAllCategories", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)(Category_1.Category)
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.js.map