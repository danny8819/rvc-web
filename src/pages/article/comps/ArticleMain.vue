<template>
  <!-- <el-card class="rvc-article-main pa-10 mb-5">
    <div class="rvc-article-title">
      Characters, Clothing, Poses, Among Other Things: A Guide
    </div>

    <v-row class="rvc-article-author m-20">
      <v-col cols="1"
        ><el-avatar class="mr-6" :size="20" src="/img/user-placeholder.webp">
        </el-avatar
      ></v-col>
      <v-col cols="2" class="right-border">author</v-col>
      <v-col cols="3" class="rvc-article-author-time right-border"
        >Aug 18, 2023</v-col
      >
      <v-col
        cols="2"
        class="text-center ml-4 m-10"
        v-for="item in tags"
        :key="item.key"
      >
        <div class="rvc-article-tag">{{ item.name }}</div>
      </v-col>
    </v-row>

    <div class="rvc-article-content m-10">
      <v-img src="./img/feature-img1.png" alt="feature" class="rounded" />
      <div v-for="item in contents" :key="item.key" :id="item.key">
        <div class="head-title">
          {{ item.title }}
        </div>
        <div>
          {{ item.content }}
        </div>
      </div>
    </div>
    <el-divider />

    <Statement />
  </el-card> -->
  <section class="w-[853px] pt-4">
    <img
      src="../../../../public/img/feature-img1.png"
      alt="feature"
      class="w-full h-[320px] object-cover rounded-md"
    />
    <div v-html="result" class="pt-4"></div>
  </section>
</template>

<script lang="ts" setup>
import Statement from './Statement.vue';
import { ref, reactive } from 'vue';
import MarkdownIt from 'markdown-it';
import { useArticleStore } from '../../../store/article';

const md = new MarkdownIt();

const articleData = useArticleStore();

// const tags = reactive([
//   { name: 'RVC', key: 'rvc' },
//   { name: 'TRAINING', key: 'training' },
// ])

// const contents = reactive([
//   {
//     title: '前言',
//     key: 'head',
//     content: `# RVC社区

// RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。

// [预览地址](https://rvc.top/#/)`,
//   },
//   {
//     title: '介绍',
//     key: 'Intro',
//     content: `# RVC社区

// RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。

// [预览地址](https://rvc.top/#/)`,
//   },
//   {
//     title: '终章',
//     key: 'end',
//     content: `# RVC社区

// RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。

// [预览地址](https://rvc.top/#/)`,
//   },
// ])
const result = md.render(`${articleData.content}`);
console.log(articleData.content);
</script>

<style scoped></style>
