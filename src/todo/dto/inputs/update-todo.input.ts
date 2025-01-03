import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(()=>Int)
    @IsInt()
    @Min(1)
    id: number;

    @Field(()=>String, { description: 'The title of the todo', nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    @IsOptional()
    description?: string;

    @Field(()=>Boolean, {nullable: true })
    @IsBoolean()
    @IsOptional()
    done?: boolean;



}