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
      <v-btn class="toggle-btn" variant="text" @click="toggleClass()">
        <v-app-bar-nav-icon />
      </v-btn>
      <div
        class="navigation"
        :class="[isActive ? 'd-block' : '']"
        @click="isActive = !isActive"
      >
        <ul class="navbar-nav">
          <li class="nav-item" :class="{ active: $route.path === '/' }">
            <router-link class="nav-link" to="/">首页</router-link>
          </li>
        </ul>
      </div>

      <v-btn
        class="d-none d-md-flex btn-custom-nm ml-5"
        variant="outlined"
        color="primary"
        to="/login"
        elevation="0"
      >
        {{ "登录" }}
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
      items: [
        { title: "历史文件", link: "/history" },
        { title: "客户端下载" },
        { title: "Java 下载" },
      ],
      user_game_id: "",
    };
  },
  mounted() {
    // this.getUserInfo();
  },
  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
    },
    async getUserInfo() {
      //   await this.$store.dispatch("getUserInfo");
    },
  },
};
</script>
