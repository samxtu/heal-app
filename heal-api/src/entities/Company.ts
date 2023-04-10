import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AuditBaseEntity } from "./AuditEntity";
import { Employee } from "./Employee";
import { Address } from "./Address";

@ObjectType()
@Entity()
export class Company extends AuditBaseEntity {
  @Field(() => [Employee])
  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  @Field()
  @Column({ default: false })
  isParent: boolean;

  @Field()
  @Column({ default: false })
  isBranch: boolean;

  @Field()
  @Column({ type: "int", nullable: true })
  parentId: string;

  @Field(() => [Number])
  @Column({ type: "int" })
  branches: number[];

  @Field(() => String)
  @Column({ type: "text" })
  name: string;

  @Field(() => String)
  @Column({ type: "text" })
  tinNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  registrationNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  status: string;

  @Field()
  @Column({ default: false })
  deleted: boolean;

  @Field(() => String)
  @Column({ type: "text" })
  phone: string;

  @Field(() => String)
  @Column({ type: "text" })
  email: string;

  @Field(() => String)
  @Column({ type: "text" })
  poBox: string;

  @Field(() => String)
  @Column({ type: "text" })
  logo: string;

  @Field(() => String)
  @Column({ type: "text" })
  website: string;

  @Field(() => Address)
  @ManyToOne(() => Address, (address) => address.companies)
  location: Address;
}
