import { Column, ManyToMany } from "typeorm";
import { AuditBaseEntity } from "./AuditBaseEntity";
import { Field } from "type-graphql";
import { Role } from "./Role";
import { User } from "./User";

export class Permission  extends AuditBaseEntity{
    @Field()
    @Column()
    name:string;

    @Field(()=>[Role])
    @ManyToMany(()=>Role, role=>role.permissions)
    roles:Role[]

    @Field(()=>[User])
    @ManyToMany(()=>User, user=>user.permissions)
    users:User[]
}