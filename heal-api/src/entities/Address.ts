import { Field, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { User } from "./User";
import { AuditBaseEntity } from "./AuditEntity";
import { Company } from "./Company";

@ObjectType()
@Entity()
export class Address extends AuditBaseEntity {
  @Field(() => String)
  @Column({ type: "text" })
  street: string;

  @Field(() => String)
  @Column({ type: "text" })
  ward: string;

  @Field(() => String)
  @Column({ type: "text" })
  district: string;

  @Field(() => String)
  @Column({ type: "text" })
  city: string;

  @Field(() => String)
  @Column({ type: "text" })
  country: string;

  @Field(() => String)
  @Column({ type: "text" })
  zip: string;

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.currentAddress)
  currentUsers: User[];

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.permanentAddress)
  permanentUsers: User[];

  @Field(() => [Company])
  @OneToMany(() => Company, (company) => company.location)
  companies: Company[];
}
