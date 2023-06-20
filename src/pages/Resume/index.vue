<template>
  <div class="w-full h-full px-4 py-8">
    <el-card shadow="hover" class="mb-4" data-aos="fade-up">
      <template #header>
        个人信息
      </template>
      <div class="user-info grid grid-cols-3 grid-rows-2 gap-10">
        <span>姓名：{{ myInfo?.name }}</span><span>工作年限：{{ myInfo?.workYear }}</span>
        <span>毕业院校：{{ myInfo?.school }}</span><span>联系电话：{{ myInfo?.phone }}</span>
        <span>个人邮箱：{{ myInfo?.email }}</span><span>github：<el-link :href="myInfo?.github" target="_blank">{{ myInfo?.github }}</el-link></span>
      </div>
    </el-card>
    <el-card shadow="hover" class="mb-4" data-aos="fade-up">
      <template #header>
        专业技能
      </template>
      <p v-for="(skill, index) in skills" :key="index" v-html="skill" />
    </el-card>
    <el-card shadow="hover" data-aos="fade-up">
      <template #header>
        项目经历
      </template>
      <p v-for="(project, index) in projects" :key="index" v-html="project" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@store/mouldes/user'
import { storeToRefs } from 'pinia'
const store = storeToRefs(useUserStore())
const { userInfo } = store
const resume = computed(() => userInfo.value?.resume)
const myInfo = computed(() => resume.value?.userInfo)
const skills = computed(() => resume.value?.skills)
const projects = computed(() => resume.value?.projects)
</script>

<style lang="scss"></style>
