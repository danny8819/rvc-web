<template>
  <div class="border border-solid border-gray-100 h-80">
    <Toolbar
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="default"
    />
    <Editor
      class="overflow-y-hidden mt-0.5"
      style="height: 18rem"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
      @onChange="change"
    />
    <el-button @click="insertText">插入文本</el-button>
    <el-button @click="clearContent">清空内容</el-button>
  </div>
</template>

<script setup>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

// import { ElMessage } from "element-plus";
// const basePath = import.meta.env.VITE_BASE_API;
// import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
// import { useUserStore } from "@/pinia/modules/user";
// import { getUrl } from "@/utils/image";
// const userStore = useUserStore();

const emits = defineEmits(["change", "update:modelValue"]);

const change = (editor) => {
  emits("change", editor);
  emits("update:modelValue", valueHtml.value);
};

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const editorRef = shallowRef();
const valueHtml = ref("");
const toolbarKeys = ["emotion", "uploadImage", "insertImage"];
const toolbarConfig = {
  toolbarKeys,
};
const editorConfig = {
  placeholder: "请开始你的表演...",
  MENU_CONF: {},
};

// editorConfig.MENU_CONF["uploadImage"] = {
//   fieldName: "file",
//   headers: {
//     // "x-token": userStore.token,
//   },
//   // server: basePath + "/fileUploadAndDownload/upload?noSave=1",
//   customInsert(res, insertFn) {
//     if (res.code === 0) {
//       // const urlPath = getUrl(res.data.file.url);
//       // insertFn(urlPath, res.data.file.name);
//       return;
//     }
//     ElMessage.error(res.msg);
//   },
// };
editorConfig.MENU_CONF["uploadImage"] = {
  uploadImgShowBase64: true,
  base64LimitSize: 5 * 1024, // 5kb
};
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor;
  console.log("editor: ", editor);
  console.log("getAllMenuKeys: ", editor.getAllMenuKeys());
  setTimeout(() => {
    //   editor.insertNode({
    //     type: "image",
    //     src: "https://upload-bbs.miyoushe.com/upload/2022/12/08/a2fa805a0a782cdb8ab44ddaf8d5343d_7408497524870727211.png",
    //     children: [
    //       {
    //         text: "",
    //       },
    //     ],
    //   });
    // editor.insertNode({
    //   type: "link",
    //   href: "https://www.wangeditor.com/v5/API.html#deselect",
    //   children: [
    //     {
    //       text: "@ 233",
    //     },
    //   ],
    // });
  }, 1111);
  console.log(editor.getConfig());
};
function insertText() {
  editorRef.value.insertText("insertHTML", "Hello World!");
}
function clearContent() {
  editorRef.value.clear();
}
watch(
  () => props.modelValue,
  () => {
    valueHtml.value = props.modelValue;
  }
);
</script>

<style scoped lang="scss"></style>
