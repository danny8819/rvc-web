<template>
  <v-container>
    <v-form @submit.prevent="onLogin" validate-on="blur">
      <v-text-field
        v-model="phone"
        label="手机号"
        prepend-icon="mdi-phone"
        type="tel"
        :rules="[notEmpty('手机号不能为空'), phoneRule()]"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="密码"
        prepend-icon="mdi-lock"
        type="password"
        required
      ></v-text-field>
      <v-row>
        <v-col cols="8">
          <v-text-field
            v-model="picCode"
            label="验证码"
            prepend-icon="mdi-numbers"
            type="text"
            :rules="codeRules"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
          align-self="center"
          @click="refreshCode"
          class="d-flex justify-center"
        >
          <v-progress-circular
            v-if="!picCodeUrl"
            indeterminate
          ></v-progress-circular>
          <img :src="picCodeUrl" alt="" style="width: 88%" v-else />
        </v-col>
      </v-row>
      <v-btn type="submit" block class="mt-2" variant="outlined">登录</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import { picCode as picCodeApi } from "@/api/msm";
import { notEmpty, phoneRule } from "@/utils/form-rules";

const userStore = useUserStore();

const router = useRouter();

const phone = ref("");
const password = ref("");
const picCode = ref("");
const picCodeUrl = ref("");
const picCodeValue = ref("");

const codeRules = [notEmpty("验证码不能为空")];

const onLogin = async (event) => {
  const results = await event;
  console.log("results: ", results);

  if (results.valid) {
    const params = {
      password: password.value,
      phone: phone.value,
      picCode: picCode.value,
    };
    console.log(params);
    try {
      const res = await userStore.login(params);
      if (res.code === "4003") {
        refreshCode();
      }
    } catch (error) {}

    router.replace("/");
  }
};

refreshCode();

function refreshCode() {
  picCodeUrl.value = "";
  picCodeValue.value = "";
  picCodeApi().then((res) => {
    picCodeUrl.value = "data:image/png;base64," + res.data.image;
    picCodeValue.value = res.data.code;
  });
}

onMounted(() => {});
</script>

<style lang="scss"></style>
