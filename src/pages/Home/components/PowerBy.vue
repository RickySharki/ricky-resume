<template>
  <svgIcon v-for="icon in result" :key="icon" :path="icon" />
</template>

<script lang='ts' setup>
import svgIcon from 'src/components/svgIcon.vue'
import { svgFileList } from '@utils/importSvg'
import { usePromise } from '@utils/usePromise'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'

const themeStore = storeToRefs(useThemeStore())
const { isDark } = themeStore

const { result, refresh: getSvgIcon } = usePromise(isDark => svgFileList(isDark))

watch(() => isDark.value, (newVal) => {
  getSvgIcon(newVal)
}, { immediate: true })
console.log('🚀 ~ file: index.vue:27 ~ result:', result)
</script>

<style lang='scss'>
</style>
