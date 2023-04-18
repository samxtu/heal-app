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
exports.Type = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const AuditEntity_1 = require("./AuditEntity");
const Category_1 = require("./Category");
let Type = class Type extends AuditEntity_1.AuditBaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    __metadata("design:type", String)
], Type.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Type.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Category_1.Category]),
    (0, typeorm_1.OneToMany)(() => Category_1.Category, (category) => category.type),
    __metadata("design:type", Array)
], Type.prototype, "category", void 0);
Type = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Type);
exports.Type = Type;
//# sourceMappingURL=Type.js.map