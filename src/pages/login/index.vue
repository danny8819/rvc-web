<template>
  <div class="login-page">
    <v-container class="login-container">
      <v-row justify="center">
        <v-col cols="4" class="p-0">
          <div class="container-left"></div>
        </v-col>
        <v-col cols="8" align-self="center" class="d-flex justify-center">
          <LoginForm v-if="loginType === 'login'" @toggleType="toggleType" />
          <SignupForm v-else @toggleType="toggleType" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <LoginFooter /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";
// import LoginFooter from "./components/LoginFooter.vue";

const loginType = ref("login");

function toggleType(type = "login") {
  console.log("type: ", type);
  loginType.value = type;
}
</script>

<style lang="scss">
.login-page {
  .v-field__input {
    background-color: white;
  }
  .login-container {
    margin: 0;
    max-width: 100%;
  }
  .container-left {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // background-color: rgba(0, 0, 0, 0.3);
    background: url("/img/login-bg.png") no-repeat 50% 50% / cover;
  }
}
</style>
