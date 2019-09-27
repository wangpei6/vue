const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:path.join(__dirname,'./src/main.js'), 
    //入口，表示要打包哪个文件
    output:{//输出文件相关的配置
        path:path.join(__dirname,'./dist'),//打包好的文件输出到哪个目录中去
        filename:'bundle.js'//指定输出的文件的名称
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({//创建一个在内存中生成html的插件
            template:path.join(__dirname,'./src/index.html'),//指定模板页面
            filename:'index.html'//指定生成的页面名称
        })
    ],
    module:{//这个节点用于配置所有的第三方模块加载器
        rules:[//所有第三方模块的匹配规则
            { test : /\.css$/,use:[ 'style-loader','css-loader' ] },//配置处理.css文件的第三方loader规则,调用loader是从后往前调用
            { test : /\.less$/,use :[ 'style-loader','css-loader','less-loader']},
            { test : /\.scss$/,use :[ 'style-loader','css-loader','sass-loader']},
            { test : /\.(jpg|jpeg|gif|png)$/,use :'url-loader?limit=89025'},
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test:/\.vue$/,use:'vue-loader'},
            { test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
           "vue$": "vue/dist/vue.js"
        }
      }
}