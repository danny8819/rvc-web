<template>
  <div class="container-1200">
    <ModelUpload />

    <el-card class="pa-5" shadow="never">
      <el-form
        ref="formRef"
        :model="publishForm"
        label-width="120px"
        class="demo-dynamic w-80"
        :rules="rules"
      >
        <el-form-item label="封面" prop="picture">
          <ul
            class="el-upload-list el-upload-list--picture-card"
            v-if="publishForm.picture.length > 0"
          >
            <li
              v-for="(file, index) in publishForm.picture"
              :key="index"
              class="el-upload-list__item"
            >
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
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
            v-model:file-list="publishForm.picture"
            accept="image/*"
            :show-file-list="false"
            v-show="publishForm.picture.length < 1"
          >
            <el-icon><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="标题" prop="name">
          <el-input v-model="publishForm.name"> </el-input>
        </el-form-item>
        <el-form-item label="模型描述:" prop="description">
          <el-input v-model="publishForm.description" type="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="模型类型" prop="aiType">
          <el-select v-model="publishForm.aiType" placeholder="模型类型">
            <el-option
              v-for="item in aiTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标签" prop="modelType">
          <TagsInput v-model="publishForm.modelType" />
          <div>推荐：</div>
        </el-form-item>

        <el-form-item label="注意事项:" prop="note">
          <el-input v-model="publishForm.note" type="textarea"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >发布</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import TagsInput from "@/components/TagsInput.vue";
// import { getAllType, addModelType, addModel } from "@/api/modelType";
import ModelUpload from "./ModelUpload.vue";
const modelTypeOptions = [];

const rules = {
  picture: [
    {
      required: true,
      validator: function (rule: any, value: any, callback: any) {
        if (value.length === 0) {
          callback(new Error("请上传封面"));
        } else {
          callback();
        }
      },
      trigger: "blur",
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
};

const aiTypeOptions = ref<Record<"value" | "label", string>[]>([
  {
    value: "1",
    label: "1",
  },
]);
const formRef = ref<FormInstance>();
const publishForm = shallowReactive<AddModelType>({
  aiType: "",
  description: "",
  fid: "",
  mid: "",
  modelType: ["Tag 1", "Tag 2", "Tag 3"],
  name: "",
  note: "",
  picture: [],
});

const submitForm = (formEl: FormInstance | undefined) => {
  console.log("formEl: ", publishForm.picture);
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // const params = {}
      // addModel()
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<style scoped lang="scss"></style>
