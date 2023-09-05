<template>
  <el-card shadow="never" class="model-detail__info-container">
    <div class="model-detail__info-content position-relative">
      <el-image
        class="position-absolute top-0 w-100 h-100"
        :src="
          data?.picture ||
          'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e666efeb-9837-4e85-89a8-7998088b8836/width=450/2023-09-03%20115232.jpeg'
        "
        fit="contain"
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
