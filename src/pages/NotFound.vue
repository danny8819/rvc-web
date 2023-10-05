<template>
  <div
    class="flex items-center justify-center flex-col p-5 bg-white dark:bg-gray-800"
    style="height: 100vh"
  >
    <div>
      <img src="../assets/img/404.png" alt="" />
    </div>
    <p class="error-page__text">您的页面好像已经偏离了地球...&gt;_&lt;</p>
    <div class="mt-16 pt-2">
      <el-button @click="$router.push({ path: '/' })">返回首页</el-button>
    </div>
  </div>
</template>

<style lang="scss"></style>
