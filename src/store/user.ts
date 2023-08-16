import { defineStore } from "pinia";
import {
  logout as logoutApi,
  login as loginApi,
  register as registerApi,
  phoneLogin,
} from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    count: 0,
    userInfo: null,
    token: null,
  }),
  actions: {
    async login(data) {
      const res = await loginApi(data);
      const { token, userInfo } = res.data;
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    }, 
    async phoneLogin(data) {
      const res = await phoneLogin(data);
      const { token, userInfo } = res.data;
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    },
    async register(data) {
      const res = await registerApi(data);
      const { token, userInfo } = res.data;
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    },
    async logout() {
      await logoutApi();
      this.token = null;
      this.userInfo = null;
    },
  },
  persist: true,
});
