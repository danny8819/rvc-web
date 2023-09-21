<template>
  <div class="container-1200">
    <el-row :gutter="60">
      <el-col :span="15">
        <div>
          <div
            class="feedback-tip-wrap overflow-auto border border-current rounded-lg shadow dark:border-hidden max-h-[450px]"
            style="color: rgba(25, 113, 194, 0.25)"
          >
            <div
              class="relative p-4 overflow-hidden rounded-lg dark:border dark:border-current dark:bg-transparent"
              style="color: rgba(25, 113, 194, 0.45)"
            >
              <div
                class="absolute inset-0 dark:opacity-20 opacity-[7.5%]"
                style="
                  background-image: linear-gradient(
                    to right bottom,
                    rgb(25, 113, 194),
                    rgb(17, 79, 135)
                  );
                "
              ></div>
              <div class="flex flex-col gap-3">
                <div class="relative" style="color: rgb(15, 67, 116)">
                  <h2
                    class="text-base font-semibold md:text-lg dark:text-white"
                  >
                    有话要说？
                  </h2>
                  <div style="color: rgb(17, 79, 135)">
                    <div class="text-sm content dark:text-white/80 mt-1.5">
                      告诉RVC他们如何使产品对您更有用。
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 md:hidden">
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
        </div>
        <FeedbackControl />
        <FeedbackList />
      </el-col>
      <el-col :span="6">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-100">
          Boards
        </p>
        <div class="mt-2 space-y-0.5">
          <div class="flex items-center">
            <button
              class="flex items-center dashboard-secondary w-full px-2 py-1.5 dark:text-gray-200 space-x-2 text-sm font-medium text-gray-500"
            >
              <div class="pr-1 mr-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 secondary-svg"
                >
                  <path
                    d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                  ></path>
                  <path
                    d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                  ></path>
                </svg>
              </div>
              View all posts
            </button>
          </div>
          <div class="flex items-center">
            <button
              class="bg-transparent shadow-none border-transparent dark:shadow-none dark:bg-transparent dark:border-transparent flex items-center dashboard-secondary w-full px-2 py-1.5 dark:text-gray-200 space-x-2 text-sm font-medium text-gray-500"
            >
              <div class="pr-1 w-4 mr-1.5">💡</div>
              Feature Request
            </button>
          </div>
          <div class="flex items-center">
            <button
              class="bg-transparent shadow-none border-transparent dark:shadow-none dark:bg-transparent dark:border-transparent flex items-center dashboard-secondary w-full px-2 py-1.5 dark:text-gray-200 space-x-2 text-sm font-medium text-gray-500"
            >
              <div class="pr-1 w-4 mr-1.5">🪲</div>
              Bug
            </button>
          </div>
        </div>
        <div class="most-helper-wrap">
          <p
            class="flex items-center justify-between mt-4 text-sm font-medium text-gray-500 dark:text-gray-100"
          >
            Most helpful
          </p>
          <div
            class="mt-3 border-gray-100 divide-y border-y dark:border-gray-700"
          >
            <div
              class="py-3 text-gray-500 border-gray-100 dark:border-gray-700"
            >
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center">
                  <div
                    class="pr-1 w-4 flex items-center justify-center font-medium mr-1.5 dark:text-gray-200/80 text-xs"
                  >
                    🥇
                  </div>
                  <div class="mr-1.5 w-4 h-4">
                    <div
                      class="relative flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-gray-100/60 dark:bg-gray-750/50"
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
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
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
                          src="https://fb-usercontent.fra1.cdn.digitaloceanspaces.com/avatar-4b905200-ec31-463e-89fb-ceba8b4f6441.png"
                          decoding="async"
                          data-nimg="intrinsic"
                          class="object-cover rounded-full"
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
                  <p
                    class="font-medium dark:text-gray-200 max-w-[190px] truncate"
                  >
                    Nekos4Lyfe
                  </p>
                </div>
                <div
                  class="font-semibold dark:text-gray-200 px-1 py-0.5 rounded-lg text-xs"
                >
                  <div
                    class="flex items-center justify-center false cursor-default"
                  >
                    <span class="truncate">
                      <div class="flex items-center">
                        <el-icon class="w-3.5 h-3.5 mr-1.5 secondary-svg">
                          <SuccessFilled />
                        </el-icon>
                        <code>514</code>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="py-3 text-gray-500 border-gray-100 dark:border-gray-700"
            >
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center">
                  <div
                    class="pr-1 w-4 flex items-center justify-center font-medium mr-1.5 dark:text-gray-200/80 text-xs"
                  >
                    🥈
                  </div>
                  <div class="mr-1.5 w-4 h-4">
                    <div
                      class="relative flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-gray-100/60 dark:bg-gray-750/50"
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
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
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
                          src="https://cdn.discordapp.com/avatars/198892941475971072/692a81f2d010231a9df03683607540a2.webp"
                          decoding="async"
                          data-nimg="intrinsic"
                          class="object-cover rounded-full"
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
                  <p
                    class="font-medium dark:text-gray-200 max-w-[190px] truncate"
                  >
                    cobaltbeau
                  </p>
                </div>
                <div
                  class="font-semibold dark:text-gray-200 px-1 py-0.5 rounded-lg text-xs"
                >
                  <div
                    class="flex items-center justify-center false cursor-default"
                  >
                    <span class="truncate">
                      <div class="flex items-center">
                        <el-icon class="w-3.5 h-3.5 mr-1.5 secondary-svg">
                          <SuccessFilled />
                        </el-icon>
                        <code>158</code>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="py-3 text-gray-500 border-gray-100 dark:border-gray-700"
            >
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center">
                  <div
                    class="pr-1 w-4 flex items-center justify-center font-medium mr-1.5 dark:text-gray-200/80 text-xs"
                  >
                    🥉
                  </div>
                  <div class="mr-1.5 w-4 h-4">
                    <div
                      class="relative flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-gray-100/60 dark:bg-gray-750/50"
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
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
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
                          src="https://fb-usercontent.fra1.cdn.digitaloceanspaces.com/avatar-f8426ca8-66f8-4668-9943-566c343d519e.png"
                          decoding="async"
                          data-nimg="intrinsic"
                          class="object-cover rounded-full"
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
                  <p
                    class="font-medium dark:text-gray-200 max-w-[190px] truncate"
                  >
                    guy907223982
                  </p>
                </div>
                <div
                  class="font-semibold dark:text-gray-200 px-1 py-0.5 rounded-lg text-xs"
                >
                  <div
                    class="flex items-center justify-center false cursor-default"
                  >
                    <span class="truncate">
                      <div class="flex items-center">
                        <el-icon class="w-3.5 h-3.5 mr-1.5 secondary-svg">
                          <SuccessFilled />
                        </el-icon>
                        <code>130</code>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="py-3 text-gray-500 border-gray-100 dark:border-gray-700 hidden md:block"
            >
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center">
                  <div
                    class="pr-1 w-4 flex items-center justify-center font-medium mr-1.5 dark:text-gray-200/80 text-xs"
                  >
                    4
                  </div>
                  <div class="mr-1.5 w-4 h-4">
                    <div
                      class="relative flex items-center justify-center shrink-0 w-4 h-4 rounded-full bg-gray-100/60 dark:bg-gray-750/50"
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
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
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
                          src="https://fb-usercontent.fra1.cdn.digitaloceanspaces.com/avatar-e78d23d4-dff9-43d3-a804-6e5368cf19fe.png"
                          decoding="async"
                          data-nimg="intrinsic"
                          class="object-cover rounded-full"
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
                  <p
                    class="font-medium dark:text-gray-200 max-w-[190px] truncate"
                  >
                    lekhang
                  </p>
                </div>
                <div
                  class="font-semibold dark:text-gray-200 px-1 py-0.5 rounded-lg text-xs"
                >
                  <div
                    class="flex items-center justify-center false cursor-default"
                  >
                    <span class="truncate">
                      <div class="flex items-center">
                        <el-icon class="w-3.5 h-3.5 mr-1.5 secondary-svg">
                          <SuccessFilled />
                        </el-icon>
                        <code>97</code>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name="FeedbackPage">
import FeedbackControl from '@/pages/feedback/FeedbackControl.vue';
import FeedbackList from '@/pages/feedback/FeedbackList.vue';
import { useTitle } from '@vueuse/core';

useTitle('问题反馈');

</script>

<style scoped lang="scss">
.feedback-tip-wrap {
  border: 1px solid var(--el-border-color-light);
  background-image: linear-gradient(
    to right bottom,
    rgba(25, 113, 194, 7.5%),
    rgba(17, 79, 135, 7.5%)
  );
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
</style>
