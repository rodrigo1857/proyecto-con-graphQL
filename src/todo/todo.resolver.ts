import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';
import { AggregationType } from './types/aggregation.type';

@Resolver()
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService
    ){}
    @Query(()=>[Todo],{name:'todos'})
    findAll(
        @Args() statusArgs:StatusArgs
    ):Todo[]{
        return this.todoService.findAll(statusArgs);
    }

    @Query(()=>Todo,{name:'todo'})
    findOne( @Args('id',{type:()=>Int})id:number
    ){
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo, { name:'createTodo'})
    createTodo(
            @Args('createTodoInput') createTodoInput: CreateTodoInput
    ){
         return this.todoService.create(createTodoInput);
    }

    @Mutation(()=>Todo,{name:'updateTodo'})
    updateTodo(
        @Args('updateTodoInput') updateTodoInput: UpdateTodoInput
    ){
         return this.todoService.update(updateTodoInput);
    }

    @Mutation(()=> Boolean)
    removeTodo( @Args('id',{type:()=>Int}) id:number){
       return this.todoService.delete(id);
    }

    @Query(()=>Int,{name:'countTodos'})
    totalTodos():number{
        return this.todoService.totalTodos;
    }

    @Query(()=>Int,{name:'pendingTodos'})
    pendingTodos():number{
        return this.todoService.pendingTodos;
    }

    @Query(()=>Int,{name:'completeTodos'})
    completeTodos():number{
        return this.todoService.completeTodos;
    }

    @Query(()=>AggregationType)
    aggregation():AggregationType{
        return {
            completed:this.todoService.completeTodos,
            pending:this.todoService.pendingTodos,
            total:this.todoService.totalTodos,
            totalTodoscompleted:this.todoService.totalTodos
        };
    }


}
