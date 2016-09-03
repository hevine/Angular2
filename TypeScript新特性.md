## TypeScript

![](https://github.com/hevine/FE-solution/raw/master/imgs/003ts.png)

* 除了基于现有语法升级而来的，还有一些酷炫的特性
    * 可使用显式类型定义
        `let foo:number = 42;`
        `foo = '42';` 在JS中这段是合法的，但是ts中编译会出错
    * any 类型
         若把变量定义为any型，那么 这种变量可以持有任何类型的值
         `let foo: any;`  
         `foo = {};`
         `foo = 'bar';`
         `foo += 42;`
         `console.log(foo); // "bar 42"`
         以上代码是合法的，似在编译动态类型，但这样会失去ts带来的优点，请慎用any
    * 原生 类型： `Enum`，`Object`,  `Array`,`Function`
    * 定义类
    * 使用访问修饰符：`Public`,`Private`,`Portected`
    * 定义接口：`interface`
    * 接口继承: `interface A extends B { ……your code……}`
    * 实现多个接口
    * 使用ts装饰器提升表现力
    * 使用类型参数编写泛型代码
    
       
         