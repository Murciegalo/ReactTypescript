
const path = require('path')

//Loaders
const rules = [
    { //babel
        test: /\.tsx?/ ,
        exclude: /node_modules/ ,
        loader: 'babel-loader'
    },
    //SASS
    {
        test: /\.s?css/,
        use: [
            "style-loader", //1
            "css-loader",
            "sass-loader"
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
    resolve: { extensions:  [ '.ts' , '.tsx' , '.js']},    //take care of files' extensions for me
    //Plugins
    devServer: {
        contentBase: './',
        port: 5000
    }
}