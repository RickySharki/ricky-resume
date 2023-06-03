import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import type { I18n } from 'vue-i18n'
import { getEnv } from '@utils/getEnv'
import Ricky from './lang/Ricky'

const { VITE_RESUME_OWNER } = getEnv()
console.log('🚀 ~ file: index.ts:8 ~ RESUME_OWNER:', VITE_RESUME_OWNER)

const authMap = {
  樊富豪: 'ricky',
}
const messages = {
  ricky: Ricky,
}
export const i18nOptions = {
  locale: authMap[VITE_RESUME_OWNER as keyof typeof authMap],
  messages,
  legacy: false,
}

export function setupI18n(app: App) {
  console.log('i18nOptions', i18nOptions)
  const i18n = createI18n(i18nOptions) as I18n
  console.log('🚀 ~ file: index.ts:25 ~ setupI18n ~ i18n:', i18n)
  app.use(i18n)
}
