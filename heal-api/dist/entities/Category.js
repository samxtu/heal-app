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
exports.Category = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const AuditEntity_1 = require("./AuditEntity");
const Type_1 = require("./Type");
const User_1 = require("./User");
let Category = class Category extends AuditEntity_1.AuditBaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Type_1.Type),
    (0, typeorm_1.ManyToOne)(() => Type_1.Type, (type) => type.category),
    __metadata("design:type", Type_1.Type)
], Category.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User]),
    (0, typeorm_1.ManyToMany)(() => User_1.User, (user) => user.status),
    __metadata("design:type", Array)
], Category.prototype, "user", void 0);
Category = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Category);
exports.Category = Category;
//# sourceMappingURL=Category.js.map