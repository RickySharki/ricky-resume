<template>
  <div class="home">
    <h1>当前简历模板所有者：{{ t('resumeOwner') }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped lang="scss">
.home{

}
</style>
