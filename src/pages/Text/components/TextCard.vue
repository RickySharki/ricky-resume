<template>
  <el-card
    ref="card"
    shadow="hover"
    class="mb-4 cursor-pointer animate__animated"
    :class="{
      animate__fadeInRight: isVisible && cardKey % 2 !== 0,
      animate__fadeInLeft: isVisible && cardKey % 2 === 0,
    }"
    @click="toText(text.url)"
  >
    <template #header>
      {{ text.title }}
    </template>
    <div class="text-info min-h-40 flex items-start flex-col">
      <el-image :src="getImgUrl(text.img)" fit="cover" class="w-full h-full" />
      <div>{{ text.desc }}</div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { defineComponent, reactive, ref } from 'vue'
import { getImgUrl } from '@utils/imageTool'
import { templateRef, useElementVisibility } from '@vueuse/core'

interface Text {
  title: string
  desc: string
  img: string
  url: string
}
defineProps({
  text: {
    type: Object as PropType<Text>,
    required: true,
  },
  cardKey: {
    type: Number,
    required: true,
  },
})

const card = templateRef<HTMLElement>('card')
const isVisible = useElementVisibility(card)

const toText = (url: string) => {
  window.open(url)
}
</script>

<style lang="scss"></style>
