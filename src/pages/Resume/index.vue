<template>
  <div class="w-full h-full px-4 py-8">
    <el-card shadow="hover" class="mb-4">
      <template #header>
        个人信息
      </template>
      <div class="user-info grid grid-cols-3 grid-rows-2 gap-10">
        <span>姓名：{{ userInfo.name }}</span><span>工作年限：{{ userInfo.workYear }}</span>
        <span>毕业院校：{{ userInfo.school }}</span><span>联系电话：{{ userInfo.phone }}</span>
        <span>个人邮箱：{{ userInfo.email }}</span><span>github：<el-link :href="userInfo.github" target="_blank">{{ userInfo.github }}</el-link></span>
      </div>
    </el-card>
    <el-card shadow="hover" class="mb-4">
      <template #header>
        专业技能
      </template>
      <p v-for="(skill, index) in skills" :key="index" v-html="skill" />
    </el-card>
    <el-card shadow="hover">
      <template #header>
        项目经历
      </template>
      <p v-for="(project, index) in projects" :key="index" v-html="project" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { Resume } from '@model/user'
import { usePromise } from '@utils/usePromise'
import { importAsyncFiles } from '../../ownerInfo'
const { result: myInfo } = usePromise(importAsyncFiles)
const resume = computed(() => myInfo.value?.resume)
const userInfo = computed(() => resume.value?.userInfo)
const skills = computed(() => resume.value?.skills)
const projects = computed(() => resume.value?.projects)
</script>

<style lang="scss"></style>
