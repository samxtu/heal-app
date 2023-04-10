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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Role_1 = require("./Role");
const Permission_1 = require("./Permission");
const AuditEntity_1 = require("./AuditEntity");
const Address_1 = require("./Address");
const Category_1 = require("./Category");
let User = class User extends AuditEntity_1.AuditBaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], User.prototype, "middlename", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["male", "female", "other"],
        default: "other",
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], User.prototype, "dateOfBirth", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Address_1.Address),
    (0, typeorm_1.ManyToOne)(() => Address_1.Address, (address) => address.currentUsers),
    __metadata("design:type", Address_1.Address)
], User.prototype, "currentAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Address_1.Address),
    (0, typeorm_1.ManyToOne)(() => Address_1.Address, (address) => address.permanentUsers),
    __metadata("design:type", Address_1.Address)
], User.prototype, "permanentAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Role_1.Role),
    (0, typeorm_1.ManyToOne)(() => Role_1.Role, (role) => role.users),
    __metadata("design:type", Role_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", default: "halisia" }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Category_1.Category]),
    (0, typeorm_1.ManyToMany)(() => Category_1.Category, (category) => category.user),
    __metadata("design:type", Array)
], User.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Permission_1.Permission]),
    (0, typeorm_1.ManyToMany)(() => Permission_1.Permission, (permission) => permission.users),
    __metadata("design:type", Array)
], User.prototype, "permissions", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map