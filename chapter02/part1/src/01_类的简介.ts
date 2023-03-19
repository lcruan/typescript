// 使用class关键字 来定义一个类
class Person {

    /**
     * (1) 直接定义的属性是实例属性，需要通过对象的实例去访问
     * const per = new Person();
     * per.name
     * 
     * (2) 使用static开头的属性是静态属性(类属性)，无需创建对象，可以直接通过类去访问
     * Person.age
     * 
     * (3) readonly开头的属性是表示一个只读的属性，无法修改
     */
    // 定义实例属性
    // readonly name: string = '孙悟空';
    name: string = '孙悟空';
    // 在属性前使用static关键字可以定义类属性(静态属性-不需要创建就可以用的属性)
    static age: number = 18;


    // (4) 定义方法（直接写的就是实例方法）
    /**
     * 如果方法以static开头 则 方法就是类方法，可以直接通过类去调用
     */
    sayHello() {
        console.log('hello 大家好！');
        
    }
}

/**
 * 对象中主要包含了两个部分
 *        属性
 *        方法
 */

const per = new Person();
console.log(per);

// 类属性
// console.log(Person.age);


console.log(per.name);
per.name = 'tom';
console.log(per.name);

per.sayHello();


