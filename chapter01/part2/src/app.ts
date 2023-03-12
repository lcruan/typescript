// import { hi } from './m.js'
console.log('hello');
let a = 10;
// console.log(hi);
console.log(a);


function fn(a: number, b: number) {
    return a + b;
}

function fn2(this: any) {
    alert(this)
}