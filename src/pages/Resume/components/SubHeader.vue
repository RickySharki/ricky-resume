<template>
  <span ref="header" class="animate__animated animate__delay-2s" :class="[{ animate__flipInX: !isOutside, animate__flash: isOutside }]">
    <code>{{ isOutside ? title.normalTitle : title.hoverTitle }}</code>
  </span>
</template>

<script lang='ts' setup>
import type { PropType } from 'vue'
import { templateRef, useMouseInElement } from '@vueuse/core'
interface Title {
  normalTitle: string
  hoverTitle: string
}
defineProps({
  title: {
    type: Object as PropType<Title>,
    required: true,
  },
})
const header = templateRef<HTMLElement>('header')

const { isOutside } = useMouseInElement(header)

const aosFlip = computed(() => (isOutside.value ? 'fade-up' : 'flip-left'))
</script>

<style lang='scss'>
</style>
