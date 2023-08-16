import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ 
    count: 0,
    userInfo: null
  }),
  actions: {
    updateUserInfo(payload: any) {
      this.userInfo=payload
    },
  },
  persist:true
})