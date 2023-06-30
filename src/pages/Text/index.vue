<template>
  <div class="text w-full h-full px-4 py-8 mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
    <TextCard v-for="(text, index) in article" :key="index" :card-key="index" :text="text" />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@store/mouldes/user'
import { storeToRefs } from 'pinia'
import TextCard from './components/TextCard.vue'
const store = storeToRefs(useUserStore())
const { userInfo } = store

const article = computed(() => userInfo.value?.article || [])
</script>

<style lang="scss" scoped>
</style>
