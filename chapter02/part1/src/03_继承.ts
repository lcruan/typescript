// 立即执行函数 等于所有的变量创建到了一个单独的作用域当中，避免名字冲突
(function () {
    // 猫和狗的类 结构基本一样 只有方法中有点区别 所以需要提取公共的部分
    // -> 定义一个Animal类
    // 有了继承会大大减少代码编写数量
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log('动物在叫！');

        }
    }

    // 定义一个表示狗的类
    // 使Dog类继承Animal类
    /** 
     * - 此时，Animal被称为父类，Dog被称为子类
     * - 使用继承后，子类将会拥有父类所有的方法和属性
     * - 通过继承可以将多个类中共有的代码写在一个父类中，这样只需要写一次即可让所有的类都同时拥有父类中的属性和方法
     * - 如果希望在子类中添加一些父类中没有的属性或方法直接加就行
     * - 如果在子类中添加了和父类的相同方法，则子类方法会覆盖掉父类的方法，这种子类覆盖掉父类的方法叫做方法重写
    */

    class Dog extends Animal {

        /*name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log('汪汪汪！');
            
        }*/

        // 方法重写
        sayHello() {
            console.log('汪汪汪！');

        }
        // 给狗单独加一个方法
        run() {
            console.log(`${this.name} 在跑~~~`);
        }
    }

    // 定义一个表示猫的类
    // 使Cat类继承Animal类
    class Cat extends Animal {
        /*name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log('喵喵喵！');
            
        }*/

        // 方法重写
        sayHello() {
            console.log('喵喵猫！');

        }
    }

    const dog = new Dog('旺财', 5)
    const cat = new Cat('咪咪', 3)
    console.log(dog);
    dog.sayHello()
    dog.run()
    console.log(cat);
    cat.sayHello()

})();