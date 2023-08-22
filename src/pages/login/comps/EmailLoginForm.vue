<template>
  <v-container>
    <v-form @submit.prevent="onLogin" validate-on="blur">
      <v-text-field
        v-model="formData.email"
        label="邮箱"
        prepend-icon="mdi-email"
        type="email"
        :rules="[notEmpty('邮箱不能为空'), emailRule()]"
        required
        ref="emailInputRef"
      ></v-text-field>
      <FormItemVerificationCode
        v-model="formData.code"
        :email="formData.email"
        :validFn="validFn"
      />
      <v-btn type="submit" block class="mt-2" variant="outlined">登录</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
import { notEmpty, emailRule } from "@/utils/form-rules";
import FormItemVerificationCode from "./FormItemVerificationCode.vue";

const userStore = useUserStore();
const router = useRouter();
const emailInputRef = ref();
const formData = reactive({
  email: "",
  code: "",
});
const validFn = async () => {
  return await emailInputRef.value.validate();
};
const onLogin = async (event) => {
  const results = await event;
  if (results.valid) {
    const params = {
      email: formData.email,
      code: formData.code,
    };
    try {
      await userStore.emailLogin(params);
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
