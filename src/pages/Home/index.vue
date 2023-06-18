<template>
  <div class="home w-full ml-15">
    <div class="my-avatar">
      <el-avatar id="avatar" :src="getImgUrl(mainInfo?.avatar)" size="large" />
    </div>
    <div class="mian-info w-full">
      <Intro :owenr="t('resumeOwner')" :main-info="mainInfo" />
      <Carousel class="carouselStyle" :userinfo="userInfo!" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@store/mouldes/user'
import { storeToRefs } from 'pinia'
import { getImgUrl } from '@utils/imageTool'
import Intro from './components/Intro.vue'
import Carousel from './components/Carousel.vue'

const { t } = useI18n()
const store = storeToRefs(useUserStore())
const { userInfo } = store
const { mainInfo } = userInfo.value!
</script>

<style scoped lang="scss">
.home {
  #avatar{
    &:hover {
      transform: rotate(666turn);
      transition: all 59s cubic-bezier(0.34, 0, 0.84, 1) 0.1s;
    }
  }
  height: 86vh;
}

.carouselStyle {
  bottom: 5rem;
  left: 0;
  position: absolute;
}
</style>
