<template>
  <el-config-provider :locale="lang">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLocalesStore } from '@store/mouldes/locales'
const { lang } = toRefs(useLocalesStore())
</script>

<style lang="scss">
html,
body,
#app,
#master-container {
  height: 100%;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  background-color: var(--bg-color);
  color:var(--font-color)
}
</style>
