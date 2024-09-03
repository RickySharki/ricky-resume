/// <reference types="vite/client" />
declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  // 声明 Service Worker
  declare var self: ServiceWorkerGlobalScope;