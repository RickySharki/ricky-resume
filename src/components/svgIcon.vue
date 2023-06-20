<template>
  <component :is="path" />
</template>

<script setup lang="ts">
defineProps({
  path: {
    type: String,
    require: true,
  },
})
</script>
