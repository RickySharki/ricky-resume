<template>
  <div class="w-full h-full px-4 py-8">
    <el-card v-for="(text, index) in article" :key="index" shadow="hover" class="mb-4 cursor-pointer" @click="toText(text.url)">
      <template #header>
        {{ text.title }}
      </template>
      <div class="text-info min-h-40 flex items-start flex-col">
        <el-image :src="getImgUrl(text.img)" fit="cover" class="w-full h-full" />
        <div>{{ text.desc }}</div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { importAsyncFiles } from '../../ownerInfo'

const { article } = await importAsyncFiles()
const getImgUrl = (path: string) => {
  return new URL(`../../assets/${path}`, import.meta.url).href
}
const toText = (url: string) => {
  window.open(url)
}
</script>

  <style lang="scss"></style>
