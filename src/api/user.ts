import request from "@/utils/request";

// 密码登录
export function login(data: {
  phone: string;
  code?: string;
  password?: string;
  picCode?: string;
}) {
  return request.post("/user/login", data);
}

// 手机号登录
export function phoneLogin(data:{
  code: string;
  phone: string;
}) {
  return request.post("/user/phoneLogin",data);
}

// 用户注册
export function register(data: {
  code: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  nickname?: string;
}) {
  return request.post("/user/register", data);
}
/**
 * 获取用户信息
 */
export function userInfo(params: { username: string }) {
  return request.get("/user/userInfo", { params });
}
// 修改密码
export function changePwd(data: {
  code: string;
  oldPassword: string;
  password: string;
  phone: string;
  sid: string;
  username: string;
}) {
  return request.post("/user/changePwd", data);
}

// 忘记密码
export function forgetPwd(data: {
  code: string;
  oldPassword: string;
  password: string;
  phone: string;
  sid: string;
  username: string;
}) {
  return request.post("/user/forgetPwd", data);
}

// 密码修改服务工单注册
export function pwdSID(data: {
  code: string;
  oldPassword: string;
  password: string;
  phone: string;
  sid: string;
  username: string;
}) {
  return request.post("/user/pwdSID", data);
}


export function logout() {
  return request.get("/user/logOut");
}