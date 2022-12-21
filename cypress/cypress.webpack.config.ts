import webpack from '@umijs/bundler-webpack/compiled/webpack';
import path from 'path';
const basicCSSLoaders: any[] = [
  {
    loader: require.resolve('@umijs/bundler-webpack/compiled/style-loader'),
    options: {
      base: 0,
      esModule: true,
    },
  },
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      esModule: true,
      import: true,
      url: {
        filter: (url: string) => {
          // Don't parse absolute URLs
          // ref: https://github.com/webpack-contrib/css-loader#url
          if (url.startsWith('/')) return false;
          return true;
        },
      },
    },
  },
  {
    loader: require.resolve('@umijs/bundler-webpack/compiled/postcss-loader'),
    options: {
      postcssOptions: {
        ident: 'postcss',
        plugins: [
          require('@umijs/bundler-webpack/compiled/postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  },
];

export default {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'cypress-dist'),
  },
  module: {
    rules: [
      {
        test: /\.css(\?.*)?$/,
        use: basicCSSLoaders,
      },
      {
        test: /\.less(\?.*)?$/,
        use: basicCSSLoaders.concat({
          loader: require.resolve(
            '@umijs/bundler-webpack/compiled/less-loader',
          ),
          options: {
            implementation: require.resolve(
              '@umijs/bundler-utils/compiled/less',
            ),
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        }),
      },
      {
        test: /\.(sass|scss)(\?.*)?$/,
        use: basicCSSLoaders.concat({
          loader: require.resolve(
            '@umijs/bundler-webpack/compiled/sass-loader',
          ),
        }),
      },
      {
        test: /\.jsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx', // Remove this if you're not using JSX
          target: 'es2015', // Syntax to compile to (see options below for possible values)
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx', // Or 'ts' if you don't need tsx
          target: 'es2015',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
