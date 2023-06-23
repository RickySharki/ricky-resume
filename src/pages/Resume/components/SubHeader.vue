<template>
  <span ref="header" class="animate__animated animate__delay-2s" :class="[{ animate__flipInX: !isOutside, animate__flash: isOutside }]">
    <code>{{ title }}</code>
  </span>
</template>

<script lang='ts' setup>
import { templateRef, useMouseInElement } from '@vueuse/core'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
const header = templateRef<HTMLElement>('header')

const { isOutside } = useMouseInElement(header)

const aosFlip = computed(() => (isOutside.value ? 'fade-up' : 'flip-left'))
</script>

<style lang='scss'>
</style>
