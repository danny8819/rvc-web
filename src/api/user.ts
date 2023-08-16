import request from '@/utils/request'

// 密码登录
export function login(){
    return request.post('/user/login')
}
 
// 手机号登录
export function phoneLogin(){
    return request.post('/user/phoneLogin')
}

// 用户注册
export function register(){
    return request.post('/user/register')
}
/**
 * 获取用户信息
 */
export function userInfo(params:{username:string}){
    return request.get('/user/userInfo',{ params })
}