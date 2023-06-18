<template>
  <div class="icon-link">
    <div class="mt-6 flex gap-6" style="opacity: 1; transform: none">
      <a
        class="group -m-1 p-1"
        target="_blank"
        aria-label="我的 GitHub"
        data-state="closed"
        :href="githubUrl"
      ><svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200"
      >
        <path
          d="M10 14.9993C9.34732 15.6987 8.98919 16.6227 9 17.5793V20.9993M14 14.9993C14.6527 15.6987 15.0108 16.6227 15 17.5793V20.9993M9 19.0493C8.10549 19.4055 7.13532 19.5294 6.18 19.4093C4.66 18.8893 5.06 17.5093 4.28 16.9393C3.90518 16.6713 3.46037 16.5184 3 16.4993M19 9.74927C19 12.7493 17.05 14.9993 12 14.9993C6.95 14.9993 5 12.7493 5 9.74927C4.9753 8.70844 5.20893 7.67772 5.68 6.74927C5.34 5.27927 5.47 3.46927 6.2 3.10927C6.93 2.74927 8.47 3.40927 9.74 4.25927C10.486 4.12615 11.2422 4.05922 12 4.05927C12.7572 4.05262 13.5134 4.11285 14.26 4.23927C15.53 3.38927 17.14 2.75927 17.8 3.08927C18.46 3.41927 18.66 5.25927 18.32 6.72927C18.7943 7.66371 19.028 8.70171 19 9.74927Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </a>
      <a
        class="group -m-1 p-1"
        target="_blank"
        aria-label="我的邮箱"
        data-state="closed"
        :href="emailUrl"
      ><svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200"
      >
        <path
          d="M20.4098 7.20903L17.3974 9.55205C15.4711 11.0503 14.5079 11.7994 13.4398 12.0867C12.4976 12.3401 11.5024 12.3401 10.5602 12.0867C9.49205 11.7994 8.52891 11.0503 6.60263 9.55205L3.59018 7.20903M20.4098 7.20903C19.9756 6.46813 19.3272 5.86533 18.543 5.47685C17.5804 5 16.3202 5 13.8 5H10.2C7.67976 5 6.41965 5 5.45704 5.47685C4.67282 5.86533 4.02441 6.46813 3.59018 7.20903M20.4098 7.20903C20.4444 7.26809 20.4777 7.32802 20.5095 7.38879C21 8.32466 21 9.54977 21 12C21 14.4502 21 15.6753 20.5095 16.6112C20.0781 17.4344 19.3897 18.1037 18.543 18.5232C17.5804 19 16.3202 19 13.8 19H10.2C7.67976 19 6.41965 19 5.45704 18.5232C4.61031 18.1037 3.9219 17.4344 3.49047 16.6112C3 15.6753 3 14.4502 3 12C3 9.54977 3 8.32466 3.49047 7.38879C3.52232 7.32802 3.55557 7.26809 3.59018 7.20903"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </a>
      <a
        class="group -m-1 p-1 cursor-pointer"
        target="_blank"
        aria-label="我的掘金"
        data-state="closed"
        :href="juejinUrl"
      >
        <svg
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
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  emailUrl: String,
  githubUrl: String,
  juejinUrl: String,
})
</script>

<style lang="scss"></style>
