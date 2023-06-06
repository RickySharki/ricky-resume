<template>
  <div class="home w-full ml-15">
    <Intro :owner="t('resumeOwner')" :link-url="url" :desc="desc" />
    <PicBox />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { info } from '../../ownerInfo'
import Intro from './components/intro.vue'
import PicBox from './components/pic'
const { t } = useI18n()
const { url, desc } = info
</script>

<style scoped lang="scss">
.home{

}
</style>
