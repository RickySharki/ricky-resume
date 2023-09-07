<template>
  <el-config-provider :locale="lang">
    <Layout />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useLocalesStore } from '@store/mouldes/locales'
import Layout from './layouts'
const { lang } = toRefs(useLocalesStore())
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  background-color: var(--bg-color);
  color: var(--font-color);
  background-image: url(../public/bg.svg);
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  /*滚动条里面的小方块，能向上向下移动*/
  ::-webkit-scrollbar-thumb {
    background-color: var(--container-bg-color);
    opacity: 0.5;
  }
}
</style>
