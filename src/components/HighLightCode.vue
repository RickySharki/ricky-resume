<template>
  <highlightjs :language="language" :code="code" />
</template>

<script lang='ts' setup>
defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'typescript',
  },
})
</script>

<style lang='scss'>
</style>
