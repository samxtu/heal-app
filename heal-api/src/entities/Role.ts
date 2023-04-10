import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { User } from "./User";
import { AuditBaseEntity } from "./AuditEntity";
import { Permission } from "./Permission";

@ObjectType()
@Entity()
export class Role extends AuditBaseEntity {
  @Field(() => [User])
  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @Field(() => [Permission])
  @ManyToMany(() => Permission, (permission) => permission.roles)
  permissions: Permission[];

  @Field()
  @Column({ unique: true })
  name!: string;
}
