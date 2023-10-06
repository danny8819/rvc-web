<template>
  <div class="rvc-layout">
    <div class="rvc-bgc"></div>
    <Header />
    <div class="header-after" style="height: 60px"></div>
    <div
      :class="
        $route.path === '/'
          ? 'app-main mx-auto my-0'
          : 'app-main mx-auto my-0 lg:max-w-screen-xl pb-16 lg:px-8 px-3'
      "
    >
      <Transition name="slide-fade">
        <router-view></router-view>
      </Transition>
    </div>
    <!-- <Footer :webInfo="webInfo" v-show="!$route.meta.hideFooter" /> -->
    <Footer2 :webInfo="webInfo" v-show="!$route.meta.hideFooter" />
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Footer2 from './Footer2.vue';
import { getMember, getWebInfo } from '@/api/website';
import { userInfo } from '@/api/user';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
if (userStore.userInfo?.username) {
  userInfo({ username: userStore.userInfo.username });
}

const webInfo = ref<{
  beianInfo: string;
  id: number;
  masterQq: string;
  officialQq: string;
  webName: string;
  websiteUrl: string;
}>();

getWebInfo().then(res => {
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
  background-color: var(--el-bg-color-page);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
