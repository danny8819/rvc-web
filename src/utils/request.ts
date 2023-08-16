import axios from "axios";
import {useUserStore } from '@/store/user'
const request = axios.create({
  baseURL: "/appApi",
  timeout: 100000,
});
const whiteUrl = [
  '/webInfo/getMember',
  '/webInfo/getWebInfo',
  '/webInfo/getMember',
  '/webInfo/getWebInfo',
  '/sms/picCode',
  '/user/login',
  '/sms/phoneCode',
  '/user/phoneLogin'
]
request.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.token
  if(whiteUrl.includes(config.url!)){
    return config
  }
  if(!token ) {
    return Promise.reject(new Error(config.url+'--not Token'));
  }
  config.headers['token'] =  token
  //config.headers['Content-Type'] = 'application/json';
 return config
}, error => {
  return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
    let res = response.data;

    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
      return res
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res;
  },
  error => {
    console.log('err' + error) // for debug
    // localStorage.removeItem('token')
    //router.replace({path:'/login'})
    return Promise.reject(error)
  }
)


export default request
