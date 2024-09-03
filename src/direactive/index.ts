import type { App, Directive } from 'vue'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
export const setupDireactive = (app: App) => {
  Object.entries(modules).forEach(([key, value]) => {
    const directive = (value as { default: unknown }).default // Type assertion
    console.log('directive', key, directive)
    app.directive(key.replace('./modules/', '').replace('.ts', ''), directive as Directive)
  })
}
