<template>
  <el-card
    ref="card"
    shadow="hover"
    class="mb-4 cursor-pointer animate__animated text-card"
    :class="{
      animate__fadeInRight: isVisible && cardKey % 2 !== 0,
      animate__fadeInLeft: isVisible && cardKey % 2 === 0,
    }"
    @click="toText(text.url)"
  >
    <div class="text-info min-h-40 flex items-start flex-col h-full">
      <el-image :src="getImgUrl(text.img)" fit="contain" class="w-full h-full" />
      <h2 class="p-4 z-20 text-base font-bold tracking-tight text-[--post-image-fg] opacity-70 transition-opacity group-hover:opacity-100 md:text-xl">
        {{ text.desc }}
      </h2>
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

<style lang="scss" scoped>
.text-card {
  max-width: 500px;
  .el-card__body {
    padding: 0;
    height: 100%;
  }
}
.el-card{
  border-radius: 20px !important;
}
</style>
