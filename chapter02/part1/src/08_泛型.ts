(function() {

    // 现在传入类型和返回值类型是确定的、如果遇到不确定类型怎么办？
    // function fn(a: number): number {
    //     return a;
    // }
    // 这种也不合适
    // function fn(a: any): any {
    //     return a;
    // }

    /*************** 1.泛型指定1个 ***************/
    /**
     * 在定义函数或类时，如果遇到类型不明确就可以使用 “泛型”
     */

    // T 表示任意类型，在调用的时候知道
    // 注意：a为什么能用T 因为前面定义了 T
    function fn<T> (a: T): T {
        return a;
    }

    // 可以直接调用具有泛型的函数
    // 这样的话会自动判断出 T的类型是number
    // 这样利用了ts的类型推断，但是有时候ts推断不出来，用下面的方式
    let result = fn(10) // 不指定泛型，TS可以自动对类型进行推断

    // 手动指定
    let result2 = fn<string>('hello') // 指定泛型


    /*************** 2.泛型指定多个 ***************/
    // 泛型可以同时指定多个
    function fn2<T, K> (a: T, b: K) :T {
        console.log(b);
        return a;
    }

    fn2<number, string>(123, 'hello');



    interface Inter {
        length: number;
    }

      /*************** 3.泛型必须是接口的实现类(子类) ***************/
    // 需求：希望fn3 的范围是Inter的子类或者说就是实现了Inter接口的类
    // 下面表示 T是一个泛型 而且要求T 必须实现了Inter这个接口
    function fn3<T extends Inter>(a: T): number {
        return a.length;
    }

    // 这个时候传的参数 必须要有length的属性 传数字不行，字符串是可以的
    // fn3('123')
    // fn3( { name: 'zz'} ) // 错误
    fn3( { length: 10} ) // 正确


    /*************** 4.除了函数，类中也可以使用泛型 ***************/
    class MyClass<T> {
        name: T;

        constructor(name: T) {
            this.name = name;
        }
    }

    const mc = new MyClass<String>('孙悟空')

})()