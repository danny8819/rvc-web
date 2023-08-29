<template>
  <v-row>
    <v-col cols="8">
      <v-text-field
        v-model="codeVal"
        label="验证码"
        prepend-icon="mdi-lock"
        type="string"
        :rules="[notEmpty('不能为空')]"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="4" align-self="center">
      <v-btn
        :disabled="resendDisabled"
        @click="resendVerificationCode"
        color="primary phone-login-code-btn"
        small
        outlined
      >
        {{ resendButtonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { phoneCode, emailCode } from "@/api/msm";
import { notEmpty } from "@/utils/form-rules";

const props = defineProps<{
  modelValue: string;
  phone?: string;
  email?: string;
  validFn?: () => Promise<any>;
}>();
const emit = defineEmits(["update:modelValue"]);

const resendButtonText = ref<string | Number>("发送验证码");
const countdown = ref(60);
const resendDisabled = ref(false);
const codeVal = ref("");

watchEffect(() => {
  codeVal.value = props.modelValue;
});

watch(
  () => codeVal.value,
  (val) => {
    emit("update:modelValue", val);
  }
);

async function resendVerificationCode() {
  if (props.validFn) {
    const res = await props.validFn();
    if (Array.isArray(res) && res.length > 0) {
      return;
    }
  }
  const codeApi = props.email ? emailCode : phoneCode;
  const params: any = props.email
    ? { email: props.email }
    : { phone: props.phone };

  try {
    codeApi(params);
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
</script>

<style scoped lang="scss"></style>
