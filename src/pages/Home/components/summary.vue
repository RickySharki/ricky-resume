<template>
  <p
    class="mt-6 text-base text-zinc-600 dark:text-zinc-400"
    style="opacity: 1; transform: none"
  >
    <span
      data-br=":Rkmqhmja:"
      data-brr="1"
      style="
          display: inline-block;
          vertical-align: top;
          text-decoration: inherit;
          max-width: 661px;
        "
    >
      <el-popover
        placement="bottom"
        :width="200"
        trigger="hover"
      >
        <template #reference>
          <OpenLinkIcon title="前端开发工程师" :link-url="mainInfo?.url" />
        </template>
        <a target="_blank" :href="mainInfo!.url">
          <el-image class="cursor-pointer" :src="getImgUrl(mainInfo!.githubImg)" />
        </a>
      </el-popover>

      <br>
      {{ mainInfo?.desc }}
    </span>
  </p>
</template>

<script lang='ts' setup>
import type { MainInfo } from '@model/user'
import type { PropType } from 'vue'
import { getImgUrl } from '@utils/imageTool'
import OpenLinkIcon from './OpenLinkIcon.vue'
defineProps({
  mainInfo: {
    type: Object as PropType<MainInfo>,
    require: true,
  },
})
</script>

<style lang='scss'>
</style>
