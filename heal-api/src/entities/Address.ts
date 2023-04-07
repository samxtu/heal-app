import { Field } from "type-graphql";
import {AuditBaseEntity} from "./AuditBaseEntity";
import { Column, OneToMany, OneToOne } from "typeorm";
import { User } from "./User";

export class Address extends AuditBaseEntity{
    @Field()
    @Column()
    street:string;

    @Field()
    @Column()
    ward:string;

    @Field()
    @Column()
    district:string;

    @Field()
    @Column()
    city:string;

    @Field()
    @Column()
    state:string;

    @Field()
    @Column()
    zip:string;

    @Field(()=>[User])
    @OneToMany(()=>User, user=>user.currentAddress)
    currentUsers:User[]

    @Field(()=>[User])
    @OneToMany(()=>User, user=>user.permanentAddress)
    permanentUsers:User[]
}