<template>
  <main class="w-full">
    <Editor v-model="tinymceHtml" api-key="no-api-key" :init="tinymceOption" />
  </main>
</template>
<script setup>
import { useColorMode } from '@vueuse/core';
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver/theme.min.js';
import 'tinymce/models/dom/model.min.js';
import 'tinymce/icons/default/icons';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/media';

import { onMounted, ref, reactive } from 'vue';

const colorMode = useColorMode();
console.log(colorMode.value);

const tinymceHtml = ref(
  `<h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <audio controls="controls"><source src="https://upload.wikimedia.org/wikipedia/commons/b/b0/%E8%AB%96%E8%AA%9E-%E5%AD%B8%E8%80%8C%E7%AC%AC%E4%B8%80.ogg" type="audio/ogg"></audio> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p>`,
);

const tinymceOption = reactive({
  ui_mode: 'split',
  plugins: 'lists link image table code wordcount media',
  branding: false,
  min_height: 650,
  toolbar:
    'undo redo spellcheckdialog formatpainter | blocks fontsize | bold italic underline forecolor backcolor | media link image | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat',
  skin_url: 'tinymce/skins/ui/oxide-dark',
  content_css: 'tinymce/skins/content/dark/content.min.css',
  menubar: false,
  language_url: '/tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
});

watch(
  () => colorMode.value,
  () => {
    if (colorMode.value === 'dark') {
      tinymceOption.skin_url = 'tinymce/skins/ui/oxide-dark';
      tinymceOption.content_css = 'tinymce/skins/content/dark/content.min.css';
    } else {
      tinymceOption.skin_url = 'tinymce/skins/ui/oxide';
      tinymceOption.content_css =
        'tinymce/skins/content/default/content.min.css';
    }
  },
);
</script>
<style scoped></style>
