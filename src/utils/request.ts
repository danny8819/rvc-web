import axios from "axios";
import { useUserStore } from "@/store/user";
import whiteUrl from './no-auth-url'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: "/appApi",
  timeout: 100000,
});
  
request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.token;
    if (whiteUrl.includes(config.url!)) {
      return config;
    }
    if (!token) {
      ElMessage({
        message: '请登录后操作',
        grouping: true,
        type: 'warning',
      })
      return Promise.reject(new Error(config.url + "❌❌not Token"));
    }
    config.headers["token"] = token;
    //config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  (response) => {
    handleStatusCode(response);
    let res = response.data;
    // 如果是返回的文件
    if (response.config.responseType === "blob") {
      return res;
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === "string") {
      res = res ? JSON.parse(res) : res;
    }
    return res;
  },
  (error) => {
    
    // router.replace({path:'/login'})
    handleStatusCode(error.response)
    return Promise.reject(error);
  }
);

function handleStatusCode(response) {
  try {
    if (response.status == 401 || response.data.code == 401) {
      console.log("❌", response.config.url, response.data.code);
      const userStore = useUserStore();
      userStore.reset();
    }
  } catch (error) {
    
  }
}
export default request;
