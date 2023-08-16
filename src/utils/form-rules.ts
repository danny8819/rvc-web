export const notEmpty = (msg= '不能为空') => {
  return  (v:string) => !!v ||msg
};

export const phoneRule = (msg="手机号格式不正确") => {
    return  (v:string) =>  /^\d{11}$/.test(v) || msg
};