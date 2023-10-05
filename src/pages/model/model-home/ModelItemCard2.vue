<template>
  <div class="model-item relative">
    <div class="model-item__pic--wrap">
      <img :src="data.picture" />
    </div>
    <div class="model-item__footer">
      <div class="model-item__title">
        {{ data.name }}
      </div>
      <div class="flex justify-between">
        <div class="flex items-center">
          <el-avatar :size="30" :src="data.avatar"></el-avatar>
          <span class="ml-2">{{ data.nickname }}</span>
        </div>
        <div class="flex justify-around items-center">
          <SvgIcon name="liulan"></SvgIcon>
          {{ data.lookNum }}
        </div>
      </div>
    </div>
    <span
      class="absolute top-0 w-full h-full z-0"
      style="
        background: linear-gradient(
          130deg,
          rgb(36, 198, 220),
          rgb(84, 51, 255) 41.07%,
          rgb(255, 0, 153) 76.05%
        );
        opacity: 0.4;
        z-index: -1;
      "
    ></span>
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
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-out;
  border-radius: 5px;
  overflow: hidden;

  .model-item__pic--wrap {
    transform: scale(1);
    transition: all 0.2s ease-out;
  }
  &:hover {
    // transform: translateY(2px);
    box-shadow:
      0 2px 5px rgba(0, 0, 0, 0.1),
      0 1px 2px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);

    // .model-item__pic--wrap {
    //   transform: scale(1.1);
    // }
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
  width: 100%;
  font-size: 13px;
  color: #9499a0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  bottom: 0;
  z-index: 2;

  .model-item__title {
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
