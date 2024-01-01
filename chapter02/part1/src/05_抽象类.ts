(function () {

    // 禁止一个类被创建对象，禁止Animal被创建，在类前面加上abstract
    /**
     *  以abstract开头的类是抽象类
     *    特点1：
     *     抽象类和其他类区别不大，知识不能用来创建对象
     *     抽象类就是专门用来被继承的类
     * 
     *    特点2：
     *      抽象类中可以添加抽象方法
     *     解释：这里sayHello显然是没用的，不同的动物叫是不一样的，狗是汪汪汪，猫是喵喵喵，不能满足每个类的需求，
     *          如果继承忘了重写则直接就用父类的方法了，我们期望这个方法在类当中不定义它的具体实现，把它的结构
     *          定义出来，具体实现由子类来实现。
     */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        // 定义一个抽象方法
        // 抽象方法使用 abstract 开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void;
    }

    class Dog extends Animal {

        sayHello() {
            console.log('汪汪汪~');

        }
    }

    class Cat extends Animal {
        sayHello(): void {
            console.log('喵喵喵~');

        }
    }

    const dog = new Dog('旺财');
    dog.sayHello();

    // Cannot create an instance of an abstract class
    // let an = new Animal('蛇') // 怎么禁止一个对象被创建？

})()