(function () {

    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello() {
            console.log('动物在叫！');

        }
    }


    // super主要的应用场景：
    // 之前继承 我们举例主要是 一些方法，现在要求增加属性，但是增加属性之后要对属性进行初始化，要对属性进行初始化必须调用构造函数
    class Dog extends Animal {
        age: number;
        constructor(name: string, age: number) {
            // 如果在子类中写了构造函数等于将父类的构造函数重写了，父类的构造函数就不会被执行了，父类的name操作就没了所以：
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name); // 这就表示在调用父类的构造函数,因为父类有name 必须传一下name
            this.age = age
        }

        sayHello() {

            // 在类的方法中， super表示当前类的 父类
            // 所以就把 super当成它的父类就行了
            // super.sayHello()

            console.log('汪汪汪！');

        }
    }

    const dog = new Dog('旺财', 3)
    dog.sayHello()
})();