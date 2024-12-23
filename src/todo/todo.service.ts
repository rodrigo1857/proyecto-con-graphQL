import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

    private todos : Todo[] = [
        {id:1,description:'Comprar pan',done:true},
        {id:2,description:'Comprar leche',done:false},
        {id:3,description:'Comprar huevos',done:false},
    ];
    findAll():Todo[]{
        return this.todos;
    }
}
