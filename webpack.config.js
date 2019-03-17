import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: path.join(__dirname,'src','index.js'),
    output: {
        path: path.join(__dirname,'build'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV ||  'development',
    resolve: {
        modules: [path.resolve(__dirname,'src'), 'node_modules']
    },
    devServer:{
        contentBase: path.join(__dirname,'src')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'public','index.html')
        })
    ],
    // adding webpack babel support 
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },{
            test: /\.(css|scss)$/,
            use: ['style-loader',
                    'css-loader',
                    'sass-loader'
        ]
        },
        {
            test: /\.(jpg|jpeg|mp3|png|gif|svg)$/,
            loaders: ['file-loader']
        }
    ]
    }
};