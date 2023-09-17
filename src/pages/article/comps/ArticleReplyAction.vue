<template>
  <el-card class="rvc-article-reply-action pa-10">
    <h4>看帖是喜欢，评论才是真爱：</h4>
    <el-input resize="none" :rows="4" type="textarea" placeholder="请开始你的表演..." maxlength="300" show-word-limit />
    <!-- <div id="editor"></div>
    <div class="flex justify-space-between">
      <div id="toolbar" class="border-none">
        <button class="ql-bold"></button>
        <button class="ql-image"></button>
        <button id="custom-button">图</button>
      </div>
    </div> -->

    <div class="flex justify-end my-5">
      <el-button @click="handleReply">录音</el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup name="ArticleReplyAction">
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Recorder from 'js-audio-recorder'

const handleReply = () => {
  const delta = quill.getText();

  console.log("html: ", delta);
};

let quill: any;
onMounted(() => {
  quill = new Quill("#editor", {
    modules: {
      toolbar: {
        container: "#toolbar",
        handlers: {
          file: function (value) {
            console.log("value: ", value);
          },
        },
      },
    },
    theme: "snow",
    placeholder: "请开始你的表演...",
  });

  var customButton = document.querySelector("#custom-button");
  if (customButton) {
    customButton.addEventListener("click", function () {
      var range = quill.getSelection();

      if (range) {
        quill.insertEmbed(range.index, "image", "/img/user-placeholder.webp");
      }
    });
  }
});


</script>

<style lang="scss"></style>
