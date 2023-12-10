/*************** 1. object ***************/
// object 表示一个js对象
let a: object; // 这种写法不实用，可以有下面两种写法，其实我们限制对象，更多的是为了限制对象的属性，而不是对象本身
a = {};
a = function() {}

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值, 属性名: 属性值}
// 在”属性名后面加上? , 表示属性是可选的“，age有也行，没有也行
let b: {name: string, age?: number};
b = {name: '孙悟空', age: 18}

// 要求：只要有name属性，其他的属性有没有都行，有谁都可以，总不能把所有的属性都列出来吧？
// [propName: string]: any 表示任意类型的属性  -> propName是随便写的 写xxx都可以 [xxx: string]
let c: {name: string, [propName: string]: any}
c = {name: '猪八戒', age: 18, gender: '男'}
// 如果这样写：let c: {name: string, [propName: string]: string}   则：c = {name: '猪八戒', age: '18', gender: '男'}


/*************** 2. 函数Function 结构的类型声明 ***************/
// let d: Function 这样写和object一个意思，没什么意义，希望去限制d的函数的结构，有几个参数？ 返回值是什么类型？
// 类似于箭头函数的写法
/**
 * 设置函数结构的类型声明
 *  语法：
 *     (形参:类型, 形参:类型)=>返回值
 */

let d: (a:number, b:number)=>number; // 这句话意思是：希望d函数有两个参数，而且两个参数的类型都是number，同时返回值也是number
// d = function (n1: number, n2: number): number {
//    return 10;
// }


/*************** 3. 数组 ***************/
// 什么类型后面加上中括号
/**
 * 数组的类型声明
 *     类型[]
 *     Array<类型>
 */
// string[] 表示字符串数组
let e: string[]
e = ['a', 'b', 'c']

// number[] 表示数值数组
let f: number[]

// 数组的另一种写法 尖括号
let g: Array<number>;
g = [1, 2, 3]


/*************** 4. 元组 ***************/
/**
 * 元组，元组就是固定长度的数组,长度固定的话 存储效率会好点
 * 
 * 语法：
 *  [类型, 类型, 类型]
 */
let h: [string, number];
h = ['hello', 123]


/*************** 5. 枚举 ***************/
/**
 * enum 枚举类
 */
enum Gender {
    Male, // 0
    Female // 1
}
let i: {name: string, gender: Gender}
i = {
    name: "孙悟空",
    gender: Gender.Male // male
}

// console.log(i.gender === Gender.Male);

/*************** 6. 补充 &且 ***************/
// &表示同时
let j: {name: string} & {age: number};
// j = {name: "孙悟空", age: 18}


/*************** 7. 补充 类型别名 ***************/
// k的类型为1或2或3或4或5
// let k: 1 | 2 | 3 | 4 | 5;
// let l: 1 | 2 | 3 | 4 | 5;
// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 1
k = 5



