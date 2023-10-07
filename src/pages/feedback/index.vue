<template>
  <el-row :gutter="100">
    <el-col :span="14">
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
              <h2 class="text-base font-semibold md:text-lg dark:text-white">
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
      <FeedbackList :tagId="tagId" :tags="tags" />
    </el-col>
    <el-col :span="6">
      <!-- 板块 -->
      <FeedbackBoard v-model="tagId" :tags="tags" />
      <!-- 反馈榜 -->
      <div class="most-helper-wrap">
        <p
          class="flex items-center justify-between mt-4 text-sm font-medium text-gray-500 dark:text-gray-100"
        >
          反馈榜
        </p>
        <div
          class="mt-3 border-gray-100 divide-y border-y dark:border-gray-700"
        >
          <div class="py-3 text-gray-500 border-gray-100 dark:border-gray-700">
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
          <div class="py-3 text-gray-500 border-gray-100 dark:border-gray-700">
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
          <div class="py-3 text-gray-500 border-gray-100 dark:border-gray-700">
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
</template>

<script lang="ts" setup name="FeedbackPage">
import FeedbackList from '@/pages/feedback/FeedbackList.vue';
import FeedbackBoard from '@/pages/feedback/FeedbackBoard.vue';
import { useTitle } from '@vueuse/core';
import { getFeedbackTags, addFeedback } from '@/api/feedback';

const tags = ref([]);
const tagId = ref();

getFeedbackTags().then(res => {
  tags.value = res.data.tags;
  tagId.value = res.data.tags[0].id;
});

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
