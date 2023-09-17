<template>
  <v-card width="400" class="login-form">
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <!-- <v-tab :value="1">手机号登录</v-tab> -->
      <v-tab :value="2">密码登录</v-tab>
      <v-tab :value="3">验证码登录</v-tab>
    </v-tabs>

    <!-- <PhoneLoginForm v-if="tab === 1" /> -->
    <PasswordLoginForm v-if="tab === 2" />
    <EmailLoginForm v-if="tab === 3" />

    <v-card-title class="text-right flex justify-space-between">
      <!-- <span class="text-caption" @click="tab = 1" v-if="tab !== 1">
        手机号登录
      </span> -->
      <span class="text-caption" @click="tab = 2" v-if="tab !== 2">
        密码登录
      </span>
      <span class="text-caption" @click="tab = 3" v-if="tab !== 3">
        邮箱登录
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
// import PhoneLoginForm from "./PhoneLoginForm.vue";
import EmailLoginForm from "./EmailLoginForm.vue";
import PasswordLoginForm from "./PasswordLoginForm.vue";

const tab = ref(3);
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
