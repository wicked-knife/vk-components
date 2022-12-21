import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'vk-components',
  },
  plugins: ['@umijs/plugins/dist/antd'],
});
