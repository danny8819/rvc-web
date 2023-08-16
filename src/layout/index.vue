<template>
  <div class="">
    <Header />
    <router-view></router-view>
    <Footer :webInfo="webInfo" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { getMember, getWebInfo } from "@/api/website";
const members = ref([]);
const webInfo = ref({});

getMember().then((res) => {
  members.value = res?.data?.members || [];
});

getWebInfo().then((res) => {
  if (res?.data?.webInfo) {
    webInfo.value = res.data.webInfo;
  }
});
</script>

<style lang="scss"></style>
