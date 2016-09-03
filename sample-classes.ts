/**
 * Created by He on 2016/9/3.
 */
class Human {
    static totalPeople = 0;
    _name ;
    constructor( name ){
        this._name = name;
        Human.totalPeople += 1;

    }
    get name(){
        return this._name;
    }

    set name(val){
        this._name = val;
    }
    talk(){
        return `Hi,I'm ${this.name}`; //模板字符串
    }
}


class Developer extends  Human {
    _languages;
    constructor(name,languages){
        super(name);
        this._languages = languages;
    }
    get languages(){
        return this._languages;
    }

    talk(){
        return `${super.talk()} And I know ${this.languages.join(',')}`;
    }
}

var human = new Human("foobar");
var dev = new Developer("bar",["JavaScript","TypeScript","CoffeeScript"]);
console.log(dev.talk());
//需要在tsc.cmd命令上加参数--target ES5以防止 error TS1056: Accessors are only available when targeti ng ECMAScript 5 and higher 的报错