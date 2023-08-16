<template>
  <div class="app-header">
    <v-container class="py-0 fill-height">
      <div class="logo-wrap">
        <a href="/"
          ><img
            height="100%"
            src="/rvc.svg"
            alt="logo"
            style="transform: scale(2)"
        /></a>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        class="toggle-btn d-flex d-sm-none d-md-none d-lg-none"
        variant="text"
        @click="toggleClass"
      >
        <v-app-bar-nav-icon />
      </v-btn>
      <div
        class="navigation"
        :class="[isActive ? 'd-block' : '']"
        @click="isActive = !isActive"
      >
        <ul class="navbar-nav">
          <li
            class="nav-item"
            :class="{ active: $route.path === '/' }"
            v-if="$route.path !== '/'"
          >
            <router-link class="nav-link" to="/">首页</router-link>
          </li>
        </ul>
      </div>

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

      <v-hover v-slot:default="{ hover }" v-if="isLogin">
        <v-avatar size="50" @mouseenter="isHovered = true">
          <img
            :src="userStore?.userInfo?.avatar || '/img/user-placeholder.webp'"
            alt="Avatar"
            style="width: 100%"
          />
          <v-menu activator="parent" v-model="isHovered" offset="10">
            <v-list>
              <v-list-item
                v-for="(item, index) in ['logout']"
                :key="index"
                :value="index"
                @click="logout"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-avatar>
      </v-hover>
    </v-container>
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

const toggleClass = () => {
  isActive.value = !isActive.value;
};

const logout = async () => {
  await userStore.logout();
  isLogin.value = false;
};
</script>
