(function() {

    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello() {
            console.log('动物在叫！');
            
        }
    }


    class Dog extends Animal {
        sayHello() {

            // 在类的方法中， super表示当前类的 父类
            // super.sayHello()

            console.log('汪汪汪！');
            
        }
    }

    const dog = new Dog('旺财')
    dog.sayHello()
})();