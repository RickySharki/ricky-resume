<template>
  <div class="w-full h-full px-4 py-8 mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
    <!-- <el-card
      v-for="(text, index) in article" :key="index" shadow="hover" class="mb-4 cursor-pointer"
      :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" @click="toText(text.url)"
    >
      <template #header>
        {{ text.title }}
      </template>
      <div class="text-info min-h-40 flex items-start flex-col">
        <el-image :src="getImgUrl(text.img)" fit="cover" class="w-full h-full" />
        <div>{{ text.desc }}</div>
      </div>
    </el-card> -->
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

<style lang="scss"></style>
