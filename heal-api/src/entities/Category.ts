import { Field } from "type-graphql";
import { Column, ManyToMany, ManyToOne } from "typeorm";
import {AuditBaseEntity} from "./AuditBaseEntity";
import { Type } from "./Type";
import { User } from "./User";

export class Category extends AuditBaseEntity {
  @Field()
  @Column({ type: "text" })
  name!: string

  @Field(() => Type)
  @ManyToOne(() => Type, (type) => type.category)
  type!: Type

  @Field(()=>[User])
  @ManyToMany(()=>User, user=>user.status)
  user:User[]
}