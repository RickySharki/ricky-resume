<template>
  <div class="home w-full ml-15">
    <Intro :owner="t('resumeOwner')" :link-url="userInfo?.url" :desc="userInfo?.desc" />
    <PicBox />
    <Carousel class="carouselStyle" :userinfo="userInfo!" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { importAsyncFiles } from 'src/ownerInfo/index'
import { usePromise } from '@utils/usePromise'
import Intro from './components/intro.vue'
import PicBox from './components/pic'
import Carousel from './components/Carousel.vue'
const { t } = useI18n()
const { result: userInfo } = usePromise(importAsyncFiles)
</script>

<style scoped lang="scss">
.home {}

.carouselStyle {
  left: 0;
  position: absolute;
}
</style>
