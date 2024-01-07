// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// webpack 中的所有的配置信息都应该写在module.exports
module.exports = {

    // 指定入口文件，主文件 在哪里执行
    entry: './src/index.ts',

    // 指定打包文件所在目录
    output: {
        // 指定打包后的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名称
        filename: "bundle.js",

        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    mode: 'development',

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/, // 匹配所有以ts结尾的文件
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器, 写ie11将语法转换为老版本 const就不支持了
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"

                                        },
                                        // 指定corejs版本，如果代码用了Promise ie11没有promise corejs里面有自己实现的promise 给你引入进去
                                        "corejs": "3",
                                        // 使用corejs的方式 usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ], // 用ts-loader来处理.ts文件
                // 要排除的文件
                exclude: /node-modules/
            },
            // 指定设置less文件的处理, loader执行的顺序是从下到上
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 自动生成html文件并且引入相关的资源
        new HTMLWebpackPlugin({
            // title: '这是一个自定义的title',
            // 根据这个模版生成html文件
            template: './src/index.html'
        })
    ],

    // 用来设置引用模块
    resolve: {
        // ts 和 js结尾的文件可以作为模块引用
        extensions: ['.ts', '.js']
    }


}