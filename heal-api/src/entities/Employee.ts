import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { AuditBaseEntity } from "./AuditEntity";
import { Company } from "./Company";

@ObjectType()
@Entity()
export class Employee extends AuditBaseEntity {
  @Field(() => String)
  @Column({ type: "text" })
  status: string;

  @Field(() => String)
  @Column({ type: "text" })
  role!: string;

  @Field(() => String)
  @Column({ type: "text" })
  designation: string;

  @Field(() => String)
  @Column({ type: "text" })
  employmentType: string;

  @Field(() => String)
  @Column({ type: "text" })
  nhifRank: string;

  @Field(() => String)
  @Column({ type: "text" })
  checkNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  image: string;

  @Field(() => String)
  @Column({ type: "text" })
  signature: string;

  @Field(() => String)
  @Column({ type: "text" })
  pfNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  department: string;

  @Field(() => String)
  @Column({ type: "text" })
  departmentLocation: string;

  @Field(() => String)
  @Column({ type: "text" })
  employeeId: string;

  @Field(() => String)
  @Column({ type: "text" })
  accountNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  educationLevel: string;

  @Field(() => Company)
  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  @Field(() => String)
  @Column({ type: "text" })
  contractStartDate: string;

  @Field(() => String)
  @Column({ type: "text" })
  contractEndDate: string;
}
