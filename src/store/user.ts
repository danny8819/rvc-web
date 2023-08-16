import { defineStore } from 'pinia'
import {logout as logoutApi,login as loginApi} from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({ 
    count: 0,
    userInfo: null,
    token: null
  }),
  actions: {
    updateUserInfo(payload: any) {
      this.userInfo=payload
    },
    updateToken(payload: any) {
      this.token=payload
    },
    async login(data){
      const res = await loginApi(data)
      const { token, userInfo } = res.data;
      if(token&&userInfo ){
        this.token = token
        this.userInfo = userInfo 
      } 
    },
    async logout(){
      await logoutApi()
      this.token = null
      this.userInfo = null 
    }
  },
  persist:true
})