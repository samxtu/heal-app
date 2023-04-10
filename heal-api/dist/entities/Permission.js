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
exports.Permission = void 0;
const typeorm_1 = require("typeorm");
const AuditEntity_1 = require("./AuditEntity");
const type_graphql_1 = require("type-graphql");
const Role_1 = require("./Role");
const User_1 = require("./User");
let Permission = class Permission extends AuditEntity_1.AuditBaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Role_1.Role]),
    (0, typeorm_1.ManyToMany)(() => Role_1.Role, (role) => role.permissions),
    __metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User]),
    (0, typeorm_1.ManyToMany)(() => User_1.User, (user) => user.permissions),
    __metadata("design:type", Array)
], Permission.prototype, "users", void 0);
Permission = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=Permission.js.map