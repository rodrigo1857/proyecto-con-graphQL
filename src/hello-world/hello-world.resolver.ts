import { Float, Int, Query, Resolver } from '@nestjs/graphql';

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

    @Query(()=> Int,{name:'randomFromZeroTo'})
    getRandomFromZeroTo(): number {
        var x = Math.floor(Math.random()*10);
        return x;
    }

}
