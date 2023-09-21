<template>
  <div class="feedback-control flex flex-wrap justify-between gap-3 mt-4">
    <div class="flex gap-3">
      <button class="dashboard-secondary bg-transparent dark:bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="secondary-svg mr-1.5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        New
      </button>
      <button class="dashboard-secondary bg-transparent dark:bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="secondary-svg mr-1.5"
        >
          <path
            fill-rule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Top
      </button>
      <button class="dashboard-secondary bg-transparent dark:bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="secondary-svg mr-1.5"
        >
          <path
            fill-rule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Trending
      </button>
    </div>
    <div class="flex items-center gap-3">
      <div class="hidden lg:block">
        <div>
          <!-- <style> .react-datepicker__day--outside-month {
            color: rgba(134, 144, 179, 0.8) !important;
          }
          </style> -->

          <div class=""><div></div></div>
          <button
            class="p-0 bg-transparent dark:bg-transparent dashboard-secondary"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r1:"
            data-state="closed"
          >
            <span class="inline-flex items-center px-2.5 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="secondary-svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <button
        class="bg-transparent py-2 sm:py-1.5 dark:bg-transparent dashboard-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="secondary-svg sm:mr-1.5"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="hidden sm:block">Search</span>
      </button>
      <div class="hidden md:block">
        <button
          class="px-3 sm:px-3 text-sm branded-btn border border-white/10 shadow-lg text-left relative"
          style="background-color: rgb(25, 113, 194)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="shrink-0 w-3.5 h-3.5 mr-1.5 opacity-70 md:hidden lg:block"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Create A New Post
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style>
html {
  --feedback-btn-bg-color: rgb(36 40 55);
  --feedback-border-color: rgb(36 40 55);

  --feedback-btn-color: rgb(64 72 100/1);

  --feedback-btn-active-color: #fff;
}

html.dark {
  --feedback-btn-bg-color: rgb(36 40 55);
  --feedback-border-color: rgb(36 40 55);

  --feedback-btn-color: rgb(178 184 205 / 1);

  --feedback-btn-active-color: rgb(36 40 55);
}
</style>
<style scoped lang="scss">
.dashboard-secondary {
  --tw-border-opacity: 1;
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);

  border: 1px solid var(--el-border-color-light);
  fill: currentColor;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(79 88 122 / var(1));

  svg {
    height: 1rem;
    width: 1rem;
    color: rgba(93, 104, 144, 0.6);
  }
  &:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) rgba(129, 140, 248, 0.3);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
    background-color: var(--feedback-btn-active-color);
  }

  &:hover {
    background-color: var(--feedback-btn-active-color);
  }
}
.branded-btn {
  color: rgb(255 255 255 / 1);
}
button {
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;

  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--feedback-btn-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
