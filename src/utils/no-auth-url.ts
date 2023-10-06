// 忽略状态码异常的url
export const ignoreErrorUrl = [
  '/webInfo/getMember',
  '/webInfo/getWebInfo',
  '/webInfo/getTool',
];
// 不需要token的url
export const noTokenUrl = [
  // 网站信息类
  '/webInfo/getMember',
  '/webInfo/getWebInfo',
  '/webInfo/getTool',
  // 用户类
  '/user/login',
  '/user/phoneLogin',
  '/user/passwordLogin',
  '/user/register',
  '/user/forgetPwd',
  '/user/pwdSID',
  '/user/emailLogin',
  // 验证码类
  '/sms/emailCode',
  '/sms/picCode',
  '/sms/phoneCode',
  // 模型类
  '/model/modelList',
  '/model/modelInfo',

  '/feedback/tags',
  '/feedback/list',
  '/feedback/myFeedback',
];

export default {};
