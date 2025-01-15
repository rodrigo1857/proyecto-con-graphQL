import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({
    description: 'Aggregation of todos'
})
export class AggregationType {
    @Field(()=> Int)
    total: number;

    @Field(()=> Int)
    pending: number;

    @Field(()=> Int)
    completed: number;

    
    @Field(()=> Int,{deprecationReason:'Use totalTodos instead'})
    totalTodoscompleted: number;
}