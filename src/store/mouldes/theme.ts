import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  watch(() => isDark.value, () => {
    document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
  }, { immediate: true })
  return {
    isDark,
    toggleDark,
  }
}, {
  persist: true,
})
