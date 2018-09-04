# webpack
模块打包机，支持`commonJS`和`es6`语法
### 插件
### loader
`loader`是webpack用来预处理模块的  
在一个模块被引入之前，会预先使用`loader`处理模块的内容
### webpack-dev-server
`devServer`是webpack的开发服务器，可以使得代码跑在服务器上
``` javascript
npm i -D webpack-dev-server 
// package.json
"scripts": {
 "dev": "webpack-dev-server --progress --colors --env.dev",
 "build": "rimraf dist && webpack --progress --colors --display-reasons"
}
```
