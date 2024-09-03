<template>
  <div class="Carousel">
    <div
      v-for="item in carouselList" :key="item.id" class="Carousel-item" :class="[currentIndex === item.id ? 'changeBig' : '']"
      @mouseover="onMouseover(item)" @mouseout="onMouseout(item)"
    >
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getImgUrl } from '@utils/imageTool'
import type { Info } from 'src/model/user'
import type { PropType } from 'vue'

const props = defineProps({
  userinfo: {
    type: Object as PropType<Info>,
    required: true,
  },
})

const imageList = computed(() => props?.userinfo?.imageList || [])

const carouselList = computed(() => imageList.value.map((item, index) => ({
  id: index,
  image: getImgUrl(item.path),
})))
const currentIndex = ref<number | null>(null)
const onMouseover = (item: any) => {
  currentIndex.value = item.id
}
const onMouseout = (item: any) => {
  currentIndex.value = null
}
</script>

  <style lang="scss" scoped>
  .Carousel {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-item {
      width: 296px;
      height: 18rem;
      opacity: 0.85;
      filter: grayscale(0.5);

      img {
        height: 100%;
        width: 100%;
        border-radius: 1.5rem;
        object-fit: cover;
      }
    }
  }

  @keyframes beBig {
    from {
      width: 296px;
    }

    to {
      width: 408px;
    }
  }

  .changeBig {
    width: 408px;
    animation: beBig 0.2s linear;
    opacity: 1;
    filter: grayscale(0)
  }
  </style>
