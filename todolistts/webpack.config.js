const path = require('path')

const HtmlWebpackPlugin = require("html-webpack-plugin");

//Loaders
const rules = [
    { //babel
        test: /\.tsx?/ ,
        exclude: /node_modules/ ,
        loader: 'babel-loader'
    },
    //SASS
    {
        test: /\.scss$/ ,
        loaders : [
            require.resolve("style-loader"), 
            require.resolve("css-loader"),
            require.resolve("sass-loader")
        ]
    },
    //IMAGES
    {
        test: /\.(gif|png|jpe?g|svg)/i,
        use: [
            "file-loader",
            {
                loader: "image-webpack-loader",
                options: {
                    gifsicle: {
                        interland: false
                    },
                    optipng: {
                        optimizationLevel: 7
                    },
                    pngquant: {
                        quality: "65-90",
                        speed: 4
                    },
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    }
                }
            }
        ]
    }
];


//WEBPACK
module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //Loaders
  module: { rules },
  //extensions care
  resolve: { extensions: ['.ts', '.tsx', '.js'] },    //take care of files' extensions for me
  //server
  devServer: {
    contentBase: path.join(__dirname , 'dist'),
    port: 5000
  },
  // Common Chunks
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    })
  ]
}