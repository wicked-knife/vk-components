import { defineConfig } from 'cypress';

export default defineConfig({
  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "webpack",
  //   },
  // },

  component: {
    devServer() {
      // return devServer instance or a promise that resolves to
      // a dev server here
      return {
        port: 1234,
        hot: true,
        close: () => {},
      };
    },
  },
});
