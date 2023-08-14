<template>
  <div class="app-header">
    <v-container class="py-0 fill-height">
      <div class="logo-wrap">
        <a href="/"
          ><img
            height="100%"
            src="https://lwmc.net/_nuxt/img/logo.e536265.png"
            alt="logo"
        /></a>
      </div>

      <v-spacer></v-spacer>

      <div
        class="navigation"
        :class="[isActive ? 'd-block' : '']"
        @click="isActive = !isActive"
      >
        <ul class="navbar-nav">
          <li class="nav-item" text>
            <router-link class="nav-link" nuxt to="/">首页</router-link>
          </li>
          <li class="nav-item" text>
            <router-link class="nav-link" nuxt to="/join"
              >白名单申请</router-link
            >
          </li>
          <li class="nav-item" text>
            <router-link class="nav-link" nuxt to="/map">卫星地图</router-link>
          </li>
          <li class="nav-item" text>
            <router-link class="nav-link" nuxt to="/sponsor"
              >赞助支持</router-link
            >
          </li>
          <li class="nav-item" text>
            <router-link class="nav-link" nuxt to="/gallery">画廊</router-link>
          </li>
        </ul>
      </div>

      <v-btn
        class="d-none d-lg-flex btn-custom-nm ml-5"
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
      //   this.isActive = !this.isActive;
    },
    async getUserInfo() {
      //   await this.$store.dispatch("getUserInfo");
    },
  },
};
</script>
