<template>
  <!-- <el-card shadow="never" class="mb-5"> -->
  <div class="model-detail-right">
    <el-collapse model-value="1">
      <el-collapse-item title="信息" name="1">
        <el-descriptions title="" :column="1" border>
          <el-descriptions-item
            label="模型类型"
            label-align="left"
            align="center"
            width="190"
            >{{ data?.aiType }}</el-descriptions-item
          >
          <el-descriptions-item
            label="模型描述"
            label-align="left"
            align="center"
            >{{ data?.description }}</el-descriptions-item
          >
          <el-descriptions-item
            label="注意事项"
            label-align="left"
            align="center"
            >{{ data?.note }}</el-descriptions-item
          >
        </el-descriptions>
      </el-collapse-item>

      <el-collapse-item title="1 File" name="2">
        <div class="flex justify-between">
          <div>Pruned Model fp16 (6.46 GB)</div>
          <div>Download</div>
        </div>
      </el-collapse-item>

      <el-collapse-item name="3">
        <template #title>
          <el-rate model-value="5" :disabled="true" />
        </template>
        <div>
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
          <el-progress :stroke-width="10" :percentage="100" color="#F08C00" />
        </div>
      </el-collapse-item>

      <el-collapse-item name="4" title="About this version">
        <div>
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
            <em
              >painting, drawing, sketch, cartoon, anime, manga, render, CG, 3d,
              watermark, signature, label, long neck,</em
            >
          </p>
        </div>
      </el-collapse-item>

      <!-- <el-collapse-item name="5" :disabled="true">
      <template #title> </template>
      <div>11</div>
    </el-collapse-item> -->
    </el-collapse>

    <div class="userInfo-wrap">
      <div class="userInfo-header">
        <el-avatar class="mr-4" :size="28" src="/img/user-placeholder.webp">
        </el-avatar>

        <div class="userInfo-info">
          <div>username</div>
          <div>july 4455</div>
        </div>
        <div class="userInfo-right">
          <div class="follow-btn">Follow</div>
        </div>
      </div>
      <div class="userInfo-footer">qaaa</div>
    </div>
  </div>
  <!-- </el-card> -->
</template>

<script lang="ts" setup>
defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss">
.model-detail-right{
  
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
.userInfo-wrap {
  color: #c1c2c5;
  background-color: #25262b;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid #373a40;

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
  .userInfo-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 10px;
  }
  .userInfo-footer {
    display: block;
    // margin-left: -10px;
    // margin-right: -10px;
    padding: 5px 10px;
    border-top: 1px solid rgb(55, 58, 64);
    border-bottom: 1px solid rgb(55, 58, 64);
    background: rgb(26, 27, 30);
  }
}
</style>
