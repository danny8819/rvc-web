import request from '@/utils/request'

// 发送图片验证码
export function picCode(){
    return request.get('/sms/picCode')
}

// 发送手机验证码
export function phoneCode(params:{phone:string}){
    return request.get('/sms/phoneCode',{params})
}
// 发送邮箱验证码 /sms/emailCode 
export function emailCode(params:{email:string}) {
    return request.get("/sms/emailCode",{params})
}