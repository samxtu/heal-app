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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = exports.BooleanResponse = exports.FieldError = void 0;
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const constants_1 = require("../constants");
const sendEmail_1 = require("../utils/sendEmail");
const uuid_1 = require("uuid");
const isAuth_1 = require("../middleware/isAuth");
const typeorm_1 = require("typeorm");
const isAllowed_1 = require("../middleware/isAllowed");
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "target", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
exports.FieldError = FieldError;
let EmailPasswordArgs = class EmailPasswordArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailPasswordArgs.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EmailPasswordArgs.prototype, "password", void 0);
EmailPasswordArgs = __decorate([
    (0, type_graphql_1.InputType)()
], EmailPasswordArgs);
let BooleanResponse = class BooleanResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], BooleanResponse.prototype, "deleted", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FieldError, { nullable: true }),
    __metadata("design:type", FieldError)
], BooleanResponse.prototype, "error", void 0);
BooleanResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], BooleanResponse);
exports.BooleanResponse = BooleanResponse;
let RegisterUserArgs = class RegisterUserArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "middlename", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "currentAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterUserArgs.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], RegisterUserArgs.prototype, "deleted", void 0);
RegisterUserArgs = __decorate([
    (0, type_graphql_1.InputType)()
], RegisterUserArgs);
let EditUserArgs = class EditUserArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "middlename", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "location", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], EditUserArgs.prototype, "deleted", void 0);
EditUserArgs = __decorate([
    (0, type_graphql_1.InputType)()
], EditUserArgs);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => FieldError, { nullable: true }),
    __metadata("design:type", FieldError)
], UserResponse.prototype, "error", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    forgotPassword(email, { redis }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (user) {
                const token = (0, uuid_1.v4)();
                const key = constants_1.FORGET_PASSWORD_PREFIX + token;
                try {
                    redis.set(key, user.id, "ex", 1000 * 60 * 60 * 24 * 3);
                    (0, sendEmail_1.sendEmail)(user.email, "Reset email here", `<a href='${constants_1.FRONT_END_ORIGIN}/reset-email/${token}'>Click this link</a>`);
                }
                catch (err) {
                    console.error(err.message);
                    return {
                        deleted: false,
                        error: { target: "general", message: err.message },
                    };
                }
            }
            return { deleted: false };
        });
    }
    resetPassword(newPassword, token, { req, redis }) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = constants_1.FORGET_PASSWORD_PREFIX + token;
            const userId = yield redis.get(key);
            if (!userId)
                return {
                    error: {
                        target: "Token",
                        message: "Token expired, try forgot password again!",
                    },
                };
            let clumsyUser = undefined;
            const idNum = parseInt(userId);
            try {
                clumsyUser = yield User_1.User.findOne(idNum, { relations: ["role", "branch"] });
            }
            catch (err) {
                console.error(err);
            }
            yield redis.del(key);
            if (!clumsyUser) {
                return {
                    error: {
                        target: "general",
                        message: "User not found!",
                    },
                };
            }
            const hashedpass = yield argon2_1.default.hash(newPassword);
            clumsyUser.password = hashedpass;
            yield User_1.User.update({ id: idNum }, { password: hashedpass });
            req.session.userId = clumsyUser.id;
            return { user: clumsyUser };
        });
    }
    register(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield argon2_1.default.hash(params.password);
            let user;
            try {
                user = yield User_1.User.create({
                    firstname: params.firstname,
                    middlename: params.middlename ? params.middlename : "",
                    lastname: params.lastname,
                    email: params.email.toLowerCase(),
                    phone: params.phone,
                    currentAddress: params.currentAddress,
                    deleted: false,
                    password: hashedPassword,
                }).save();
                console.log("user: ", user);
            }
            catch (err) {
                if (err.code === "23505")
                    return {
                        deleted: false,
                        error: {
                            target: "username",
                            message: "username already taken!",
                        },
                    };
                console.error("error message: ", err.message);
                return {
                    deleted: false,
                    error: {
                        target: "general",
                        message: "Something went wrong, try again!",
                    },
                };
            }
            return { deleted: true };
        });
    }
    editUser(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne(id);
            if (!user)
                return {
                    deleted: false,
                    error: { target: "general", message: "User does not exist!" },
                };
            try {
                yield User_1.User.update({ id }, Object.assign({}, params));
            }
            catch (err) {
                console.error("error message: ", err.message);
                return {
                    deleted: false,
                    error: {
                        target: "general",
                        message: "Something went wrong, try again!",
                    },
                };
            }
            return { deleted: true };
        });
    }
    login(params, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.session.userId);
            const similarUser = yield User_1.User.findOne({
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
            const valid = yield argon2_1.default.verify(similarUser.password, params.password);
            if (!valid) {
                return {
                    error: {
                        target: "general",
                        message: "incorrect credentials!",
                    },
                };
            }
            if (similarUser.deleted === false) {
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
        });
    }
    me({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const meUser = yield User_1.User.findOne({
                where: {
                    id: req.session.userId,
                },
                relations: ["role"],
            });
            return meUser;
        });
    }
    logout({ req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            res.clearCookie(constants_1.COOKIE_NAME);
            const sesh = yield new Promise((resolve) => {
                req.session.destroy((err) => {
                    console.log("we are destroying session");
                    if (err) {
                        console.log(err);
                        return resolve(false);
                    }
                    return resolve(true);
                });
            });
            if (sesh)
                console.log(req.session);
            return sesh;
        });
    }
    getUsers(roles) {
        return __awaiter(this, void 0, void 0, function* () {
            let reqRes = [];
            if (roles === null || roles === undefined || roles.length === 0)
                reqRes = yield User_1.User.find({ relations: ["role"] });
            else
                reqRes = yield User_1.User.find({
                    where: { roleId: (0, typeorm_1.In)(roles) },
                    relations: ["role"],
                });
            return reqRes;
        });
    }
    getUser(id) {
        return User_1.User.findOne(id, {
            relations: ["role"],
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => BooleanResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("newPassword")),
    __param(1, (0, type_graphql_1.Arg)("token")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resetPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => BooleanResponse),
    __param(0, (0, type_graphql_1.Arg)("params")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => BooleanResponse),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("params")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, EditUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("params")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailPasswordArgs, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    (0, type_graphql_1.UseMiddleware)((0, isAllowed_1.isAllowed)(["admin2"])),
    __param(0, (0, type_graphql_1.Arg)("roles", () => [type_graphql_1.Float], { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map