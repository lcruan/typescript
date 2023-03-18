// 引入一个包
const path = require('path');


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
    }


}