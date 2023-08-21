<template>
  <v-card width="400" class="login-form">
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="1">手机号登录</v-tab>
      <v-tab :value="2">密码登录</v-tab>
    </v-tabs>

    <PasswordLoginForm v-if="tab === 2" />

    <PhoneLoginForm v-else />

    <v-card-title class="text-right d-flex justify-space-between">
      <span class="text-caption" @click="tab = 2" v-if="tab === 1">
        手机号登录
      </span>
      <span class="text-caption" @click="tab = 1" v-if="tab === 2">
        密码登录
      </span>
      <span
        class="text-caption"
        v-if="tab === 2"
        @click="$router.push('/account/password')"
        >忘记密码</span
      >
      <span class="text-caption" @click="toSignUp">去注册</span>
    </v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PhoneLoginForm from "./PhoneLoginForm.vue";
import PasswordLoginForm from "./PasswordLoginForm.vue";

const tab = ref(1);
const emit = defineEmits(["toggleType"]);
const toSignUp = () => {
  emit("toggleType", "signup");
};
</script>

<style lang="scss">
.login-form {
  .v-field__overlay {
    display: none;
  }

  .text-caption:hover {
    border-bottom: 1px solid #333;
  }
}
</style>
