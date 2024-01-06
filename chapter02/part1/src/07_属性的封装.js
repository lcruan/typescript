var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // tsc demo.ts -t es5
    // 定义一个表示人的类
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
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
            get: function () {
                console.log('get name() 执行了！！');
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                if (value >= 0) {
                    this._age = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var per = new Person('孙悟空', 18);
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
    var A = /** @class */ (function () {
        function A(num) {
            this.num = num;
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.test = function () {
            console.log(this.num);
        };
        return B;
    }(A));
    var b = new B(123);
    // b.num = 33 // 访问不了 因为是protected属性 只能在类里面访问，不能在外面访问
    var C = /** @class */ (function () {
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
        function C(name, age) {
            this.name = name;
            this.age = age;
            // 这里不需要写 赋值内容
        }
        return C;
    }());
    var c = new C('xxx', 10);
    console.log(c);
})();
