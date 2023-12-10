"use strict";
class Dog {
    // constructor 被称为构造函数
    // 构造函数会在“对象创建时”调用 -> 当我们调用new Dog()时，就相当于我们调用constructor,每次调用new Dog() 构造函数都会执行
    constructor(name, age) {
        // 在实例方法中，this就表示当前的实例, this就是dog/dog2/dog3/dog4
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
        // console.log('构造函数执行了~~~');
    }
    bark() {
        // alert("汪汪汪！")
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name); // 谁调这个方法 this就是谁
    }
}
// 每次都创建相同属性的对象---> 引入 构造函数 每条狗的名字和年龄不同
const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);
// const dog3 = new Dog();
// const dog4 = new Dog();
console.log(dog);
console.log(dog2);
// console.log(dog3);
// console.log(dog4);
dog.bark();
