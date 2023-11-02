import Mock from 'mockjs';

export default [
  {
    url: '/mockApi/upload/img',
    method: 'post',
    timeout: 2000,
    response: ({ query }) => {
      // console.log(query.file.filename());
      return {
        data: {
          imgUrl: 'https://mock.img',
        },
        code: 200,
        msg: 'success',
      };
    },
  },
  {
    url: '/mockApi/upload/audio',
    method: 'post',
    timeout: 2000,
    response: ({ query }) => {
      return {
        data: {
          audioUrl: 'https://mock.audio',
        },
        code: 200,
        msg: 'success',
      };
    },
  },
];
