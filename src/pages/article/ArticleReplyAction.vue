<template>
  <div class="rvc-article-reply-action rvc-card pa-10">
    <h4>看帖是喜欢，评论才是真爱：</h4>
    <el-input
      resize="none"
      :rows="4"
      type="textarea"
      placeholder="请开始你的表演..."
      maxlength="300"
      show-word-limit
    />
    <div id="editor"></div>
    <div id="toolbar"></div>
    <el-button>回复</el-button>
  </div>
</template>

<script lang="ts" setup>
import Quill from "quill";

let quill;
onMounted(() => {
  const toolbarOptions = [
    ["bold", "italic"],
    ["link", "image"],
  ];
  quill = new Quill("#editor", {
    modules: {
      // container: "#toolbar" 
      toolbar: toolbarOptions,
    },
  });
});
</script>

<style lang="scss"></style>
