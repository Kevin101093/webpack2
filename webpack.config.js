//path es un módulo de node.js que nos permite manipular los paths de los archivos.
//Por ello lo estamos distanciando para obtener sus recursos.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',//Punto de entrada donde estará el archivo principal.
    output: {
        path: path.resolve(__dirname, 'dist'), //Donde se distribuirá los archivos convertidos. __dirname lo que quiere decir donde está el directorio base.
        filename: 'main.js',//archivo resultante el main.js

    },
    resolve: {
        extends: ['.js']
    },//resolve nos permite identificar los diferentes extensiones que trabajaremos en este proyecto.
    module: {
        rules: [
            {
                test: /\.js?$/,// test: identifica cuál o cuáles archivos serán transformados.
                exclude: /node_modules/,//exclude: indica archivos o carpetas que deberían ser ignoradas por el loader para no subirlo.
                use: {//use: indica cuál loader debería ser utilizado para transformar los archivos.
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
     new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        filename: './index.html'
     })
    ]
}