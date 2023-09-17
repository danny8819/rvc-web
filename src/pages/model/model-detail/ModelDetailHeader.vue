<template>
  <div class="mode-detail-header">
    <div class="flex justify-between">
      <div class="mode-detail-header__left flex items-center">
        <div class="mode-detail__title mr-5">{{ data?.name }}</div>
        <!-- 点赞 -->
        <div class="data-count flex items-center justify-center">
          <SvgIcon name="dianzanpc" />
          <span class="ml-1 text">{{ data?.likeNum }}</span>
        </div>
        <!-- 下载 -->
        <!-- <div class="data-count flex items-center justify-center">
          <el-icon size="25"><Download /></el-icon>
          <span class="ml-1 text">{{ data?.downNum }}</span>
        </div> -->
        <!-- 浏览量 -->
        <div class="mr-2 flex items-center">
          <SvgIcon name="watch" size="25" />
          <span class="ml-1"> {{ data?.lookNum }} </span>
        </div>
        <el-rate model-value="5" class="model-detail_rate" :disabled="true" />
      </div>
      <!-- 五星 -->
      <div class="mode-detail-header__right"></div>
    </div>
    <div class="mode-detail-header__info my-2">
      <div class="mode-detail-header__info-date">
        发布时间：{{ data?.uploadDate }}
      </div>
    </div>
    <div class="mode-detail-header__tags mb-2">
      <el-tag v-for="(tag, index) in data?.types" :key="index" class="mr-5">{{
        tag.type
      }}</el-tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss">
.mode-detail__title {
  font-weight: 700;
  font-size: 34px;
  line-height: 1.3;
  margin: 0px;
  word-break: break-word;
}
.mode-detail-header__left {
  gap: 10px;
}
.data-count .text {
  line-height: 1.55;
  text-decoration: none;
  font-size: 16px;
}
.mode-detail-header__tags {
  display: flex;
  gap: 4px;
}

.mode-detail-header__info-date {
  color: rgb(144, 146, 150);
  font-size: 14px;
  line-height: 1.55;
  text-decoration: none;
}

:deep(.model-detail_rate .el-rate__icon) {
  font-size: 28px;
}
</style>
