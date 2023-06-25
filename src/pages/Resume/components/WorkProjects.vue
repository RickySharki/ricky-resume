<template>
  <el-timeline class="project-time-line">
    <el-timeline-item
      v-for="(experience, index) in experienceArray"
      :key="index"
      :timestamp="experience.time"
      placement="top"
    >
      <el-card>
        <h4>{{ experience.company }}</h4>
        <!-- <p v-for="content in experience.content">{{ com }}</p> -->
        <div v-for="(content, i) in experience.content" :key="i">
          <h4>{{ content.title }}</h4>
          <p>{{ content.content }}</p>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Experience } from '@model/user'
defineProps({
  experienceArray: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.project-time-line {
    padding-inline-start: 10px;
}
</style>
