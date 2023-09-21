<template>
  <el-card shadow="never">
    <div class="flex">
      <div class="flex justify-center flex-col">
        <el-avatar :size="60" :src="data?.avatar"></el-avatar>
      </div>
      <div class="flex-1 flex flex-col justify-center items-center">
        <div class="m-2 flex justify-center">username</div>
        <el-button style="width: 50%">关注</el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss"></style>
