/**
 * Created by He on 2016/9/3.
 */

var fns = [];
//let规范了块级作用域 ，使程序 的执行结果由5个5，变成 了0，1，2，3，4
for( let i = 0; i < 5; i += 1 ){
    fns.push( function(){
        console.log( i );

    } );

}
fns.forEach( fn => fn() );

//使用ts-node 把编译和运行整合到一块之后 ，并不会生成编译后的.js文件



