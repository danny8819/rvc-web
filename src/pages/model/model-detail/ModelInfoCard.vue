<template>
  <el-card shadow="never" class="model-detail__info-container">
    <div class="model-detail__info-content position-relative">
      <el-image
        class="position-absolute top-0 w-100 h-100"
        :src="data?.picture"
        fit="contain"
      />
    </div>

    <!-- <el-divider class="my-2" /> -->

    <!-- <div class="model-detail__info-footer pa-5">
      <div class="model-detail__info-title mb-2">
        <h2>{{ modelDetail?.name }}</h2>
        <h3>{{ modelDetail?.description }}</h3>
      </div>
      <div class="model-detail__info-tags mb-2">
        <el-tag
          v-for="(tag, index) in modelDetail?.types"
          :key="index"
          class="mr-5"
          >{{ tag.type }}</el-tag
        >
      </div>
    </div> -->
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
