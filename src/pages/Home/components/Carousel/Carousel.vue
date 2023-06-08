<template>
  <div class="Carousel">
    <div class="Carousel-item" v-for="item in carouselList" :key="item.id" @mouseover="onMouseover(item)"
      @mouseout="onMouseout(item)" :class="[currentIndex == item.id ? 'changeBig' : 'beSmall']">
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>

const carouselList = ref([
  {
    id: 1,
    image: new URL('./images/1.webp', import.meta.url).href
  },
  {
    id: 2,
    image: new URL('./images/2.webp', import.meta.url).href
  },
  {
    id: 3,
    image: new URL('./images/3.webp', import.meta.url).href
  },
  {
    id: 4,
    image: new URL('./images/4.webp', import.meta.url).href
  },
  {
    id: 5,
    image: new URL('./images/5.webp', import.meta.url).href
  },
  {
    id: 6,
    image: new URL('./images/6.webp', import.meta.url).href
  }
])

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
