<template>
  <Icon :icon="icon!" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IconifyIcon } from '@iconify/vue'
import type { PropType } from 'vue'
defineProps({
  icon: {
    type: String as PropType<IconifyIcon | string>,
    require: true,
  },
})
</script>
