<template>
  <div class="text-4xl">
    <span>{{ str }}</span>
    <span>{{ owner }}</span>
    <span>{{ str2 }}</span>
    <span>,</span>
    <span
      class="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5 ml-2"
    >
      <span
        class="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90"
      ><span
        class="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
      /><span
        class="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
      /><span
        class="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
      /><span
        class="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
      /></span>
      程序员
    </span>
  </div>
</template>

<script lang='ts' setup>
defineProps({
  owner: String,
})
const str = '<'
const str2 = '/>'
</script>

<style lang='scss'>
</style>
