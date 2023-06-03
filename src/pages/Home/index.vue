<template>
  <div class="home">
    <h1>当前简历模板所有者：{{ t('resumeOwner') }}</h1>
    <el-switch
      v-model="themeMode"
      size="large"
      active-text="dark"
      inactive-text="light"
    />
    <el-select v-model="lang" class="m-2" placeholder="i18n" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <comp />
  </div>
</template>

<script lang="ts" setup>
import { useLocalesStore } from '@store/mouldes/locales'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'
import comp from './components/comp.vue'

const themeMode = ref<boolean>(false)
const themeStore = useThemeStore()
watch(themeMode, (val) => {
  themeStore.toggleDark(val)
})
const { lang } = toRefs(useLocalesStore())
const { t } = useI18n()
const options = [
  {
    value: 'ricky',
    label: '富豪',
    key: 0,
  },
]
</script>

<style scoped lang="scss">
.home{
  min-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
