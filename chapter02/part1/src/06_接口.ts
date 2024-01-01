(function() {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    }

    // 重复声明 报错，但是接口可以
    // type myType = {

    // }

    /**
     * 接口用来定义一个类的结构,用来定义一个类中应该包含哪些属性和方法
     *      同时接口也可以当成类型声明去使用
     */
    interface myInterface {
        name: string;
        age: number;
    }

    // 接口可以重复声明- 写两个相当于将两个合并
    interface myInterface {
        gender: string;
    }

    // const obj: myInterface = {
    //     name: 'sss',
    //     age: 111,
    //     gender: '男'
    // }

    /**
     *  ****接口可以在定义类的时候去限制类的结构**
     *      接口有点像抽象类
     *      接口中的所有的属性都不能由实际的值
     *      接口只定义对象的结构，而不考虑实际值
     *      在接口中所有的方法都是抽象方法
     */

    // 接口和抽象类的区别：(1)抽象类中可以有抽象方法也可以有实质的方法和真实的属性，但是接口中所有的方法都是抽象方法
                        // (2) 抽象类用的是extends 继承 而接口用的是implements实现
    // 所以下方定义的name没有值，sayHello也没有函数体
    interface myInter {
        name: string;

        sayHello() :void;

    }

    /**
     * 定义类时，可以使类去实现一个接口
     *      实现接口就是使类满足接口的要求
     * 应用场景：
     *     游戏的枪（手枪、冲锋枪、散弹枪...）
     *     接口：需要枪口、装子弹、扳机
     */
    class myClass implements myInter {
        name: string;

        constructor(name: string) {            
            this.name = name
        }   

        sayHello(): void {
            console.log('大家好');
        }
    }

})()