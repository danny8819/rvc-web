<template>
  <v-card width="400" class="login-form">
    <v-card-title class="text-center">
      <span>{{ isPasswordLogin ? "密码登录" : "手机号登录" }}</span>
    </v-card-title>
    <PasswordLoginForm v-if="isPasswordLogin" />
    <PhoneLoginForm v-else />
    <v-card-title class="text-right d-flex justify-space-between">
      <span class="text-caption" @click="isPasswordLogin = !isPasswordLogin">{{
        isPasswordLogin ? "手机号登录" : "密码登录"
      }}</span>
      <span class="text-caption" @click="toSignUp">去注册</span>
    </v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PhoneLoginForm from "./PhoneLoginForm.vue";
import PasswordLoginForm from "./PasswordLoginForm.vue";

const isPasswordLogin = ref(false);

const emit = defineEmits(["toggleType"]);
const toSignUp = () => {
  emit("toggleType", "signup");
};
</script>

<style lang="scss">
.login-form {
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
