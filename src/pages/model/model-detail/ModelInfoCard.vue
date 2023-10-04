<template>
  <el-card shadow="never" class="model-detail__info-container">
    <div class="model-detail__info-content relative">
      <el-image
        class="top-0 w-full h-full"
        :src="data?.picture"
        fit="contain"
        style="position: absolute"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
defineProps<{ data: any }>();
</script>

<style scoped lang="scss">
.model-detail__info-content {
  padding-top: 60%;
  width: 100%;
}

.model-detail__info-footer {
  overflow: hidden;
}
</style>
