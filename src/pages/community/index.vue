<template>
  <div class="community-container">
    <div class="community-banner"></div>
    <div class="community-container-content">
      <el-row :gutter="20">
        <el-col :span="16" class="pt-7">
          <div class="list-item rvc-card" @click="$router.push('/article/666')">
            <div class="item__main">
              <div class="item__avatar">
                <v-avatar size="50">
                  <img
                    :src="'/img/user-placeholder.webp'"
                    alt="Avatar"
                    style="width: 100%"
                  />
                </v-avatar>
              </div>
              <div class="item__header">
                <div class="item__title">
                  <span class="text fs-large">RVC社区</span>
                </div>
                <div class="item__desc">
                  <span class="fs-small">3天前 · 投稿了文章</span>
                </div>
              </div>
              <div class="item__body">
                <div class="body__title">介绍</div>
                <div class="body__summary">
                  RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。
                </div>
              </div>
              <div class="item__footer">
                <!-- 分享 -->
                <!-- 评论 -->
                <!-- 点赞 -->
                <div class="share">
                  <i class="mdi mdi-share-outline"></i>
                  <span>666</span>
                </div>
                <div class="comment">
                  <i class="mdi mdi-comment-outline"></i>
                  <span>666</span>
                </div>
                <div class="like">
                  <i class="mdi mdi-thumb-up-outline"></i>
                  <span>666</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <Streaks />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Streaks from "./comps/Streaks.vue";
</script>

<style scoped lang="scss">
.community-banner {
  background: radial-gradient(circle, #f7f7f7, #999999, #333333);
  height: 450px;
}
.community-container-content {
  width: 1100px;
  margin: auto;
}
.list-item {
  padding: 0;
  .item__main {
    padding: 0 20px 0 88px;
    position: relative;
    .item__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 86.4px;
      left: 0;
      position: absolute;
      top: 0;
      width: 86.4px;
    }
  }
}
.item__header {
  box-sizing: border-box;
  height: 62px;
  padding-top: 16px;
  .item__title {
    align-items: center;
    display: flex;
    height: 22px;
    margin: 1px 0 2px;
    width: max-content;
    .text {
      color: #f69;
      font-weight: 600;
    }
  }
}
.item__body {
  margin-top: 8px;
  .body__title {
    color: black;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
  }
  .body__summary {
    line-height: 25px;
    max-height: 100px;
    font-size: 15px;
    color: #18191c;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.item__footer {
  box-sizing: border-box;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  color: #9499a0;
}
</style>
