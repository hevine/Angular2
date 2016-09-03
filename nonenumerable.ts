/**
 * Created by He on 2016/9/3.
 */

class Person {
    @nonenumerable
    get kidCount() {
        return 42;
    }
}
function nonenumerable(target,name,descriptor){
    descriptor.enumerable = false;
    return descriptor;
}

var person = new Person();

for(let prop in person){
    console.log(prop);
}