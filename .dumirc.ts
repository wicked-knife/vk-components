import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'vk-components',
  },
  plugins: ['@umijs/plugins/dist/antd'],
  // 为了让github pages部署成功，先将publicPath设置为/vk-components/
  // 后续如果要部署到其他地方，再改这里，先写死，保证github pages部署成功
  publicPath: '/vk-components/',
});
