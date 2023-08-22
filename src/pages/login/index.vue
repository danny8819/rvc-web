<template>
  <div class="login-page">
    <v-container class="login-container">
      <v-row justify="center">
        <v-col cols="0" sm="4" md="4" class="pa-0">
          <div class="container-left">
            <v-img src="/img/login-bg.png" cover height="100%"> </v-img>
          </div>
        </v-col>
        <v-col
          cols="10"
          sm="8"
          md="8"
          align-self="center"
          class="d-flex justify-center login-form-container"
        >
          <LoginForm v-if="loginType === 'login'" @toggleType="toggleType" />
          <SignupForm v-else @toggleType="toggleType" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <LoginFooter /> -->
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "./comps/LoginForm.vue";
import SignupForm from "./comps/SignupForm.vue";
// import LoginFooter from "./comps/LoginFooter.vue";

const loginType = ref("login");

function toggleType(type = "login") {
  console.log("type: ", type);
  loginType.value = type;
}
</script>

<style lang="scss">
.login-page {
  .login-container {
    margin: 0;
    max-width: 100%;
  }
  .container-left {
    width: 100%;
    height: 100vh;
  }
}

.login-form-container {
  min-width: 357px;
}

@media (max-width: 600px) {
  .login-form-container {
    position: absolute;
  }
}
</style>
