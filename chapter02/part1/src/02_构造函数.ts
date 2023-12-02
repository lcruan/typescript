class Dog {
    // name = '旺财';
    // age = 3;

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor() {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        可以
        console.log('构造函数执行了~~~');
        
    }

    bark() {
        alert("汪汪汪！")
    }
}

// 每次都创建相同属性的对象---> 引入 构造函数 每条狗的名字和年龄不同
const dog = new Dog();
const dog2 = new Dog();
const dog3 = new Dog();
const dog4 = new Dog();

console.log(dog);
console.log(dog2);
console.log(dog3);
console.log(dog4);
