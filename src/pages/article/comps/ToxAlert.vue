<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-10 bg-white/75 dark:bg-[#222F3E]/75 flex justify-center items-center"
  >
    <div
      class="w-[480px] bg-white dark:bg-[#222F3E] rounded-md shadow-md flex flex-col"
    >
      <div class="self-start text-black dark:text-white h-[50px] pl-4 pt-3">
        <p>上传失败，语音大小请控制在 1M 以内</p>
      </div>
      <div class="self-end self h-[50px] pr-4">
        <button
          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-base font-bold shadow-md"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */
</style>
