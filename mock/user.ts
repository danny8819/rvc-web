import Mock from 'mockjs';

export default [
  {
    url: '/mockApi/user/login',
    method: 'post',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: 200,
        data: {
          token: 'mock-token',
          userInfo: {
            uid: 'test',
            avatar: '/logo2.png',
            username: 'test',
            level: 1,
            modelLevel: 1,
            description: '测试账号',
          },
        },
      };
    },
  },
  {
    url: '/mockApi/user/logOut',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: 200,
        data: {
         
        },
      };
    },
  } 
];
