<template>
  <ul class="el-upload-list el-upload-list--picture-card">
    <li
      v-for="(file, index) in fileList"
      :key="index"
      class="el-upload-list__item"
    >
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
      <span class="el-upload-list__item-actions">
        <span class="el-upload-list__item-delete" @click="handleRemove(file)">
          <el-icon><Delete /></el-icon>
        </span>
      </span>
    </li>
  </ul>
  <el-upload
    class="uploadEl"
    ref="uploadRef"
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    :limit="1"
    v-model:file-list="fileList"
    accept="image/*"
    :show-file-list="false"
    :on-change="handleChange"
    v-show="fileList.length === 0"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
import { uploadImg } from '@/api/oss';

const fileList = ref([]);
const uploadRef = ref(null);
defineProps<{ modelValue: string }>();
const emit = defineEmits(['update:modelValue']);

const handleChange = async (file: any, fileList: any) => {
  console.log(file);
  let imgUrl;
  if (file.raw) {
    const formData = new FormData();
    formData.append('img', file.raw);
    try {
      const res = await uploadImg(formData);
      imgUrl = res.data.imgUrl || '';
    } catch (error) {
      console.error('error: ', error);
      imgUrl = '';
      uploadRef.value.clearFiles();
    }
  }
  emit('update:modelValue', imgUrl);
};

const handleRemove = (file: any) => {
  uploadRef.value.clearFiles();
};
</script>

<style scoped lang="scss">
// .uploadEl {
// width: 156px;
// height: 156px;
// }
:deep(.el-upload) {
  width: 100px;
  height: 100px;
}
</style>
