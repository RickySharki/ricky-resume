<template>
  <div class="introduce mt-8">
    <TopFiled :owner="owenr" />
    <Summary :main-info="mainInfo" />
    <icon :github-url="mainInfo?.url" :email-url="mainInfo?.emailUrl" :juejin-url="mainInfo?.juejinUrl" />
    <PowerBy />
  </div>
</template>

<script lang="ts" setup>
import type { MainInfo } from '@model/user'
import type { PropType } from 'vue'
import icon from './IconLink.vue'
import TopFiled from './TopFiledes.vue'
import Summary from './TopSummary.vue'
import PowerBy from './PowerBy.vue'

defineProps({
  mainInfo: Object as PropType<MainInfo>,
  owenr: String,
})
</script>

<style lang="scss" scoped></style>
