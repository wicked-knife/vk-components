import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'vk-components',
  },
  plugins: ['@umijs/plugins/dist/antd'],
  // 因为部署在GitHub Pages上的是非根目录，所以要设置以下配置
  // 后面如果要部署到根目录，再改这里的配置
  publicPath: '/vk-components/',
  base: '/vk-components/',
});
