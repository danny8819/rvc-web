<template>
  <div class="model-detail-right">
    <el-collapse model-value="1" class="model-detail-right__collapse">
      <el-collapse-item name="1">
        <template #title>
          <span class="ml-2">信息</span>
        </template>
        <el-descriptions :column="1" border>
          <el-descriptions-item
            label="模型类型"
            label-align="left"
            align="center"
            width="190"
          >
            {{ data?.aiType }}
          </el-descriptions-item>
          <el-descriptions-item
            label="模型描述"
            label-align="left"
            align="center"
          >
            {{ data?.description }}
          </el-descriptions-item>
          <el-descriptions-item
            label="注意事项"
            label-align="left"
            align="center"
          >
            {{ data?.note }}
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>

      <el-collapse-item name="2">
        <template #title>
          <span class="ml-2">文件</span>
        </template>
        <div class="flex justify-between p-2">
          <div>Pruned Model fp16 (6.46 GB)</div>
          <div>Download</div>
        </div>
      </el-collapse-item>

      <el-collapse-item name="3">
        <template #title>
          <el-rate model-value="5" :disabled="true" class="ml-2" />
        </template>
        <div class="p-2">
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
        </div>
      </el-collapse-item>

      <el-collapse-item name="4">
        <template #title>
          <span class="ml-2">关于此版本</span>
        </template>
        <div class="p-2">
          <p>
            Adding data about materials, rust effects, mechanical details,
            people, scenes, and more.
          </p>
          <p>Recommend</p>
          <p>Steps: ~40-60,</p>
          <p>CFG scale: ~4-10</p>
          <p>Sampler: euler a / DPM++ 2M SDE Karras</p>
          <p>Adetail for face</p>
          <p>N prompt:</p>
          <p>
            <em>
              painting, drawing, sketch, cartoon, anime, manga, render, CG, 3d,
              watermark, signature, label, long neck,
            </em>
          </p>
        </div>
      </el-collapse-item>
    </el-collapse>

    <div class="detail-card">
      <div class="detail-card__header">
        <div class="flex items-center justify-center w-full h-[70px] p-2">
          <el-avatar
            class="mr-4"
            :size="34"
            src="https://picsum.photos/30.webp"
          ></el-avatar>

          <div class="userInfo-info">
            <div>username</div>
            <div>july 4455</div>
          </div>
          <div class="userInfo-right">
            <div class="follow-btn">Follow</div>
          </div>
        </div>
      </div>
      <div class="detail-card__body">
        <div class="icon-data-wrap">
          <div class="status-bar">
            <div class="status-item">
              <span class="mr-1">
                <SvgIcon name="icon_upload" size="14"></SvgIcon>
              </span>
              <span class="count-wrap">
                <div>29</div>
              </span>
            </div>
            <div class="status-item">
              <span class="mr-1">
                <SvgIcon name="badge-inner" size="14"></SvgIcon>
              </span>
              <span class="count-wrap">
                <div>5.6k</div>
              </span>
            </div>
            <div class="status-item">
              <span class="mr-1">
                <SvgIcon name="icon-heart" size="14"></SvgIcon>
              </span>
              <span class="count-wrap">
                <div>84k</div>
              </span>
            </div>
            <div class="status-item">
              <span class="mr-1">
                <SvgIcon name="download" size="14"></SvgIcon>
              </span>
              <span class="count-wrap">
                <div>658k</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss">
.model-detail-right {
}
.follow-btn {
  width: 66px;
  border-radius: 15px;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: #1971c2;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
}

.userInfo-info {
  flex: 1;
  display: flex;
  flex-direction: column;

  div {
    line-height: 1.5em;
  }
}
.userInfo-right {
  width: 77px;
}

.icon-data-wrap {
  padding: 0px 8px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  border-radius: 32px;
  font-weight: 700;
  cursor: inherit;
  background: rgb(52, 58, 64);
  color: rgb(255, 255, 255);

  .count-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status-bar {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 10px;
  }
  .status-item {
    -webkit-tap-highlight-color: transparent;
    font-size: 13px;
    height: 26px;
    line-height: 24px;
    text-decoration: none;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 700;
    letter-spacing: 0.25px;
    cursor: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    background: transparent;
    color: rgb(233, 236, 239);
    border: 1px solid transparent;
    padding: 0px;
  }
 
}

.detail-card {
  outline: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  text-decoration: none;
  color: rgb(193, 194, 197);
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid rgb(55, 58, 64);
  position: relative;
  overflow: hidden;
  background-color: rgb(37, 38, 43);
  padding: 10px;
}

.el-collapse {
  border: none;
}
:deep(.model-detail-right__collapse .el-collapse-item__wrap) {
  border: none;
}
:deep(.model-detail-right__collapse .el-collapse-item) {
  border: 1px solid rgb(55, 58, 64);
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: rgb(37, 38, 43);
  &.is-active {
    background-color: transparent;
  }
}
:deep(.model-detail-right__collapse .el-collapse-item__header) {
  border: none;
}
</style>
