import request from "@/utils/request";

// 密码登录
type LoginData = {
  phone: string;
  code?: string;
  password?: string;
  picCode?: string;
}
export function login(data:LoginData) {
  return request.post("/user/login", data);
}
// 手机号登录
type PhoneLoginData = {
  code: string; phone: string 
}
export function phoneLogin(data: PhoneLoginData) {
  return request.post("/user/phoneLogin", data);
}

// 用户注册
type RegisterData = {
  code: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  nickname?: string;
}
export function register(data:RegisterData) {
  return request.post("/user/register", data);
}
/**
 * 获取用户信息
 */
type userInfoParams = {
  username: string
}
export function userInfo(params:userInfoParams) {
  return request.get("/user/userInfo", { params });
}




 

export function logout() {
  return request.get("/user/logOut");
}

// 修改用户信息

export function changeUserInfo(data: {
  avatar?: any;
  description?: string;
  level?: number;
  modelLevel?: number;
  nickname: string;
  uid: string;
  username: string;
}) {
  return request.post("/user/changeUserInfo", data);
}

// /user/changeAvatar 修改用户头像
export function changeAvatar(data: {
  avatar: any;
  uid: string;
  username: string;
}) {
  return request.post("/user/changeAvatar", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}


// 第一步是 修改密码服务的工单验证 也就是工单验证那个接口
// 1，忘记密码需要三个参数，手机号，用户名，手机号验证码  forgetPwd
// 2，修改密码需要两个参数，手机号，验证码

// 提交成功后，会返回一个sid，这个就是修改密码的工单号，也就是会进行下一步，修改密码
// 1，忘记密码需要提交 sid，新密码，用户名
// 2，修改密码需要提交 sid，新密码，旧密码（header要携带token）

// 密码修改服务工单注册
type PwdSid = {
  code: string;
  phone: string;
  username: string;
};
export function pwdSID(data: PwdSid) {
  return request.post("/user/pwdSID", data);
}

// 修改密码
type ChangePwdData = {
  code: string;
  oldPassword: string;
  password: string;
  phone: string;
  sid: string;
  username: string;
}

export function changePwd(data: ChangePwdData) {
  return request.post("/user/changePwd", data);
}
// 忘记密码
type ForgetPwdData = {
  code: string;
  phone: string;
  username: string;
  password: string;
  sid: string;
}
export function forgetPwd(data: ForgetPwdData) {
  return request.post("/user/forgetPwd", data);
}