<template>
  <div class="Carousel">
    <div class="Carousel-item" v-for="item in carouselList" :key="item.id" @mouseover="onMouseover(item)"
      @mouseout="onMouseout(item)" :class="[currentIndex == item.id ? 'changeBig' : '']">
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getImgUrl } from "@utils/imageTool"
import { info } from '../../../ownerInfo'
const { imageList } = info
const carouselList = ref(imageList.map((item: any) => {
  item.image = getImgUrl(item.path)
  return item
}))
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
