<template>
  <el-popover
    class="upload-popover"
    placement="top-start"
    :width="200"
    trigger="click"
  >
    <template #reference>
      <button
        class="btn btn-sm border-solid h-10"
        style="color: var(--el-color-primary); border-color: currentColor"
        type="button"
      >
        <SvgIcon name="upload" />
        <span class="ml-1">投稿</span>
      </button>
      <!-- <button class="publish-btn" type="button">
        
      </button> -->
    </template>
    <template #default>
      <div class="upload-panel-popover">
        <div class="upload-item">
          <SvgIcon name="upload-text" size="24" />
          <div class="item-title">交流投稿</div>
        </div>
        <div class="upload-item" @click="$router.push('/model-publish')">
          <SvgIcon name="upload" size="24" />
          <div class="item-title">模型投稿</div>
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.upload-panel-popover {
  display: flex;
  //   width: 330px;
  justify-content: space-around;
  .upload-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 63px;
    color: var(--el-text-color-regular);

    cursor: pointer;
    transition: background-color 0.3s;
    svg {
      margin-bottom: 6px;
    }

    &:hover {
      background-color: var(--el-color-primary-light-9);
    }
  }
}
</style>
