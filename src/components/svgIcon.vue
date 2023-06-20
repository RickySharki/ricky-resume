<template>
  <component :is="path" />
</template>

<script setup lang="ts">
import { svgFileList } from '@utils/importSvg'
import { usePromise } from '@utils/usePromise'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'
defineProps({
  path: {
    type: String,
    require: true,
  },
})

const themeStore = storeToRefs(useThemeStore())
const { isDark } = themeStore

const { result, refresh: getSvgIcon } = usePromise(isDark => svgFileList(isDark))

watch(() => isDark.value, (newVal) => {
  getSvgIcon(newVal)
}, { immediate: true })
console.log('🚀 ~ file: index.vue:27 ~ result:', result)
</script>
