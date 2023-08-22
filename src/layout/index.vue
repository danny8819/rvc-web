<template>
  <div class="">
    <div class="rvc-bgc"></div>
    <Header />
    <router-view></router-view>
    <Footer :webInfo="webInfo" />
  </div>
</template>

<script lang="ts" setup>
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

<style lang="scss">
.rvc-bgc {
  pointer-events: none;
  z-index: -1;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 0;
  height: 100vh;
  background-color: #F4F5F7;
}
</style>
