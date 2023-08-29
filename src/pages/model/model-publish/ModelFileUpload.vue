<template>
  <el-upload
    action="#"
    :auto-upload="false"
    v-model:file-list="fileList"
    :on-change="handleChange"
    :on-progress="handleProgress"
  >
    <el-icon class="upload-icon" v-if="fileList.length === 0"><Upload /></el-icon>
    <template #file="{ file }">
      <div class="upload-list__item">
        <div class="upload-list__item-mask">
          <span
            class="upload-list__item-delete"
            @click="fileList.splice(fileList.indexOf(file), 1)"
          >
            <el-icon size="20"><Delete /></el-icon>
          </span>
        </div>
        <div class="upload-list__item-icon-wrap">
          <el-image
            style="width: 100px; height: 100px"
            src="/rvc.svg"
            fit="contain"
          />
        </div>
        <div class="upload-list__item-detail">{{ file.name }}</div>
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { Delete, Upload } from "@element-plus/icons-vue";
import type {
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
} from "element-plus";

defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);
console.log('emit: ', emit);
const fileList = ref<UploadFile[]>([]);
const handleChange = (file: UploadFile) => {
  console.log(file);
  // 上传
  // 设置fid
};
const handleProgress = (
  evt: UploadProgressEvent,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log("progress");
};
// {
//   "name": "d67aa168064ae2ca0145a3907e82c2fe009ea8b4.gif",
//   "percentage": 0,
//   "status": "ready",
//   "size": 456424,
//   "raw": "[object File]",
//   "uid": 1693284726433,
//   "url": "blob:http://127.0.0.1:9000/0bfdd9ed-504f-4a53-896e-cd70ffb80248"
// }
</script>

<style scoped lang="scss">
.upload-icon {
  background-color: #fafafa;
  border: 1px dashed #cdd0d6;
  border-radius: 6px;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  cursor: pointer;
  vertical-align: top;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.upload-list__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-width: 400px;
  padding: 20px 0 20px 0;
  position: relative;

  .upload-list__item-icon-wrap {
    margin: 0 10px 0 32px;
    width: 80px;
    height: 38px;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upload-list__item-detail {
    flex: 1;
  }
  &:hover .upload-list__item-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }

  .upload-list__item-mask {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    z-index: 1;
  }
}
</style>
