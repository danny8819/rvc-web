<template>
  <div class="app-header d-flex justify-space-between align-center">
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

    <!-- <v-spacer></v-spacer> -->

    <!-- 菜单 横向-->
    <ul class="menu-wrap horizontal d-none d-sm-none d-md-flex d-lg-flex">
      <li
        class="nav-item text-center pr-5"
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: $route.path === item.to }"
      >
        <router-link class="nav-link" :to="item.to">{{
          item.text
        }}</router-link>
      </li>
    </ul>
    <ul class="menu-wrap vertical d-md-none d-lg-none" v-if="isActive">
      <li
        class="nav-item text-center pr-5"
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: $route.path === item.to }"
      >
        <router-link class="nav-link" :to="item.to">{{
          item.text
        }}</router-link>
      </li>
    </ul>
    <!-- 搜索 -->
    <NavSearch v-if="$route.name !== 'model-search'" @search="toSearch" />

    <div class="header-right d-flex justify-center">
      <!-- 菜单btn -->
      <v-btn
        class="menu-toggle-btn d-flex d-sm-flex d-md-none d-lg-none"
        variant="text"
        @click="isActive = !isActive"
      >
        <v-app-bar-nav-icon />
      </v-btn>
      <!-- 登录btn -->
      <v-btn
        v-if="$route.path !== '/login' && !isLogin"
        class="d-none d-sm-flex btn-custom-nm mx-5"
        variant="outlined"
        color="primary"
        to="/login"
        elevation="0"
      >
        {{ "登录" }}
      </v-btn>
      <!-- 头像 -->
      <el-dropdown v-if="isLogin">
        <v-avatar
          size="40"
          @mouseenter="isHovered = true"
          class="el-dropdown-link mr-5"
        >
          <img
            :src="userStore?.userInfo?.avatar || '/img/user-placeholder.webp'"
            alt="Avatar"
            style="width: 100%"
          />
        </v-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><router-link to="/profile" class="reset-link"
                >个人</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><router-link to="/account/setting" class="reset-link"
                >设置</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item @click="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import NavSearch from "@/layout/NavSearch.vue";
defineOptions({
  name: "LayoutHeader",
});
const router = useRouter();
const userStore = useUserStore();

const isActive = ref(false);
const isHovered = ref(false);
const menuList = [
  { to: "/", text: "首页" },
  { to: "/community", text: "交流" },
  { to: "/model-home", text: "模型" },
];

const isLogin = computed(() => {
  return userStore.token;
});

const logout = async () => {
  try {
    await userStore.logout();
    isLogin.value = false;
    router.replace("/");
  } catch (error) {}
};

const toSearch = (val) => {
  router.push({ path: "/model/search", query: { keyword: val } });
};
</script>

<style lang="scss">
.app-header {
  position: fixed;
  z-index: 999;
  height: 60px;
  width: 100%;
  box-shadow: rgba(4, 17, 29, 0.25) 0px 8px 8px -8px;
  background-color: $white;
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
    display: flex;
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
        color: $primary;
        font-weight: 600;
      }
    }

    &.vertical {
      position: fixed;
      left: 0;
      top: 60px;
      width: 100%;
      height: auto;

      background-color: #f4f8fa;
      flex-direction: column !important;
      box-shadow: 0px 15px 30px rgb(0 0 0 / 12%);

      .nav-item .nav-link {
        line-height: 55px !important;
      }
    }
  }

  .nav-item:hover {
    .nav-link {
      color: $primary;
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
  .px-sm-0 {
    padding-left: 0;
    padding-right: 0;
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
</style>
