<template>
  <div class="introduce mt-8">
    <TopFiled :owner="owenr" />
    <Summary :main-info="mainInfo" />
    <icon :github-url="mainInfo?.url" :email-url="mainInfo?.emailUrl" :juejin-url="mainInfo?.juejinUrl" />
  </div>
</template>

<script lang="ts" setup>
import type { MainInfo } from '@model/user'
import type { PropType } from 'vue'
import icon from './icon.vue'
import TopFiled from './topFiled.vue'
import Summary from './summary.vue'
defineProps({
  mainInfo: Object as PropType<MainInfo>,
  owenr: String,
})
</script>

<style lang="scss" scoped></style>
