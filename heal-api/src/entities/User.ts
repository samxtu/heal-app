import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, ManyToMany } from "typeorm";
import { Role } from "./Role";
import { Permission } from "./Permission";
import { AuditBaseEntity } from "./AuditEntity";
import { Address } from "./Address";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class User extends AuditBaseEntity {
  @Field(() => String)
  @Column({ type: "text" })
  firstname!: string;

  @Field(() => String)
  @Column({ type: "text" })
  middlename: string;

  @Field()
  @Column({ default: false })
  deleted: boolean;

  @Field(() => String)
  @Column({ type: "text" })
  lastname!: string;

  @Field()
  @Column({ type: "text", unique: true })
  email: string;

  @Field()
  @Column({ type: "text", unique: true })
  phone: string;

  @Field(() => String)
  @Column({
    type: "enum",
    enum: ["male", "female", "other"],
    default: "other",
  })
  gender: string;

  @Field(() => String)
  @Column({ type: "text", nullable: true })
  dateOfBirth: string;

  @Field(() => Address)
  @ManyToOne(() => Address, (address) => address.currentUsers)
  currentAddress: Address;

  @Field(() => Address)
  @ManyToOne(() => Address, (address) => address.permanentUsers)
  permanentAddress: Address;

  @Field(() => Role)
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column({ type: "text", default: "halisia" })
  password: string;

  @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.user)
  status: Category[];

  @Field(() => [Permission])
  @ManyToMany(() => Permission, (permission) => permission.users)
  permissions: Permission[];
}
