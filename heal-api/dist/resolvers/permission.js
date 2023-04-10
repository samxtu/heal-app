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
exports.PermissionResolver = void 0;
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const Permission_1 = require("../entities/Permission");
const user_1 = require("./user");
let PermissionResolver = class PermissionResolver {
    addPermission(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Permission_1.Permission.create({ name }).save();
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
    editPermission(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || name === "")
                return {
                    status: false,
                    error: { target: "general", message: "name can not be empty!" },
                };
            const permission = yield Permission_1.Permission.findOne(id);
            if (!permission)
                return {
                    status: false,
                    error: { target: "general", message: "permission does not exist!" },
                };
            try {
                permission.name = name;
                yield permission.save();
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
    deletePermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Permission_1.Permission.delete(id);
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
    getPermissions() {
        return Permission_1.Permission.find({ relations: ["users", "roles"] });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("name", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "addPermission", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("name", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "editPermission", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.BooleanResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "deletePermission", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Permission_1.Permission]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "getPermissions", null);
PermissionResolver = __decorate([
    (0, type_graphql_1.Resolver)(Permission_1.Permission)
], PermissionResolver);
exports.PermissionResolver = PermissionResolver;
//# sourceMappingURL=permission.js.map