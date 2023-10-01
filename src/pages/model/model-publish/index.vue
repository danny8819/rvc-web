<template>
  <div class="container-1200">
    <el-form
      ref="formRef"
      :model="addForm"
      label-width="120px"
      class="demo-dynamic w-80"
      :rules="rules"
      style="margin: auto"
    >
      <!-- <el-card class="p-5 mb-2" shadow="never"></el-card> -->
      <el-card class="p-5 mb-2" shadow="never">
        <el-form-item label="模型上传" prop="fid">
          <UploadModel v-model="addForm.fid" />
        </el-form-item>
        <el-form-item label="封面" prop="picture">
          <UploadPicture v-model="addForm.picture" />
        </el-form-item>
        <el-form-item label="标题" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="模型描述:" prop="description">
          <el-input v-model="addForm.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="模型类型" prop="aiType">
          <el-input v-model="addForm.aiType"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="modelType">
          <TagsInput v-model="addForm.modelType" />
        </el-form-item>

        <el-form-item label="注意事项:" prop="note">
          <el-input v-model="addForm.note" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">
            发布
          </el-button>
        </el-form-item>
      </el-card>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import TagsInput from '@/components/TagsInput.vue';
import UploadModel from './UploadModel.vue';
import UploadPicture from './UploadPicture.vue';
import type { FormInstance } from 'element-plus';
import { addModel } from '@/api/model';
import { AddModelForm } from '../types';

const rules = {
  fid: [
    {
      required: true,
      message: '请上传模型',
    },
  ],
  name: [
    {
      required: true,
      message: '请输入标题',
      trigger: 'blur',
    },
  ],
  aiType: [
    {
      required: true,
      message: '请选择模型类型',
      trigger: 'blur',
    },
  ],
  picture: [
    {
      required: true,
      message: '请上传封面',
    },
  ],
};

const formRef = ref<FormInstance>();

const addForm = shallowReactive<AddModelForm>({
  aiType: '', // aiType 模型的AI类型
  description: '', // description 描述
  mid: '',
  name: '', // name 模型名字
  note: '', // note 注意事项
  picture: '', // picture 图片地址
  fid: '', // fid是 模型的文件id
  modelType: [], // modelType 模型标签  接口要转 "[1,2,3,4]"
});

const submitForm = (formEl: FormInstance | undefined) => {
  console.log('formEl: ', addForm);
  if (!formEl) return;
  formEl.validate(async valid => {
    if (valid) {
      const params: any = {
        aiType: addForm.aiType,
        description: addForm.description,
        mid: addForm.mid,
        name: addForm.name,
        note: addForm.note,
        picture: addForm.picture,
        fid: addForm.fid,
      };
      params.modelType = `[${addForm.modelType.map(m => m.id).join(',')}]`;
      console.log(params);
      const res = await addModel(params);
      console.log('res: ', res);
    } else {
      return false;
    }
  });
};
</script>

<style scoped lang="scss"></style>
