<template>
  <el-card shadow="never">
    <div class="d-flex">
      <div class="d-flex justify-center flex-column">
        <el-avatar :size="60" :src="data?.avatar"></el-avatar>
      </div>
      <div class="flex-1 d-flex flex-column justify-center align-center">
        <div class="ma-2 d-flex justify-center">username</div>
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
