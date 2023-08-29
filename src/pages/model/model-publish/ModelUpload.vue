<template>
  <el-card shadow="never" class="d-flex mb-5 pa-5">
    <el-form
      ref="formRef"
      :model="formData"
      label-width="120px"
      class="demo-dynamic w-80"
      :rules="rules"
    >
      <el-form-item label="模型上传" prop="fid">
        <ModelFileUpload v-model="formData.fid" />
        <!-- <file-pond
            :file="files"
            name="test"
            ref="pond"
            label-idle="拖入模型上传"
            v-bind:allow-multiple="true"
            credits=""
            style="width: 300px"
            maxFiles="1"
          /> -->
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import ModelFileUpload from "./ModelFileUpload.vue";

const formData = reactive({ fid: "" });
const rules = {
  fid: [
    {
      required: true,
    },
  ],
};
</script>

<style scoped lang="scss"></style>
