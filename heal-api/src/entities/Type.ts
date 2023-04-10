import { Field, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { AuditBaseEntity } from "./AuditEntity";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Type extends AuditBaseEntity {
  @Field()
  @Column({ type: "text" })
  name!: string;

  @Field()
  @Column({ type: "text" })
  description: string;

  @Field(() => [Category])
  @OneToMany(() => Category, (category) => category.type)
  category: Category[];
}
