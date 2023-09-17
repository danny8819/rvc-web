<template>
  <div class="brick">
    <el-card class="brick__inner">
      <div class="brick__image">
        <div
          class="brick__image-inner"
          :style="`background-image: url(${data.picture})`"
        ></div>
      </div>
      <div class="brick__info">
        <div class="brick__info-title">
          {{ data.name }}
          <!-- <div class="brick__info-subtitle">666</div> -->
        </div>
        <el-divider class="my-2" />

        <div class="brick__info-tags">
          <el-tag v-for="(tag, j) in data.types" :key="j" class="mr-2 mb-2">{{
            tag.type
          }}</el-tag>
        </div>
        <div class="brick__info-footer">
          <div class="brick__info-userInfo flex items-center">
            <el-avatar :size="30" :src="data.avatar"> </el-avatar>
            <span class="ml-2">{{ data.nickname }}</span>
          </div>
          <div
            class="brick__info-watch flex justify-space-around items-center"
          >
            <SvgIcon name="liulan"></SvgIcon>
            {{ data.lookNum }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
type ModelItemProps = {
  data: {
    picture: string;
    name: string;
    types: Record<"id" | "type", string>[];
    avatar: string;
    nickname: string;
    mid: string;
    uid: string;
    uploadDate: string;
    lookNum: number;
    modelType: string; // "[1,2,3,4]",
  };
};
defineProps<ModelItemProps>();
</script>

<style lang="scss" scoped>
.brick {
  width: 33%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
 
  .brick__inner {
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    // border: 1px solid var(--el-card-border-color);
    background-color: var(--el-card-bg-color);
    // background-color: $card-bg-color;
    display: flex;
    flex-direction: column;

    transition: all 0.2s ease-out;
    box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);

    &:hover {
      transform: translateY(2px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);

      .brick__image-inner {
        transform: scale(1.1);
      }
    }

    .brick__image {
      padding-top: 66%;
      position: relative;

      .brick__image-inner {
        transition: all 0.3s;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: contain;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-position: center center;
      }
    }

    .brick__info {
      padding: 15px;
      .brick__info-title {
        font-size: 24px;
        font-weight: 600;
        padding: 19px 20px px 13px;
        // min-height: 110px;
        margin-bottom: 7px;

        .brick__info-subtitle {
          font-size: 16px;
          line-height: 22px;
          color: #435b71;
          font-weight: 400;
        }
      }

      .brick__info-tags {
        // white-space: nowrap;
        min-height: 64px;
      }
      .brick__info-footer {
        display: flex;
        justify-content: space-between;
        .brick__info-watch {
          // float: right;
        }
      }
    }
  }
}
</style>
