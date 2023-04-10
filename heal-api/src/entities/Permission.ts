import { Column, Entity, ManyToMany } from "typeorm";
import { AuditBaseEntity } from "./AuditEntity";
import { Field, ObjectType } from "type-graphql";
import { Role } from "./Role";
import { User } from "./User";

@ObjectType()
@Entity()
export class Permission extends AuditBaseEntity {
  @Field()
  @Column({ unique: true })
  name!: string;

  @Field(() => [Role])
  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.permissions)
  users: User[];
}
