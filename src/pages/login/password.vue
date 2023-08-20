<template>
  <div class="rvc-password d-flex flex-column justify-center align-center h-50">
    <h1>{{ step == 1 ? "手机号验证" : "修改密码" }}</h1>
    <v-card class="password-card pa-3">
      <v-form @submit.prevent="toChange" v-if="step === 1">
        <v-text-field
          v-model="phone"
          label="手机号"
          prepend-icon="mdi-phone"
          type="tel"
          :rules="[notEmpty('手机号不能为空'), phoneRule()]"
          required
        ></v-text-field>
        <FormItemPhoneCode v-model="code" :phone="phone" />
        <v-btn type="submit" block class="mt-2" variant="outlined"
          >下一步</v-btn
        >
      </v-form>
      <v-form @submit.prevent="handleSubmit" v-if="step === 2">
        <v-text-field
          v-model="username"
          label="用户名"
          type="string"
          prepend-icon="mdi-user"
          :rules="[notEmpty('不能为空')]"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="新密码"
          type="password"
          prepend-icon="mdi-lock"
          :rules="[notEmpty('不能为空')]"
          required
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="确认密码"
          type="password"
          :rules="passwordMatchRule"
          prepend-icon="mdi-lock"
          required
        ></v-text-field>
        <v-btn type="submit" block class="mt-2" variant="outlined"
          >提交</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { notEmpty, phoneRule } from "@/utils/form-rules";
import FormItemPhoneCode from "./comps/FormItemPhoneCode.vue";

const phone = ref("");
const step = ref(1);
const code = ref("");
const sid = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");

const passwordMatchRule = [
  (value) => {
    if (!password.value || value !== password.value) {
      return "两次密码不一致";
    }
    return true;
  },
];

async function toChange(event) {
  const results = await event;
  console.log("results: ", results);
  if (results.valid) {
    // 请求获取sid

    // 切换下一步
    step.value = 2;
  }
}

function handleSubmit() {
  // 修改密码
}
</script>

<style scoped lang="scss">
.rvc-password {
  margin-top: 20px;
  .password-card {
    width: 50%;
    max-width: 400px;
    min-width: 340px;
  }
}
</style>
