import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

/** 设置别名 */
const alias: Record<string, string> = {
  'src': resolve(__dirname, 'src'),
  '@store': resolve(__dirname, 'src', 'store'),
  '@pages': resolve(__dirname, 'src', 'pages'),
  '@hooks': resolve(__dirname, 'src', 'hooks'),
  '@http': resolve(__dirname, 'src', 'http'),
  '@utils': resolve(__dirname, 'src', 'utils'),
  '@model': resolve(__dirname, 'src', 'model'),
  'mock': resolve(__dirname, 'mock'),
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    [
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          // presets
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
        dirs: ['src/hooks', 'src/utils'],
        defaultExportByFilename: false,
        vueTemplate: false,
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          ElementPlusResolver(), // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [ElementPlusResolver()],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  ],
  resolve: {
    alias,
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8808,
    open: true,
    proxy: {
      '/api': 'http://localhost:8808',
    },
  },
})
