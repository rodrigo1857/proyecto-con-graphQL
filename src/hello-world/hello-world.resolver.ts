import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(()=>String,{description:'hola mundo es lo que retoorna',name:'hello'})
    helloWorld(): string {
        return 'Hello World!';
    }

    @Query(()=> Float,{name:'randomNumber'})
    randomNumber(): number {
        return Math.random()*100;
    }

    @Query(()=> Int,{name:'randomFromZeroTo',description:'retorna un numero aleatorio entre 0 y el numero que se le pase como parametro'})
    getRandomFromZeroTo(@Args('to',{nullable:true,type: ()=> Int}) to:number = 6 ): number {
        var x = Math.floor(Math.random()*to);
        return x;
    }

}
