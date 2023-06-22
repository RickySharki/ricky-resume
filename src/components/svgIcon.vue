<template>
  <a
    class="cursor-pointer "
    target="_blank"
    data-state="closed"
    :href="link"
  >
    <Icon :icon="icon!" @click="blankToIconSite" />
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IconifyIcon } from '@iconify/vue'
import type { PropType } from 'vue'
const props = defineProps({
  icon: {
    type: String as PropType<IconifyIcon | string>,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
})
const blankToIconSite = () => {
  window.open(props.link)
}
</script>
