<template>
  <div class="border border-solid border-gray-100 h-80">
    <Editor
      class="overflow-y-hidden mt-0.5"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
      @onChange="change"
    />
  </div>
</template>
<script setup>
import "@wangeditor/editor/dist/css/style.css";
import { Editor } from "@wangeditor/editor-for-vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["change", "update:modelValue"]);

const editorConfig = {
  readOnly: true,
};
const editorRef = shallowRef();
const valueHtml = ref("");

const change = (editor) => {
  emits("change", editor);
  emits("update:modelValue", valueHtml.value);
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor;
};

watch(
  () => props.modelValue,
  () => {
    valueHtml.value = props.modelValue;
  }
);
</script>

<style scoped lang="scss"></style>
