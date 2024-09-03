import { createApp } from 'vue'
import './index.scss'
import './theme.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { setupRouter } from './router'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import { setupStore } from './store'
import { setupI18n } from './locales/index'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import 'animate.css/animate.min.css' // 引入animate
import { setupDireactive } from './direactive'
// 这里使用函数的方法进行注册，是为了处理一下异步的情况，可以使用async/await
function init() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupI18n(app)
  setupDireactive(app)
  app.use(hljsVuePlugin).use(ElementPlus).mount('#app')
}
init()
