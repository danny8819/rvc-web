<template>
  <div class="container-1000">
    <div class="rvc-card">
      <div class="ml-10">
        <el-avatar :size="90" :src="userStore.userInfo?.avatar"> </el-avatar>
      </div>
      <h1 class="ml-10">{{ userStore.userInfo?.nickname }}</h1>
      <h3 class="ml-10">{{ userStore.userInfo?.description }}</h3>

      <div class="d-flex align-center mt-5">
        <div class="mx-10">
          <div>level</div>
          <div>{{ userStore.userInfo?.level }}</div>
        </div>
        <div>
          <div>modelLevel</div>
          <div>{{ userStore.userInfo?.modelLevel }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>

<style scoped lang="scss"></style>
