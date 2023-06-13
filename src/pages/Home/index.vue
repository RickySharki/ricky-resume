<template>
  <div class="home w-full ml-15">
    <div class="my-avatar">
      <el-avatar id="avatar" :src="getImgUrl(userInfo!.avatar)" size="large" />
    </div>
    <div class="mian-info w-full">
      <Intro :owner="t('resumeOwner')" :link-url="userInfo?.url" :desc="userInfo?.desc" />
      <Carousel class="carouselStyle" :userinfo="userInfo!" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@store/mouldes/user'
import { storeToRefs } from 'pinia'
import { getImgUrl } from '@utils/imageTool'
import Intro from './components/intro.vue'
import Carousel from './components/Carousel.vue'

const { t } = useI18n()
const store = storeToRefs(useUserStore())
const { userInfo } = store
</script>

<style scoped lang="scss">
.home {
  #avatar{
    &:hover {
      transform: rotate(666turn);
      transition: all 59s cubic-bezier(0.34, 0, 0.84, 1) 0.1s;
    }
  }
}

.carouselStyle {
  bottom: 5rem;
  left: 0;
  position: absolute;
}
</style>
