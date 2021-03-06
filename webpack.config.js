const path = require('path'); //nodejs的内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PublicPath = 'https://mirror198829.github.io/webpack/dist/';
//const PublicPath = 'file:///E:/code/webpack/dist/';
module.exports =(options={})=>( {
  entry: './src/js/index.js',  //入口文件
  output: {
    filename: 'js/bundle-[hash].js',
    path: path.resolve(__dirname, 'dist'),//path.resolve(__dirname,)得到的是根目录
    //publicPath就是在所有路径转换之后在前面再加上路径
    //无论publicPath的路径是啥样，必须以‘/’结尾
    //所有资源的基础路径
    publicPath:options.dev?'/':PublicPath 
  },
  module:{
  	rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include:[path.resolve(__dirname, "src/js")],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
  		{
  			test: /\.css$/,
            use: ExtractTextPlugin.extract({
            	fallback:'style-loader',
            	use:'css-loader'
            })
  		},
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
  		},
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src','link:href']
          }
        }
      }
  	]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
        template:'index.html',
        favicon:'./src/img/favicon.ico' //favicon.ico的显示
      }),
      new ExtractTextPlugin({
      	filename:'css/[name]-[hash].css',
        publicPath:options.dev?'/':PublicPath
      }),
  ]
});