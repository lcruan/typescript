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
        filename: "bundle.js"
    },
    mode: 'development',

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/, // 匹配所有以ts结尾的文件
                use: 'ts-loader', // 用ts-loader来处理.ts文件
                // 要排除的文件
                exclude: /node-modules/
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