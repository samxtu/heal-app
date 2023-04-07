import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Role } from "./Role";
import {AuditBaseEntity} from "./AuditBaseEntity";
import { Category } from "./Category";
import { Address } from "./Address";
import { Permission } from "./Permission";

@ObjectType()
@Entity()
export class User extends AuditBaseEntity {
  @Field()
  @Column({ type: "text" })
  firstname!: string;

  @Field()
  @Column({ type: "text" })
  middlename: string;

  @Field()
  @Column({ type: "text" })
  lastname!: string;

  @Field()
  @Column({ type: "text", unique: true })
  email: string;

  @Field()
  @Column({ type: "text", unique: true })
  phone: string;

  @Field(()=>Address)
  @ManyToOne(()=>Address, address=>address.currentUsers)
  currentAddress: Address;

  @Field(()=>Address)
  @ManyToOne(()=>Address, address=>address.permanentUsers)
  permanentAddress: Address;

  @Field(() => Role)
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column({ type: "text", default: "halisia" })
  password: string;

  @Field(()=>[Category])
  @ManyToMany(()=>Category, category=>category.user)
  status:Category[];

  @Field(()=>[Permission])
  @ManyToMany(()=>Permission, permission=>permission.users)
  permissions:Permission[]
}
