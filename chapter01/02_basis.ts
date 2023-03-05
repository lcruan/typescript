// 声明一个变量a，同时指定他的类型为number
let a: number;


// a 的类型设置为number，在以后得使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'  // 此行代码会报错，因为变量a是number，不能赋值字符串

let b: string;
b = 'hello'
// b = 123 // 报错

// 声明完变量直接进行赋值
// let c: boolean = true;

// 如果变量的声明和赋值时同时进行的，ts可以自动对变量进行类型检测
let c = false;
c = true;

function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(123, 456)

