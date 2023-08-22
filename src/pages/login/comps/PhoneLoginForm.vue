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
      <FormItemVerificationCode v-model="code" :phone="phone" />
      <v-btn type="submit" block class="mt-2" variant="outlined">登录</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/user";

import { useRouter } from "vue-router";
import { notEmpty, phoneRule } from "@/utils/form-rules";
import FormItemVerificationCode from "./FormItemVerificationCode.vue";

const router = useRouter();

const phone = ref("");
const code = ref("");
const userStore = useUserStore();

const onLogin = async (event) => {
  const results = await event;
  if (results.valid) {
    const params = {
      phone: phone.value,
      code: code.value,
    };
    try {
      await userStore.phoneLogin(params);
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss">
.phone-login-code-btn {
  min-width: 94px;
}
</style>
