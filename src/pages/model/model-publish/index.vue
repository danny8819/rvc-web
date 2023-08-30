<template>
  <div class="container-1200">
    <el-form
      ref="formRef"
      :model="addForm"
      label-width="120px"
      class="demo-dynamic w-80"
      :rules="rules"
    >
      <el-card class="pa-5 mb-2" shadow="never">
        <el-form-item label="模型上传" prop="fid">
          <UploadModel v-model="addForm.fid" />
        </el-form-item>
      </el-card>
      <el-card class="pa-5 mb-2" shadow="never">
        <el-form-item label="封面" prop="picture">
          <UploadPicture v-model="addForm.picture" />
        </el-form-item>
        <el-form-item label="标题" prop="name">
          <el-input v-model="addForm.name"> </el-input>
        </el-form-item>
        <el-form-item label="模型描述:" prop="description">
          <el-input v-model="addForm.description" type="textarea"> </el-input>
        </el-form-item>
        <el-form-item label="模型类型" prop="aiType">
          <el-input v-model="addForm.aiType"> </el-input>
        </el-form-item>
        <el-form-item label="标签" prop="modelType">
          <TagsInput v-model="addForm.modelType" />
        </el-form-item>

        <el-form-item label="注意事项:" prop="note">
          <el-input v-model="addForm.note" type="textarea"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >发布</el-button
          >
        </el-form-item>
      </el-card>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import TagsInput from "@/components/TagsInput.vue";
import { addModel } from "@/api/model";
import UploadModel from "./UploadModel.vue";
import UploadPicture from "./UploadPicture.vue";

const rules = {
  fid: [
    {
      required: true,
      message: "请上传模型",
    },
  ],
  name: [
    {
      required: true,
      message: "请输入标题",
      trigger: "blur",
    },
  ],
  aiType: [
    {
      required: true,
      message: "请选择模型类型",
      trigger: "blur",
    },
  ],
  picture: [
    {
      required: true,
      message: "请上传封面",
    },
  ],
};

const formRef = ref<FormInstance>();

const addForm = shallowReactive<AddModelForm>({
  aiType: "",
  description: "",
  mid: "",
  modelType: "",
  name: "",
  note: "",
  picture: "",
  fid: "",
});

const submitForm = (formEl: FormInstance | undefined) => {
  console.log("formEl: ", addForm);
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // name 模型名字
      // aiType 模型的AI类型
      // modelType 模型标签
      // picture 图片地址
      // description 描述
      // note 注意事项
      // fid是 模型的文件id
      const params = {
        name: addForm.name,
        aiType: addForm.aiType,
        modelType: addForm.modelType,
        description: addForm.description,
        note: addForm.note,
        picture: addForm.picture,
        fid: "40e2e63a-11bb-418b-9af3-6d0d89c2f1b3",
      };
      console.log(params);
      // addModel(params)
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<style scoped lang="scss"></style>
