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
exports.Company = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const AuditEntity_1 = require("./AuditEntity");
const Employee_1 = require("./Employee");
const Address_1 = require("./Address");
let Company = class Company extends AuditEntity_1.AuditBaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Employee_1.Employee]),
    (0, typeorm_1.OneToMany)(() => Employee_1.Employee, (employee) => employee.company),
    __metadata("design:type", Array)
], Company.prototype, "employees", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Company.prototype, "isParent", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Company.prototype, "isBranch", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "parentId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Array)
], Company.prototype, "branches", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "tinNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "registrationNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Company.prototype, "deleted", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "poBox", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "logo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Company.prototype, "website", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Address_1.Address),
    (0, typeorm_1.ManyToOne)(() => Address_1.Address, (address) => address.companies),
    __metadata("design:type", Address_1.Address)
], Company.prototype, "location", void 0);
Company = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Company);
exports.Company = Company;
//# sourceMappingURL=Company.js.map