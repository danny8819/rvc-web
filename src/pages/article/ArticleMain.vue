<template>
  <el-card class="rvc-article-main pa-10 mb-5">
    <h1 class="rvc-article-title">Characters, Clothing, Poses, Among Other Things: A Guide</h1>

    <v-row class="rvc-article-author m-20">
      <v-col cols="1"><el-avatar class="mr-6" :size="20" src="/img/user-placeholder.webp"> </el-avatar></v-col>
      <v-col cols="2" class="right-border">author</v-col>
      <v-col cols="3" class="rvc-article-author-time right-border">Aug 18, 2023</v-col>
      <v-col cols="2" class=" text-center ml-4 m-10" v-for="item in tags" :key="item.key">
        <div class="rvc-article-tag">{{ item.name }}</div>
      </v-col>
    </v-row>

    <div class="rvc-article-content m-10">

      <v-img src="./img/feature-img1.png" alt="feature" class="rounded" />
      <div v-for="item in contents" :key="item.key" :id="item.key">
        <h1 class="head-title">
          {{ item.title }}
        </h1>
        <div>
          {{ item.content }}
        </div>
      </div>

    </div>
    <el-divider />
    <SvgIcon name="good" />
    <SvgIcon name="shoucang" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let tags = ref([{ name: 'rvc', key: 'rvc' }, { name: 'training', key: 'training' }])

let contents = ref([
  {
    title: '前言', key: 'head',
    content: 'RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。'
  }, {
    title: '介绍', key: 'Intro',
    content: 'RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。'
  }, {
    title: '终章', key: 'end',
    content: 'RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。'
  },
])
</script>

<style lang="scss" scoped>
.rvc-article-title {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-weight: bold;
  font-size: 34px;
  line-height: 1.3;
  margin: 0;
  word-break: break-word;
}

.rvc-article-author {
  height: min-content;
  margin: 10px 0;
}

.rvc-article-author-time {
  margin-left: 10px;
}

.rvc-article-tag {
  background-color: #f69;
  border-radius: 4px;
  color: white;
}

.rvc-article-content {
  margin: 10px 0;
  padding: 0;
}

.v-col-3 {
  padding: 0;
}

.v-col-1 {

  padding: 0;
}

.v-col-2 {
  padding: 0;
  font-size: 14px;
}

.right-border {

  border-right: 1px solid grey;
  font-size: 16px;
}
</style>
