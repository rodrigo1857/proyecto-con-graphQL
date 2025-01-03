import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(()=>String, { description: 'The title of the todo', nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    description?: string;

    @Field(()=>Boolean, {nullable: true })
    done?: boolean;

    @Field(()=>Int)
    id: number;

}