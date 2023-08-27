<template>
  <el-card class="pa-4 mt-8">
    <h4 class="mb-2">看帖是喜欢，评论才是真爱：</h4>
    <el-input
      resize="none"
      :rows="4"
      type="textarea"
      placeholder="请开始你的表演..."
      maxlength="300"
      show-word-limit
    />
    <!-- <div id="editor"></div>
      <div class="d-flex justify-space-between">
        <div id="toolbar" class="border-none">
          <button class="ql-bold"></button>
          <button class="ql-image"></button>
          <button id="custom-button">图</button>
        </div>
      </div> -->
    <div class="d-flex justify-end my-5">
      <el-button @click="handleReply">回复</el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup name="ReplyInput">
// import "quill/dist/quill.snow.css";

const emit = defineEmits(["reply"]);
const handleReply = () => {
  //   const delta = quill.getText();
  //   console.log("html: ", delta);
  emit("reply");
};
</script>

<style lang="scss"></style>
