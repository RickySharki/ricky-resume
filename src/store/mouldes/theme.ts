import { defineStore } from 'pinia'

type theme = 'dark' | 'light'
export const useThemeStore = defineStore('theme', () => {
  const userSelectTheme = localStorage.getItem('__Theme__') as theme
  const theme = ref<theme>('light')

  watch(() => userSelectTheme, () => {
    if (userSelectTheme)
      theme.value = userSelectTheme
  }, { immediate: true })

  watch(() => theme.value, () => {
    debugger
    document.documentElement.dataset.theme = theme.value
  })
  const changeTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return {
    theme,
    changeTheme,
  }
}, {
  persist: true,
})
