<template>
  <a
    class="group -m-1 p-1 cursor-pointer"
    target="_blank"
    data-state="closed"
    :href="link"
  >
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      class="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="m2 12l10 7.422L22 12" />
        <path d="m7 9l5 4l5-4m-6-3l1 .8l1-.8l-1-.8z" />
      </g>
    </svg> -->
    <slot class="h-5 w-5" />
  </a>
</template>

<script lang='ts' setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<style lang='scss'>
</style>
