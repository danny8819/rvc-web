import request from '@/utils/request'
// 获取网站成员信息
export function getMember(){
  return  request.get('/webInfo/getMember')
}

// 获取网站信息
export function getWebInfo(){
    return request.get('/webInfo/getWebInfo')
}