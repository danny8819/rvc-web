<template>
  <ul class="el-upload-list el-upload-list--picture-card">
    <li
      v-for="(file, index) in fileList"
      :key="index"
      class="el-upload-list__item"
    >
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
      <span class="el-upload-list__item-actions">
        <span class="el-upload-list__item-delete">
          <el-icon><Delete /></el-icon>
        </span>
      </span>
    </li>
  </ul>
  <el-upload
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
import { ref } from "vue";

const fileList = ref([]);

defineProps<{ modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);

const handleChange = (file: any, fileList: any) => {
  console.log(file);
  if (file.raw) {
    const formData = new FormData();
    formData.append("image", file.raw);
    try {
      //   const res = await uploadModel(formData);
      //   emit("update:modelValue", res.data.fid||'');
    } catch (error) {
      console.error("error: ", error);
      emit("update:modelValue", "");
    }
  } else {
    emit("update:modelValue", "");
  }
};
</script>

<style scoped lang="scss"></style>
