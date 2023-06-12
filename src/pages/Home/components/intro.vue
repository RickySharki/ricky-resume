<template>
  <div class="introduce">
    <div class="text-4xl">
      <span>{{ str }}</span>
      <span>{{ owner }}</span>
      <span>{{ str2 }}</span>
      <span>,</span>
      <span
        class="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5 ml-2"
      >
        <span
          class="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90"
        ><span
          class="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
        /><span
          class="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
        /><span
          class="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
        /><span
          class="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
        /></span>
        程序员
      </span>
    </div>
    <p
      class="mt-6 text-base text-zinc-600 dark:text-zinc-400"
      style="opacity: 1; transform: none"
    >
      <span
        data-br=":Rkmqhmja:"
        data-brr="1"
        style="
          display: inline-block;
          vertical-align: top;
          text-decoration: inherit;
          max-width: 661px;
        "
      >我是{{ owner }},
        <a
          class="inline-flex place-items-baseline items-baseline gap-0.5 pr-0.5 text-[0.95em] leading-none font-semibold text-zinc-800 hover:underline dark:text-zinc-100"
          rel="noopener noreferrer"
          target="_blank"
          data-state="closed"
          :href="linkUrl"
        >

          前端开发工程师
          <svg
            width="0.95em"
            height="0.95em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block translate-y-0.5"
            aria-hidden="true"
          >
            <path
              d="M20 13.5001C20 14.8946 20 15.5919 19.8618 16.1673C19.4229 17.9956 17.9955 19.423 16.1672 19.8619C15.5918 20.0001 14.8945 20.0001 13.5 20.0001H12C9.19974 20.0001 7.79961 20.0001 6.73005 19.4551C5.78924 18.9758 5.02433 18.2109 4.54497 17.2701C4 16.2005 4 14.8004 4 12.0001V11.5001C4 9.17035 4 8.0055 4.3806 7.08664C4.88807 5.8615 5.86144 4.88813 7.08658 4.38066C7.86344 4.05888 8.81614 4.00915 10.5 4.00146M19.7597 9.45455C20.0221 7.8217 20.0697 6.16984 19.9019 4.54138C19.8898 4.42328 19.838 4.31854 19.7597 4.24027M19.7597 4.24027C19.6815 4.16201 19.5767 4.11023 19.4586 4.09806C17.8302 3.93025 16.1783 3.97792 14.5455 4.24027M19.7597 4.24027L10 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg></a><br>{{ desc }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  owner: String,
  linkUrl: String,
  desc: String,
})
const str = '<'
const str2 = '/>'
</script>

<style lang="scss" scoped></style>
