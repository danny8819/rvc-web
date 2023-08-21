<template>
  <div class="rvc-password d-flex flex-column justify-center align-center h-50">
    <el-card class="w-50 mb-5 specify-wh">
      <el-steps :active="step" finish-status="success">
        <el-step title="手机号验证" />
        <el-step title="修改密码" />
        <el-step title="完成" />
      </el-steps>
    </el-card>
    <el-card class="w-50 pa-3 specify-wh">
      <div class="d-flex justify-center align-center text-h5 my-5">
        {{ ["手机号验证", "修改密码", "修改成功"][step] }}
      </div>
      <el-form
        v-if="step === 0"
        ref="codeFormRef"
        :model="codeForm"
        :rules="phoneFormRules"
        label-width="120px"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="codeForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input
            v-model="codeForm.code"
            autocomplete="off"
            style="width: 60%"
          />
          <div
            class="d-inline-flex ml-5"
            v-loading="codeLoading"
            style="width: 80px"
          >
            <el-button
              v-if="!codeLoading"
              @click="requestCode"
              style="min-width: 100px"
              >{{ resendButtonText }}</el-button
            >
            <img src="" alt="" v-else />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="nextStep(passFormRef)"
            >下一步</el-button
          >
        </el-form-item>
      </el-form>
      <el-form
        ref="passFormRef"
        :model="passwordForm"
        :status-icon="false"
        :rules="rules"
        label-width="120px"
        v-if="step === 1"
      >
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="passwordForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            v-model="passwordForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(passFormRef)"
            >Submit</el-button
          >
        </el-form-item>
      </el-form>

      <el-result v-if="step === 3" icon="success" title="修改成功" sub-title="">
        <template #extra>
          <el-button @click="$router.replace('/login')">去登录</el-button>
        </template>
      </el-result>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { notEmpty, phoneRule } from "@/utils/form-rules";
// import FormItemPhoneCode from "./comps/FormItemPhoneCode.vue";
import { pwdSID } from "@/api/user";

const step = ref(0);
const codeLoading = ref(false);
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const passFormRef = ref<FormInstance>();
const codeFormRef = ref<FormInstance>();
const codeForm = reactive({
  phone: "",
  code: "",
});
const passwordForm = reactive({
  password: "",
  checkPass: "",
  age: "",
});

const rules = reactive<FormRules<typeof passwordForm>>({
  password: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("请输入新密码"));
        } else {
          if (passwordForm.checkPass !== "") {
            if (!passFormRef.value) return;
            passFormRef.value.validateField("checkPass", () => null);
          }
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  checkPass: [
    {
      validator: (_, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("请输入确认密码"));
        } else if (value !== passwordForm.password) {
          callback(new Error("两次密码不一致!"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
});
const phoneFormRules = {
  phone: [
    {
      validator: (_, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("请输入手机号"));
        } else if (!/^\d{11}$/.test(value)) {
          callback(new Error("手机格式不正确"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
};
async function nextStep(formEl: FormInstance | undefined) {
  step.value = 1;
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
}

const submitForm = (formEl: FormInstance | undefined) => {
  step.value = 3;
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resendButtonText = ref<string | Number>("发送验证码");
const countdown = ref(60);
import { phoneCode } from "@/api/msm";

async function requestCode() {
  if (countdown.value !== 60) {
    return;
  }
  let valid;
  try {
    valid = await (codeFormRef.value as FormInstance).validateField("phone");
  } catch (error) {}
  console.log("valid: ", valid);
  if (!valid) return;

  try {
    codeLoading.value = true;
    // await phoneCode({ phone: codeForm.phone });
    codeLoading.value = false;
    resendButtonText.value = countdown.value;
  } catch (error) {
    countdown.value = 60;
    resendButtonText.value = "重新发送";
  }

  let timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
      resendButtonText.value = countdown.value;
    } else {
      clearInterval(timer);
      countdown.value = 60;
      resendButtonText.value = "重新发送";
    }
  }, 1000);
}
</script>

<style scoped lang="scss">
.rvc-password {
  margin-top: 20px;
}

.specify-wh {
  min-width: 460px;
  max-width: 550px;
}
</style>
