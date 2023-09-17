<template>
  <div class="rvc-password flex flex-column justify-center align-center h-50">
    <el-card class="w-50 mb-5 specify-wh">
      <el-steps :active="step" finish-status="success">
        <el-step title="手机号验证" />
        <el-step title="修改密码" />
        <el-step title="完成" />
      </el-steps>
    </el-card>
    <el-card class="w-50 pa-3 specify-wh">
      <div class="flex justify-center align-center text-h5 my-5">
        {{ ["手机号验证", "修改密码", "修改成功"][step] }}
      </div>
      <el-form
        v-if="step === 0"
        ref="codeFormRef"
        :model="codeForm"
        :rules="phoneFormRules"
        label-width="120px"
      >
        <el-form-item label="用户名" prop="username" v-if="!isLogin">
          <el-input v-model="codeForm.username" autocomplete="off" />
        </el-form-item>
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
              style="min-width: 89px"
              >{{ resendButtonText }}</el-button
            >
            <img src="" alt="" v-else />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="nextStep(codeFormRef)"
            >下一步</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 修改密码 or 忘记密码 -->
      <el-form
        ref="passFormRef"
        :model="passwordForm"
        :status-icon="false"
        :rules="rules"
        label-width="120px"
        v-if="step === 1"
      >
        <el-form-item label="原密码" prop="oldPassword" v-if="isLogin">
          <el-input
            v-model="passwordForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input
            v-model="passwordForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="再次输入" prop="checkPass">
          <el-input
            v-model="passwordForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(passFormRef)"
            >确认修改</el-button
          >
        </el-form-item>
      </el-form>
      <!--  -->
      <el-result v-if="step === 3" icon="success" title="修改成功" sub-title="">
        <template #extra>
          <el-button @click="$router.replace('/login')">去登录</el-button>
        </template>
      </el-result>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { pwdSID, changePwd, forgetPwd } from "@/api/user";
import { phoneCode } from "@/api/msm";
import { useRoute } from "vue-router";
import { useUserStore } from "@/store/user";

const route = useRoute();
const userStore = useUserStore();
const { update } = route.query;

const isLogin = !!update || !!userStore.token;
const step = ref(0);
const codeLoading = ref(false);

const passFormRef = ref<FormInstance>();
const codeFormRef = ref<FormInstance>();
let sid = "";

const codeForm = reactive({
  phone: "",
  code: "",
  username: isLogin ? userStore.userInfo?.username : "",
});
const passwordForm = reactive<{
  password: string;
  checkPass: string;
  age: string;
  code?: string;
  oldPassword?: string;
}>({
  password: "",
  checkPass: "",
  age: "",
  oldPassword: "",
});

const rules = reactive<FormRules<typeof passwordForm>>({
  oldPassword: [
    // 修改密码需要  忘记密码不需要
    {
      validator: (_, value: any, callback: any) => {
        if (!isLogin) {
          callback();
        }
        if (value === "") {
          callback(new Error("请输入"));
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
  username: [
    {
      validator: (_, value: any, callback: any) => {
        if (isLogin) {
          callback();
        }
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
};

// 验证码下一步
async function nextStep(formEl: FormInstance | undefined) {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      pwdSID({
        phone: codeForm.phone,
        code: codeForm.code,
        username: codeForm.username,
      }).then((res) => {
        sid = res.data.sid;
        step.value = 1;
      });
    } else {
      console.error("error submit!");
      return false;
    }
  });
}
// 修改密码 忘记密码 提交按钮
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      const params: any = {
        code: codeForm.code,
        phone: codeForm.code,
        sid: sid,
        password: passwordForm.password,
        username: passwordForm.code,
      };
      console.log(params);
      if (isLogin) {
        params.oldPassword = passwordForm.oldPassword;
      }
      const api = isLogin ? changePwd : forgetPwd;
      api(params).then((res) => {
        console.log("res: ", res);
        step.value = 3;
      });
    } else {
      console.log("error submit!", valid);
      return false;
    }
  });
};

const resendButtonText = ref<string | Number>("发送验证码");
const countdown = ref(60);

async function requestCode() {
  if (countdown.value !== 60) {
    return;
  }
  let valid;
  try {
    valid = await (codeFormRef.value as FormInstance).validateField("phone");
  } catch (error) {
    console.error("error: ", error);
  }
  console.log("requestCode: ", valid);
  if (!valid) return;

  try {
    codeLoading.value = true;
    await phoneCode({ phone: codeForm.phone });
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
