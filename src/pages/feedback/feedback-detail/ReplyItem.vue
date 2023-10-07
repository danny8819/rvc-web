<template>
  <div class="w-full relative mb-8">
    <div class="absolute left-5 h-full -mx-3 px-3 group cursor-pointer top-0">
      <span
        class="absolute top-0 left-3 h-full main-transition w-[2px] group-hover:bg-gray-200 dark:group-hover:bg-gray-300 bg-gradient-to-b bg-transparent from-gray-100/50 to-gray-100/30 dark:bg-transparent dark:from-gray-700 dark:to-gray-700/40"
      ></span>
    </div>
    <div
      class="flex items-start w-full space-x-3"
      style="margin-left: 0px; width: auto"
    >
      <!-- avatar -->
      <div class="dark:bg-[#1E232F] p-1 rounded-full -m-1 relative">
        <div class="relative z-10">
          <div
            class="w-10 h-10 overflow-hidden border border-gray-100 rounded-full dark:border-gray-700/50"
          >
            <span
              style="
                box-sizing: border-box;
                display: inline-block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: relative;
                max-width: 100%;
              "
            >
              <span
                style="
                  box-sizing: border-box;
                  display: block;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 0px;
                  max-width: 100%;
                "
              >
                <img
                  alt=""
                  :src="data.avatar"
                  style="
                    display: block;
                    max-width: 100%;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0px;
                    margin: 0px;
                    padding: 0px;
                  "
                />
              </span>
              <img
                alt=""
                :src="data.avatar"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-750/50"
                style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "
              />
            </span>
          </div>
        </div>
      </div>
      <div class="relative flex-1 w-full min-w-0">
        <!-- title -->
        <div class="">
          <div class="flex flex-wrap items-center text-sm">
            <p class="font-semibold text-gray-600 dark:text-gray-100">
              {{ data.nickname }}
            </p>
            <span
              class="text-gray-200 pointer-events-none dark:text-gray-200/60 mx-1.5"
            >
              •
            </span>
            <p
              class="text-gray-300 text-[11px] font-medium dark:text-gray-200/80 first-letter:uppercase"
            >
              {{ data.createTime }}
            </p>
          </div>
        </div>
        <!-- comment -->
        <div
          class="relative mt-2 overflow-hidden text-sm text-gray-400 content dark:text-gray-200"
        >
          <div class="max-h-[302px] overflow-hidden py-1">
            <p>
              {{ data.content }}
            </p>
          </div>
        </div>
        <!-- icon -->
        <div class="flex items-center gap-2 mt-3">
          <div class="flex items-center gap-2 -ml-0.5">
            <div class="flex items-center rounded-md">
              <button
                class="mr-2 dark:shadow-none border-none shadow-none px-1 py-1 bg-transparent dark:bg-transparent border border-transparent dark:border-transparent hover:border-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              >
                <span class="mdi mdi-thumb-up"></span>
                <span class="">
                  {{ '' }}
                </span>
              </button>
              <button
                class="mr-2 dark:shadow-none shadow-none border-none px-1 py-1 bg-transparent dark:bg-transparent border border-transparent dark:border-transparent hover:border-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              >
                <span class="mdi mdi-thumb-down"></span>
              </button>

              <button
                class="dark:shadow-none shadow-none border-none px-1 py-1 bg-transparent dark:bg-transparent border border-transparent dark:border-transparent hover:border-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              >
                <span class="mdi mdi-message-reply"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 子  需要多级可以使用 -->
    <!-- <div class="relative min-w-[340px] ml-7 sm:ml-8">
      <div
        class="flex items-start py-2 mt-4 space-x-3"
        style="opacity: 1"
        v-for="(item, index) in data.children || []"
        :key="index"
      >
        <div class="w-full">
          <ReplyItem :data="item" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// import ReplyItem from '@/pages/feedback/ReplyItem.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
