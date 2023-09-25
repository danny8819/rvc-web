<template>
  <v-card class="w-[400px] login-form rounded bg-white">
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <!-- <v-tab :value="1">手机号登录</v-tab> -->
      <v-tab :value="2">密码登录</v-tab>
      <v-tab :value="3">验证码登录</v-tab>
    </v-tabs>

    <!-- <PhoneLoginForm v-if="tab === 1" /> -->
    <!-- 密码登录 -->
    <PasswordLoginForm v-if="tab === 2" />
    <!-- 邮箱登录 -->
    <EmailLoginForm v-if="tab === 3" />

    <div class="text-right flex justify-between px-4 py-2 mt-3">
      <!-- <span class="text-sm" @click="tab = 1" v-if="tab !== 1">
        手机号登录
      </span> -->
      <span class="text-sm" @click="tab = 2" v-if="tab !== 2">密码登录</span>
      <span class="text-sm" @click="tab = 3" v-if="tab !== 3">邮箱登录</span>
      <span
        class="text-sm"
        v-if="tab === 2"
        @click="$router.push('/account/password')"
      >
        忘记密码
      </span>
      <span class="text-sm" @click="toSignUp">去注册</span>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
// import PhoneLoginForm from "./PhoneLoginForm.vue";
import EmailLoginForm from './EmailLoginForm.vue';
import PasswordLoginForm from './PasswordLoginForm.vue';

const tab = ref(3);
const emit = defineEmits(['toggleType']);
const toSignUp = () => {
  emit('toggleType', 'signup');
};
</script>

<style lang="scss">
.login-form {
  .v-field__overlay {
    display: none;
  }

  .text-sm:hover {
    border-bottom: 1px solid #333;
  }
}
</style>
