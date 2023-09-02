<template>
  <el-card class="pa-4 mt-8" style="overflow: inherit">
    <div class="mb-2">看帖是喜欢，评论才是真爱：</div>
    <EmojiSelect @choose="handleEmoji" :disabled="emojiDisabled" />
    <el-input ref="inputRef" v-model="comment" resize="none" :rows="4" type="textarea" placeholder="请开始你的表演..."
      maxlength="300" show-word-limit @focus="emojiDisabled = false" @blur="handleBlur" class="font-18" />

    <div class="d-flex justify-end my-5">
      <Voice @submit="submit"></Voice>
      <el-button @click="handleReply" :disabled="!comment">回复</el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup name="ReplyInput">
import Voice from "./Voice.vue";
import EmojiSelect from "@/components/EmojiSelect.vue";
const props = defineProps({ defaultVal: String })
const emit = defineEmits(["reply", "sendVoice"]);
const comment = ref("");
if (props.defaultVal) {
  comment.value = props.defaultVal
}
const emojiDisabled = ref(true);
const inputRef = ref();
const handleReply = () => {
  //   const delta = quill.getText();
  //   console.log("html: ", delta);
  emit("reply", comment.value);
  comment.value = ''
};
const handleEmoji = (val) => {
  console.log("val: ", val);
  comment.value += val;
  inputRef.value.focus();
};
const submit = (val) => {
  emit("sendVoice", val);
}

let timer;
const handleBlur = () => {
  timer = setTimeout(() => {
    emojiDisabled.value = true;
    timer && window.clearTimeout(timer);
    timer = null;
  }, 555);
};




</script>

<style lang="scss"></style>
