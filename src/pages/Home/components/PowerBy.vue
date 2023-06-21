<template>
  <div class="powerBy flex items-center mt-6">
    <span>POWERBY:</span>
    <svgIcon v-for="icon in icons" :key="icon" :icon="icon" />
  </div>
</template>

<script lang='ts' setup>
import svgIcon from 'src/components/svgIcon.vue'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'
import { darkIcon, lightIcon, normalIcon } from '@utils/powerByIcon'
const themeStore = storeToRefs(useThemeStore())
const { isDark } = themeStore

const icons = computed(() => {
  const icon = isDark.value ? lightIcon : darkIcon
  return icon.concat(normalIcon)
})
</script>

<style lang='scss'>
.powerBy{
  >svg {
    margin-left: 0.5rem;
  }
}
</style>
