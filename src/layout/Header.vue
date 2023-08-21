<template>
  <div class="app-header d-flex justify-space-between align-center">
    <div class="logo-wrap">
      <router-link class="nav-link" to="/">
        <img
          height="100%"
          src="/rvc.svg"
          alt="logo"
          style="transform: scale(2)"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <!-- 菜单 -->
    <v-btn
      class="toggle-btn d-flex d-sm-none d-md-none d-lg-none"
      variant="text"
      @click="isActive = !isActive"
    >
      <v-app-bar-nav-icon />
    </v-btn>

    <ul
      class="navbar-nav d-flex justify-center"
      :class="[isActive ? 'd-block' : '']"
      @click="isActive = !isActive"
    >
      <li
        class="nav-item text-center d-flex justify-center pr-5"
        :class="{ active: $route.path === '/community' }"
      >
        <router-link class="nav-link" to="/community">交流</router-link>
      </li>
      <li class="nav-item text-center d-flex justify-center">
        <router-link class="nav-link" to="/">其他</router-link>
      </li>
    </ul>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-btn
      v-if="$route.path !== '/login' && !isLogin"
      class="d-none d-sm-flex btn-custom-nm ml-5"
      variant="outlined"
      color="primary"
      to="/login"
      elevation="0"
    >
      {{ "登录" }}
    </v-btn>
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
          <!-- <el-dropdown-item disabled>Action 4</el-dropdown-item> -->
          <!-- <el-dropdown-item divided>Action 5</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();

const isActive = ref(false);
const isHovered = ref(false);

const isLogin = computed(() => {
  return userStore.token;
});

const logout = async () => {
  await userStore.logout();
  isLogin.value = false;
};
</script>

<style lang="scss">
.app-header {
  height: 60px;
  box-shadow: rgba(4, 17, 29, 0.25) 0px 8px 8px -8px;
  background-color: $white;
  .logo-wrap {
    width: 85px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: center;
    height: 100%;
    z-index: 11;
    li {
      display: flex;
      flex-direction: row;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
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
  }
  .nav-item:hover {
    .nav-link {
      color: $primary;
    }
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

@media (max-width: 991px) {
  .mob-header-fixed {
    position: fixed;
  }
}

@media (max-width: 600px) {
  .app-header {
    .navbar-nav {
      display: none;
      position: absolute;
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
}
</style>
