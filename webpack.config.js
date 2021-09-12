const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={

    mode: 'development',
    output: {
        clean: true

    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                   // attributes: false,
                   sources: false,
                   minimize: false,
                }
                },
                {
                    test: /\.css$/,
                    exclude: /styles.css$/,
                    use:['style-loader', 'css-loader']
                },
                {
                    test: /.styles.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loader: 'file-loader'
                }
          
       ]
    },

    optimization:{},


    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        })
        
    ]
}
