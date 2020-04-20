const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// cau hinh luu cache
const VENDOR_LIBS = [
    "axios",
    "bootstrap",
    "jquery",
    "popper.js",
    "react",
    "react-dom",
    "redux"

];
module.exports = {
    mode: 'none',
    entry: {
        bundle: './src/index.js',
        // cấu hình vendor
        vendor: VENDOR_LIBS
    },
    output: {
        // vì lỗi muti file nên đặt tên là [name].js, chunkhash là thêm mã hoá tên file để không bị cache file js
        filename: '[name].[chunkhash].js',
        // nếu không khai báo path thì mặc đính nó sẽ mằn ngoài cùng (cùng cấp với folder src) , nếu không muốn nằm ngoài cùng thì phải khai báo nó
        // path.resolve(__dirname, 'build')  nó sẽ tạo ra thư mục build năm cùng cấp với folder src và có thư mục con là bundle.js
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

        ]

    },
    // config splitting
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // vendor là file thư viện khi caching còn bundle là file chứa các compment 
                    // lệnh này cho phép không bị dulicate thư viện.chỉ cho vendor chứa thư viện dependencies còn bundle thì chứa component thôi
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        // khi build thì nó sẽ chạy lại 2 file bundle và vendor luôn bây giờ muốn file nào thay đổi thì file đó chạy còn file kia giữ nguyên 
        runtimeChunk: {
            name: "manifest",
        }
    },
    plugins: [
        // config jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
    }),
        new HtmlWebpackPlugin({
            template : 'src/index.html'
    })
    ],
    //config đổi port dev server
    devServer: {
        port: 3000,
        open: true
        // config thêm để hiểm thị thêm thông tin
        // disableHostCheck: true,
        // historyApiFallback: true,
        // overlay:true,
        // stats: 'minimal',
        // inline: true,
        // compress: true,
        // contentBase : '/'
    }
}

