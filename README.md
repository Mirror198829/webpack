# webpack
模块打包机，支持`commonJS`和`es6`语法  
`npm run dev`打包的资源不是放在目录里，而是放在内存内
### 插件
### loader
`loader`是webpack用来预处理模块的  
在一个模块被引入之前，会预先使用`loader`处理模块的内容
### webpack-dev-server
1. `devServer`是webpack的开发服务器，可以使得代码跑在服务器上  
2. 提供了热更新的功能  
……其他诸多配置，详细使用的时候可自行研究
``` javascript
npm i -D webpack-dev-server 
// package.json
"scripts": {
 "dev": "webpack-dev-server --progress --colors --env.dev",
 "build": "rimraf dist && webpack --progress --colors --display-reasons"
}
```
### 引入图片
处理的loader有file-loader  
通常使用增强版loader：url-loader
``` javascript
{
 test:/\.(png|jpg|jepg|gif|eot|svg|ttf|woff|woff2)(\?.+)?$/,
 exclude:/favicon\.png$/,
 use:[
    {
	loader:'url-loader',
	options:{
		limit:1000,
		name:'img/[name]-[hash].[ext]',
		publicPath:options.dev?'/':PublicPath
	}
    }
 ]  			
}
`url-loader`会把图片变成base64的编码形式
```
### publicPath
* `publicPath`是在所有路径转换之后在前面再加上`publicPath`路径，最终路径 = `publicPath` + 转换后路径
* 无论publicPath的路径是啥样，必须以`/`结尾
* `publicPath`是所有资源的基础路径
``` javascript
output: {
    filename: 'js/bundle-[hash].js',
    path: path.resolve(__dirname, 'dist'),//path.resolve(__dirname,)得到的是根目录
    publicPath:options.dev?'/':PublicPath 
  }
```
