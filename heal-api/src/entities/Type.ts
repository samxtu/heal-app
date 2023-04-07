import { Field } from "type-graphql";
import { Column, OneToMany } from "typeorm";
import {AuditBaseEntity} from "./AuditBaseEntity";
import { Category } from "./Category";

export class Type extends  AuditBaseEntity{
    @Field()
    @Column({type:"text"})
    name!:string;

    @Field()
    @Column({type:"text"})
    description:string;

    @Field(()=>[Category])
    @OneToMany(()=>Category, category=>category.type)
    category:Category[];
}