<template>
  <div class="app-header">
    <div class="header-left logo-wrap">
      <router-link class="nav-link" to="/">
        <img
          height="100%"
          src="/rvc.svg"
          alt="logo"
          style="transform: scale(2)"
        />
      </router-link>
    </div>

    <!-- 菜单 横向-->
    <ul class="menu-wrap horizontal hidden sm:hidden md:flex lg:flex flex">
      <li
        class="nav-item text-center pr-5"
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: $route.path === item.to }"
      >
        <router-link class="nav-link" :to="item.to">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <ul
      class="menu-wrap vertical flex md:hidden lg:hidden"
      v-if="isActive"
      v-click-outside="() => (isActive = false)"
    >
      <li
        class="nav-item text-center pr-5 w-full"
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: $route.path === item.to }"
        @click="
          isActive = false;
          $router.push(item.to);
        "
      >
        <router-link class="nav-link" :to="item.to">
          {{ item.text }}
        </router-link>
      </li>
    </ul>

    <NavSearch
      v-if="$route.name !== 'model-search'"
      @search="toSearch"
      class="hidden sm:block"
    />

    <div class="header-right flex justify-center items-center">
      <!-- 菜单btn -->

      <span
        class="menu-toggle-btn text-2xl mdi mdi-menu sm:flex md:hidden lg:hidden"
        @click="isActive = !isActive"
      ></span>

      <!-- 登录btn -->
      <button
        v-if="$route.path !== '/login' && !isLogin"
        class="login-btn hidden sm:flex mx-5"
        @click="$router.push('/login')"
      >
        {{ '登录' }}
      </button>
      <!-- 头像 -->
      <el-dropdown v-if="!isLogin" trigger="click" :teleported="false">
        <el-avatar
          @mouseenter="isHovered = true"
          class="el-dropdown-link ml-5 mr-2"
          :size="40"
          :src="userStore?.userInfo?.avatar || '/logo2.png'"
        ></el-avatar>
        <template #dropdown>
          <AvatarDropdownMenu />
        </template>
      </el-dropdown>
      <UploadPopover v-if="isLogin" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

import NavSearch from './Header/NavSearch.vue';
import UploadPopover from './Header/UploadPopover.vue';
import AvatarDropdownMenu from './Header/AvatarDropdownMenu.vue';
defineOptions({
  name: 'LayoutHeader',
});

const router = useRouter();
const userStore = useUserStore();

const isActive = ref(false);
const isHovered = ref(false);
const menuList = [
  { to: '/', text: '首页' },
  { to: '/community', text: '交流' },
  { to: '/model-home', text: '模型' },
];

const isLogin = computed(() => {
  return userStore.token;
});

const toSearch = val => {
  router.push({ path: '/model-search', query: { keyword: val } });
};
</script>

<style lang="scss">
.app-header {
  position: fixed;
  z-index: 99;
  height: 60px;
  width: 100vw;
  box-shadow: rgba(4, 17, 29, 0.25) 0px 8px 8px -8px;
  background-color: var(--nav-bg-color);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;

  .logo-wrap {
    width: 85px;
    height: 100%;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search-container {
    flex-shrink: 1;
  }
  .menu-wrap {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;

    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    height: 100%;
    z-index: 11;

    li {
      display: flex;
      justify-content: center;
      flex-direction: row;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      flex-shrink: 0;
      a {
        text-decoration: none;
        line-height: 60px;
        font-size: 16px;
        color: #8d97ad;
        opacity: 1;
        padding-right: 10px;
      }
      &.active a {
        color: var(--el-color-primary);
        font-weight: 600;
      }
    }

    &.vertical {
      position: fixed;
      left: 0;
      top: 60px;
      width: 100%;
      height: auto;
      justify-content: flex-start;
      flex-direction: column;
      background-color: #f4f8fa;
      box-shadow: 0px 15px 30px rgb(0 0 0 / 12%);

      backdrop-filter: blur(7px);

      .nav-item .nav-link {
        line-height: 55px !important;
      }
    }
  }

  .nav-item:hover {
    .nav-link {
      color: var(--el-color-primary);
    }
  }

  .header-right {
    flex-shrink: 0;
  }
}

@media (max-width: 767px) {
  .common-links {
    &.three-part li {
      width: 50%;
      a {
        font-size: 13px;
      }
    }
  }
  .mob-imagesetter {
    background-size: unset;
    background-position: unset !important;
    margin-top: 29px;
    // background-image: url(~assets/images/banner-bg-sm.png) !important;
  }
  .banner-title {
    margin-top: -30px;
  }
}

.login-btn {
  background-color: transparent;
  color: var(--el-color-primary);
  border: 1px solid var(--el-color-primary);
  border-radius: 5px;

  padding: 7px 20px;
  cursor: pointer;
  height: 34px;
  display: flex;
  align-items: center;
}

.mantine-1g4q40w {
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;

  align-items: center;

  justify-content: flex-start;
  gap: 10px;
}
</style>
