import { defineStore } from "pinia";
import {
  logout as logoutApi,
  login as loginApi,
  register as registerApi,
  phoneLogin,
  userInfo as userInfoApi,
  emailLogin as emailLoginApi,
} from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null,
    token: null,
  }),
  getters: {
    isLogin():boolean {
      return !!(this.userInfo && this.token );
    },
    
  },
  actions: {
    async login(data) {
      let res;
      try {
        res = await loginApi(data);
        const { token, userInfo } = res.data;
        if (token && userInfo) {
          this.token = res.data.token;
          this.userInfo = res.data.userInfo;
        }
      } catch (error) {
        console.log("error: ", error);
      }
      return res;
    },
    async phoneLogin(data) {
      const res = await phoneLogin(data);
      const { token, userInfo } = res.data||{};
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    },
    async emailLogin(data) {
      const res = await emailLoginApi(data);
      const { token, userInfo } = res.data||{};
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    },
    async register(data) {
      try {
        const res = await registerApi(data);
        const { token, userInfo } = res.data||{};
        if (token && userInfo) {
          this.token = token;
          this.userInfo = userInfo;
        }
        return res
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      try {
        await logoutApi();
        this.token = null;
        this.userInfo = null;
      } catch (error) {
        
      }
    },
    async updateUserInfo() {
      if (this.userInfo && this.userInfo.username) {
        await userInfoApi({ username: this.userInfo.username }).then((res) => {
          this.userInfo = res.data.userInfo;
        });
      }
      return JSON.parse(JSON.stringify(toRaw(this.userInfo)));
    },
    reset() {
      this.token = null;
      this.userInfo = null;
    },
  },
  persist: true,
});
