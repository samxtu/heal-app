import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { AuditBaseEntity } from "./AuditEntity";
import { Type } from "./Type";
import { User } from "./User";

@ObjectType()
@Entity()
export class Category extends AuditBaseEntity {
  @Field()
  @Column({ type: "text" })
  name!: string;

  @Field(() => Type)
  @ManyToOne(() => Type, (type) => type.category)
  type!: Type;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.status)
  user: User[];
}
