<template>
  <div class="home w-full ml-15">
    <div class="my-avatar">
      <el-avatar id="avatar" :src="getImgUrl(mainInfo?.avatar || '')" size="large" data-aos="fade-up" />
    </div>
    <div class="mian-info w-full">
      <Intro :owenr="t('resumeOwner')" :main-info="mainInfo" data-aos="fade-up" />
      <Carousel class="carouselStyle" :userinfo="userInfo!" data-aos="fade-up" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@store/mouldes/user'
import { storeToRefs } from 'pinia'
import { getImgUrl } from '@utils/imageTool'
import Intro from '@pages/Home/components/Introduce.vue'
import Carousel from '@pages/Home/components/CarouselList.vue'
import { svgFileList } from '@utils/importSvg'
import { usePromise } from '@utils/usePromise'
import { useThemeStore } from '@store/mouldes/theme'

const { t } = useI18n()
const themeStore = storeToRefs(useThemeStore())
const { isDark } = themeStore
const store = storeToRefs(useUserStore())
const { userInfo } = store
// const { mainInfo } = userInfo.value
const { result, refresh: getSvgIcon } = usePromise(isDark => svgFileList(isDark))

watch(() => isDark.value, (newVal, oldVal) => {
  getSvgIcon(newVal)
}, { immediate: true })
console.log('🚀 ~ file: index.vue:27 ~ result:', result)
const mainInfo = computed(() => userInfo.value?.mainInfo)
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
