import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { AuditBaseEntity } from "./AuditEntity";

@ObjectType()
@Entity()
export class Employee extends AuditBaseEntity {
  @Field(() => String)
  @Column({ type: "text" })
  status: string;

  @Field(() => String)
  @Column({ type: "text" })
  fileNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  insuranceID: string;

  @Field(() => String)
  @Column({ type: "text" })
  insuranceSchemeID: string;

  @Field(() => String)
  @Column({ type: "text" })
  insuranceCardNumber: string;

  @Field(() => String)
  @Column({ type: "text" })
  image: string;

  @Field(() => String)
  @Column({ type: "text" })
  nationalID: string;

  @Field(() => String)
  @Column({ type: "text" })
  otherID: string;

  @Field(() => [String])
  @Column({ type: "text" })
  alergies: string[];

  @Field(() => String)
  @Column({ type: "text" })
  bloodGroup: string;
}
