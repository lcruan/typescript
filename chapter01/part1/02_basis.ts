/***************1.声明变量 ***************/
// 声明一个变量a，同时指定他的类型为number
let a: number;


// a 的类型设置为number，在以后得使用过程中a的值只能是数字
a = 10; // 正确
a = 33; // 正确
// a = 'hello'  // 此行代码会报错，因为变量a是number，不能赋值字符串

let b: string;
b = 'hello'
// b = 123 // 报错


/***************2.声明变量并且赋值 ***************/

// 声明完变量直接进行赋值
// let c: boolean = true;

// 如果变量的声明和赋值时同时进行的，ts编译器可以自动对变量进行类型检测，声明类型是可以省略的
let c = false;
c = true;

/***************3.声明在函数当中的应用 ***************/
// (1) 指定参数的类型 (2) 指定返回值的类型

// JS中的函数是不考虑参数的类型和个数的
// function sum (a, b) {
//     return a + b;
// }

// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // 123456


// ts检查传递的类型和个数 函数返回值类型function sum() :number
function sum(a: number, b: number): number {
    return a + b;
}
let result = sum(123, 456)


