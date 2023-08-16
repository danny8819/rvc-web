import request from '@/utils/request'

// 发送图片验证码
export function picCode(){
    return request.get('/sms/picCode')
}