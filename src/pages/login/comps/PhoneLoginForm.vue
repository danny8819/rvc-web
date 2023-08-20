<template>
  <v-container>
    <v-form @submit.prevent="onLogin">
      <v-text-field
        v-model="phone"
        label="手机号"
        prepend-icon="mdi-phone"
        type="tel"
        :rules="[notEmpty('手机号不能为空'), phoneRule()]"
        required
      ></v-text-field>
      <FormItemPhoneCode v-model="code" :phone="phone"/>
      <v-btn type="submit" block class="mt-2" variant="outlined">登录</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { phoneCode } from "@/api/msm";
import { useRouter } from "vue-router";
import { notEmpty, phoneRule } from "@/utils/form-rules";
import FormItemPhoneCode from "@/components/FormItemPhoneCode.vue";

const router = useRouter();

const phone = ref("");
const code = ref("");
const resendDisabled = ref(false);
const resendButtonText = ref<string | Number>("发送验证码");
const countdown = ref(60);
const userStore = useUserStore();

function resendVerificationCode() {
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

const onLogin = async (event) => {
  const results = await event;
  if (results.valid) {
    const params = {
      phone: phone.value,
      code: code.value,
    };
    await userStore.phoneLogin(params);
    router.replace("/");
  }
};
</script>

<style lang="scss">
.phone-login-code-btn {
  min-width: 94px;
}
</style>
