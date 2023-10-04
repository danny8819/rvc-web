<template>
  <main class="article-container m-auto flex justify-between">
    <div class="w-2/3 px-4 py-4">
      <div class="flex items-center justify-start gap-8 pb-4">
        <button class="text-xl dark:text-[#94A3B8]" @click="$router.back()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        <h1 class="font-bold text-3xl dark:text-[#94A3B8]">创建文章</h1>
      </div>

      <label
        for="create-article-title"
        class="text-xl font-bold inline-block pb-1 dark:text-[#94A3B8]"
      >
        标题
        <span class="text-red-500">*</span>
      </label>
      <br />
      <input
        type="text"
        id="create-article-title"
        placeholder="例如：如何创建自己的 LoRA"
        class="w-full placeholder:text-base placeholder:text-black/50 px-1.5 py-1.5 rounded-md bg-white dark:bg-[#1E293B] placeholder:dark:text-[#94A3B8]/50 dark:text-[#94A3B8]"
      />
      <br />
      <label
        for="create-article-title"
        class="inline-block pt-4 text-xl font-bold pb-1 dark:text-[#94A3B8]"
      >
        内容
        <span class="text-red-500">*</span>
      </label>
      <!-- <MarkdownEditor /> -->
      <RichTextEditor />
    </div>
    <div class="w-1/3 px-1 py-24 flex flex-col gap-4">
      <button
        class="block w-full text-xl font-bold bg-white text-[#94A3B8] border-2 rounded-md py-2 hover:bg-opacity-50 dark:bg-[#1E293B]"
      >
        保存草稿
      </button>
      <button
        class="block w-full text-xl font-bold border-2 rounded-md py-2 bg-blue-500 hover:bg-blue-600 text-white dark:text-white/80"
      >
        发布
      </button>
      <p class="text-sm">
        您的文章当前
        <a>处于隐藏状态</a>
      </p>
      <div class="flex gap-2">
        <input type="checkbox" id="mature" />
        <label for="mature" class="font-bold text-sm">
          成熟
          <span class="inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              />
            </svg>
          </span>
        </label>
      </div>
      <div>
        <p class="text-xl font-bold inline-block pb-1 dark:text-[#94A3B8]">
          封面图片
          <span class="text-red-500">*</span>
        </p>
        <div class="flex w-full justify-center items-center text-center">
          <div
            class="bg-[#f7fafc] h-24 w-full border-2 border-dashed border-[#8e96a1] dark:bg-[#1E293B]"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
          >
            <input
              type="file"
              multiple
              name="file"
              id="fileInput"
              class="opacity-0 overflow-hidden"
              @change="onChange"
              ref="fileInputRef"
              accept=".pdf,.jpg,.jpeg,.png"
            />

            <label for="fileInput" class="cursor-pointer">
              <div v-if="isDragging">释放以将文件放到此处。</div>
              <div v-else class="flex items-center justify-center gap-4">
                <span class="text-4xl inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    />
                  </svg>
                </span>
                将图像拖放到此处， 不应超过 5 MB
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="relative">
        <label
          for="select-category"
          class="text-xl font-bold inline-block pb-1 dark:text-[#94A3B8]"
        >
          标题
          <span class="text-red-500">*</span>
        </label>
        <select
          name="select-category"
          id="select-category"
          class="w-full border-2 text-lg text-[#94A3B8] px-1 py-1 rounded-md border-gray-400 bg-white dark:bg-[#1E293B]"
        >
          <option value="">请选择一个类别</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
        </select>
        <span class="absolute right-4 bottom-0.5">
          <svg
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
          >
            <path
              d="M723.101538 366.276923L787.692308 274.274462 509.636923 78.769231 236.307692 271.044923l64.59077 91.844923 208.738461-146.825846zM300.898462 630.153846L236.307692 721.998769l278.055385 195.584L787.692308 725.464615l-64.59077-91.923692-208.738461 146.825846z"
              fill="#C6C6C6"
            ></path>
          </svg>
        </span>
      </div>
      <div>
        <p class="text-xl font-bold pb-1 dark:text-[#94A3B8]">标签</p>
        <button
          class="px-4 py-1 bg-blue-300 rounded-md text-blue-500 hover:bg-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>

      <!-- <div>
        <p>附件</p>
        <p>0/10 上传的文件</p>
        <div class="flex w-full justify-center items-center text-center">
          <div
            class="bg-[#f7fafc] h-24 w-full border-2 border-dashed border-[#8e96a1]"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
          >
            <input
              type="file"
              multiple
              name="file"
              id="fileInput"
              class="opacity-0 overflow-hidden"
              @change="onChange"
              ref="fileInputRef"
              accept=".pdf,.jpg,.jpeg,.png"
            />

            <label for="fileInput" class="cursor-pointer">
              <div v-if="isDragging">释放以将文件放到此处。</div>
              <div v-else class="flex items-center justify-center gap-4">
                <span class="text-4xl inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    />
                  </svg>
                </span>
                将文件拖放到此处， 不应超过 32 MB
              </div>
            </label>
          </div>
        </div>
      </div> -->
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue';
import MarkdownEditor from './MarkdownEditor.vue';
import RichTextEditor from './RichTextEditor.vue';
const isDragging = ref(false);
const files = ref([]);
const fileInputRef = ref(null);

const onChange = () => {
  files.value = [...fileInputRef.value.files];
};

const dragover = e => {
  e.preventDefault();
  isDragging.value = true;
};

const dragleave = () => {
  isDragging.value = false;
};

const drop = e => {
  e.preventDefault();
  fileInputRef.value.files = e.dataTransfer.files;
  onChange();
  isDragging.value = false;
};
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.article-container {
  width: 1320px;
}
@media (min-width: 640px) {
  .article-container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .article-container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .article-container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .article-container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .article-container {
    max-width: 1320px;
  }
}
</style>
