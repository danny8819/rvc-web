<template>
  <div class="mavonEditor">
    <mavon-editor
      class="h-full"
      v-model="articleData.content"
      toolbarsBackground="#0F172A"
      previewBackground="#1E293B"
      :subfield="subfield"
      :toolbars="toolbarOption"
      codeStyle="'monokai-sublime'"
    >
      <!-- 自定义编辑栏语音按钮 -->
      <template #right-toolbar-before>
        <button
          type="button"
          @click="$click('test')"
          class="text-gray-600 text-sm"
          aria-hidden="true"
          title="audio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path
              d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
            />
          </svg>
        </button>
      </template>
    </mavon-editor>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { useArticleStore } from '../../../store/article';

const articleData = useArticleStore();

// console.log(articleData.content)
// const articleData = reactive({
//   name: '',
//   title: '',
//   content: `# RVC社区

// RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。

// [预览地址](https://rvc.top/#/)`,
// })
const subfield = false;
const toolbarOption = {
  header: true, // 标题
  bold: true, // 粗体
  italic: true, // 斜体
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  // fullscreen: true, // 全屏编辑
  // readmodel: true, // 沉浸式阅读
  // htmlcode: true, // 展示html源码
  // help: true, // 帮助
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  navigation: true, // 导航目录
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  // subfield: true, // 单双栏模式
  preview: true, // 预览
};
// function imgAdd(name, $file) {
//   const formImgData = new FormData()
//   formImgData.append('image', $file)

//   axios({
//     url: 'server url',
//     method: 'post',
//     data: formImgData,
//     headers: { 'Content-Type': 'multipart/form-data' },
//   }).then((url) => {
//     for (let img in url) {
//       md.$img2Url(img[0], img[1])
//     }
//   })
// }
</script>
<style scoped>
.mavonEditor {
  width: 100%;
  height: 50%;
}
</style>
