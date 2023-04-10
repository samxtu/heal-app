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
exports.Address = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const AuditEntity_1 = require("./AuditEntity");
const Company_1 = require("./Company");
let Address = class Address extends AuditEntity_1.AuditBaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Address.prototype, "ward", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Address.prototype, "district", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Address.prototype, "zip", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User]),
    (0, typeorm_1.OneToMany)(() => User_1.User, (user) => user.currentAddress),
    __metadata("design:type", Array)
], Address.prototype, "currentUsers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User]),
    (0, typeorm_1.OneToMany)(() => User_1.User, (user) => user.permanentAddress),
    __metadata("design:type", Array)
], Address.prototype, "permanentUsers", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Company_1.Company]),
    (0, typeorm_1.OneToMany)(() => Company_1.Company, (company) => company.location),
    __metadata("design:type", Array)
], Address.prototype, "companies", void 0);
Address = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Address);
exports.Address = Address;
//# sourceMappingURL=Address.js.map