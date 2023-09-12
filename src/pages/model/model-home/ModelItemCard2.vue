<template>
  <div class="model-item">
    <div class="model-item__pic--wrap">
      <img
        :src="data.picture||'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3c451176-a098-4191-907a-e898bfdf673b/width=2048/ComfyUI_00747_.jpeg'"
      />
    </div>
    <div class="model-item__footer">
      <div class="model-item__title">
        【原神】全任务全剧情1 序章 第一章 完成 捕风的异乡人 PC版 Yuan Shen
        x天马骑士x版
      </div>
      <div class="d-flex justify-space-between">
        <div class="d-flex align-center">
          <el-avatar :size="30" :src="data.avatar"> </el-avatar>
          <span class="ml-2">{{ data.nickname }}</span>
        </div>
        <div class="d-flex justify-space-around align-center">
          <SvgIcon name="liulan"></SvgIcon>
          {{ data.lookNum }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  data: Object,
});
</script>

<style scoped lang="scss">
.model-item {
  position: relative;

  width: 24%;
  max-width: 400px;

  box-sizing: border-box;
  margin-bottom: 5px;
  margin-right: 10px;
  transition: all 0.2s ease-out;
  border-radius: 5px;

  overflow: hidden;
  .model-item__pic--wrap {
    transform: scale(1.1);
    transition: all 0.2s ease-out;
  }
  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);

    .model-item__pic--wrap {
      transform: scale(1.1);
    }
  }
}

.model-item__pic--wrap {
  overflow: hidden;
  position: relative;
  padding-top: 150%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 6px;
    overflow: hidden;
  }
}

.model-item__footer {
  font-size: 13px;
  color: #9499a0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  bottom: 0;
  z-index: 2;

  .model-item__title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    font-size: 14px;
    line-height: 1.5;
    max-height: 1.5em;
    padding-right: 16px;
    margin: 10px 0;
  }
}
</style>
