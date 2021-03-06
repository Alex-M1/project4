const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
        ];
    }

    return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            },
        },
        'css-loader',
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const babelOptions = (presets) => {
    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
        ],
    };

    if (presets) {
        presets.forEach((preset) => {
            opts.presets.push(preset);
        });
    }

    return opts;
};

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions(),
    }];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
};

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
            ],
        ),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
    ];

    if (isProd) {
        base.push(new BundleAnalyzerPlugin());
    }

    return base;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.tsx'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
        alias: {
            constants: path.resolve(__dirname, 'src/constants'),
            store: path.resolve(__dirname, 'src/store'),
            src: path.resolve(__dirname, 'src'),
            helpers: path.resolve(__dirname, 'src/helpers'),
            common: path.resolve(__dirname, 'src/components/_common_'),
        },
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
        historyApiFallback: true,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },

            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions(['@babel/preset-typescript']),
                },
            },
            {
                test: /\.[tj]sx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions(['@babel/preset-react', '@babel/preset-typescript']),
                },
            },
        ],
    },
};
