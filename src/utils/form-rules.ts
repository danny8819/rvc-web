export const notEmpty = (msg= '不能为空') => {
  return  (v:string) => !!v ||msg
};

export const phoneRule = (msg="手机号格式不正确") => {
    return  (v:string) =>  /^\d{11}$/.test(v) || msg
};

export const emailRule = (msg="邮箱格式不正确") => {
    return  (v:string) =>  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(v) || msg
}