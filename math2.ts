/**
 * Created by He on 2016/9/3.
 */

function square(x){
    return Math.pow(x,2);
};

function log10(x){
    //return Math.log(x)/Math.log(10);
    return Math.log(x)/Math.LN10;//求以10为底x的对数
};

const PI = Math.PI;
export { square ,log10, PI };