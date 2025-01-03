import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(()=>String, { description: 'The title of the todo', nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    @IsOptional()
    description?: string;

    @Field(()=>Boolean, {nullable: true })
    @IsBoolean()
    done?: boolean;

    @Field(()=>Int)
    id: number;

}