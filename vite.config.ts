import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import viteCompression from 'vite-plugin-compression'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import viteImagemin from 'vite-plugin-imagemin'
import externalGlobals from 'rollup-plugin-external-globals'
import { visualizer } from 'rollup-plugin-visualizer'
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
    viteCompression(),
    [
      visualizer({
        filename: 'dist/stats.html',
      }),
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
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        dirs: ['src/components'],
      }),
      Icons({
        autoInstall: true,
      }),
      chunkSplitPlugin({
        customSplitting: {
          lodash: [/lodash-es/],
          components: [/src\/components/],
          info: [/src\/ownerInfo/],
          vendor: [/node_modules/],
          elementPlus: [/element-plus/],
        },
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 75, // 调整质量
        },
        pngquant: {
          quality: [0.6, 0.8], // 调整质量范围
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
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
  build: {
    rollupOptions: {
      external: ['element-plus'],
      plugins: [
        externalGlobals({
          'element-plus': 'ElementPlus',
        }),
      ],
      output: {
        format: 'es',
      },
    },
  },
})
