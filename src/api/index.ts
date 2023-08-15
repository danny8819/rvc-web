import request from '@/utils/request'

export function getMember(){
  return  request.get('/webInfo/getMember')
}
export function getWebInfo(){
    return request.get('/webInfo/getWebInfo')
}

export default {}