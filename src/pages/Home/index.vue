<template>
  <div class="home w-full ml-15">
    <Intro :owner="t('resumeOwner')" :link-url="url" :desc="desc" />
    <PicBox />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import RickyInfo from '../../ownerInfo/ricky'
import Intro from './components/intro.vue'
import PicBox from './components/pic'
const { t } = useI18n()
const { url, desc } = RickyInfo
</script>

<style scoped lang="scss">
.home{

}
</style>
