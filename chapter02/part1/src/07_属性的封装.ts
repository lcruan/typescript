(function() {

    // tsc demo.ts -t es5

    // 定义一个表示人的类
    class Person {
        // ts 中可以在属性前添加属性的修饰符
        /**
         *  public 修饰的属性可以在任意位置访问（修改）不写默认为public
         *      - (包括子类)
         *  private 私有属性，私有属性只能在类内部进行访问修改（访问都不可以）
         *      - 通过在类中添加方法使得私有属性可以被外部访问，子类也不可以
         * 
         *  protected 受保护的属性，只能在当前类和当前类的子类 "中" 访问（修改） 解释：中是里面的意思  外部访问不行
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *      - 它们被称为属性的存取器
         * 
         */

        // 为什么要需要这样写？目的是让属性的主动权 在于我来控制
        // 定义方法，用来获取name属性
        // getName () {
        //     return this.name
        // }

        // 定义方法，用来设置name属性
        // setName (value: string) {
        //     this.name = value
        // }

        // getAge () {
        //     return this.age
        // }

        // set方法的好处是：
        /**
         *  让属性控制权完全掌握在我们自己的手里，我想让你设置就给你一个set，不想让你设置就不给你set。
         *      - 我允许你有赋值 我就不判断，不允许你有赋值我就做一个判断，这样降低代码出错几率
         */
        // setAge (value: number) {
        //     // 判断年龄是否合法
        //     if (value > 0) {
        //         this.age = value
        //     }
        // }


        // ts中设置getter方法的方式
        // get表示getter方法，name表示属性名
        get name() {
            console.log('get name() 执行了！！');
            return this._name
        }

        set name(value) {
            this._name = value
        }

        get age () {
            return this._age;
        }

        set age (value) {
            if (value >= 0) {
                this._age = value
            }
        }
    }

    const per = new Person('孙悟空', 18);
    
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *      属性可以任意被修改将会导致对象中的数据变得非常不安全
     */
    // per.name = '猪八戒';
    // per.age = 38;

    // per.setName('猪八戒')
    // per.setAge(-33)
    // console.log(per.getName());

    per.name = '猪八戒';
    per.age = -33;
    console.log(per);

    class A {
        // public可以在任意位置访问 包括子类
        // public num: number;

        // private 只能在当前类访问，子类不可以访问
        // private num: number;

        protected num: number;

        constructor(num: number) {
            this.num = num
        }
    }

    class B extends A {

        test () {
            
            console.log(this.num);
        }
    }

    const b = new B(123)
    // b.num = 33 // 访问不了 因为是protected属性 只能在类里面访问，不能在外面访问


    class C {
        // 这样写有点麻烦 有个简单的写法
        /**
            name: string;
            age: number;

            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
         */

        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {
            // 这里不需要写 赋值内容
        }

    }

    const c = new C('xxx', 10)
    console.log(c);
    
})()