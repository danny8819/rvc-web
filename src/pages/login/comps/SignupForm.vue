<template>
  <v-card width="400" class="signup-form">
    <v-card-title class="text-center">
      <span>注册</span>
    </v-card-title>

    <v-container>
      <v-form @submit.prevent="onSubmit" :fast-fail="false" validate-on="blur">
        <v-text-field
          v-model="phone"
          label="手机号"
          prepend-icon="mdi-phone"
          type="tel"
          required
          :rules="[notEmpty('手机号不能为空'), phoneRule()]"
          ref="phoneInputRef"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="邮箱"
          prepend-icon="mdi-email"
          type="email"
          :rules="[notEmpty('邮箱不能为空'), emailRule()]"
          required
        ></v-text-field>
        <v-text-field
          v-model="username"
          label="用户名"
          prepend-icon="mdi-account"
          :rules="[notEmpty('用户名不能为空')]"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="密码"
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
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="code"
              label="验证码"
              type="text"
              required
              :rules="[notEmpty('不能为空')]"
            ></v-text-field>
          </v-col>
          <v-col cols="4" align-self="center">
            <v-btn
              :disabled="resendDisabled"
              @click="resendVerificationCode"
              color="primary"
              small
              outlined
            >
              {{ resendButtonText }}
            </v-btn>
          </v-col>
        </v-row>
        <v-btn type="submit" block class="mt-2" variant="outlined">注册</v-btn>
      </v-form>
    </v-container>

    <v-card-title class="text-right">
      <span class="text-caption" @click="toLogin">去登录</span>
    </v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { notEmpty, phoneRule, emailRule } from "@/utils/form-rules";
import { phoneCode } from "@/api/msm";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const router = useRouter();
const phoneInputRef = ref(null);
const email = ref("");

const username = ref("");
const password = ref("");
const phone = ref("");
const confirmPassword = ref("");
const code = ref("");
const resendDisabled = ref(false);
const resendButtonText = ref<string | Number>("发送验证码");
const countdown = ref(60);

async function resendVerificationCode() {
  const res = await phoneInputRef.value!.validate();
  if (res.length > 0) {
    return;
  }
  try {
    phoneCode({ phone: phone.value });
    resendDisabled.value = true;
    resendButtonText.value = countdown.value;
  } catch (error) {
    countdown.value = 60;
    resendDisabled.value = false;
    resendButtonText.value = "重新发送";
  }

  let timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
      resendButtonText.value = countdown.value;
    } else {
      clearInterval(timer);
      countdown.value = 60;
      resendDisabled.value = false;
      resendButtonText.value = "重新发送";
    }
  }, 1000);
}

const emit = defineEmits(["toggleType"]);
const toLogin = () => {
  emit("toggleType", "login");
};
const passwordMatchRule = [
  (value: string) => {
    if (!password.value || value !== password.value) {
      return "两次密码不一致";
    }
    return true;
  },
];

const onSubmit = async (event) => {
  const results = await event;
  console.log("results: ", results);
  if (results.valid) {
    const params = {
      phone: phone.value,
      email: email.value,
      username: username.value,
      password: password.value,
      code: code.value,
    };
    console.log("params: ", params);
    await userStore.register(params);
    router.replace("/");
  }
};
</script>

<style lang="scss">
.signup-form {
  .v-label.v-field-label {
    color: #333;
    opacity: 1;
  }

  .v-field__overlay {
    display: none;
  }

  .text-caption:hover {
    border-bottom: 1px solid #333;
  }
}
</style>
