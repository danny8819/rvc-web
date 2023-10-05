import Mock from 'mockjs';

export default [
  {
    url: '/mockApi/model/modelList',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => ({
      code: 0,
      data: Mock.mock({
        total: 1,
        page: 1,
        'pageModelVOList|3-5': [
          {
            picture: 'https://picsum.photos/1280/720.webp',
            name: '@ctitle',
            modelType: '[1,2,3,4]',
            types: [{ id: '1', type: '妮露' }],
            lookNum: 0,
            uploadDate: '222',
            avatar: 'https://picsum.photos/30.webp',
            nickname: '@name',
            mid: '22',
            uid: '222',
          },
        ],
      }),
    }),
  },
  {
    url: '/mockApi/model/modelInfo',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => ({
      code: 0,
      data: {
        isCollect: true,
        isLike: true,
        model: {
          mid: '22',
          uid: '222',
          nickname: 'RVC',
          avatar: 'https://picsum.photos/30.webp',
          name: '原神 - 妮露DiffSinger模型',
          picture: 'https://picsum.photos/1280/720.webp',
          modelType: '[1,2,3,4]',
          uploadDate: '222',
          aiType: '[1,2,3,4]',
          description: '222',
          note: '222',
        },
      },
    }),
  },
  {
    url: '/mockApi/model/model-like',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => ({
      code: 0,
      data: {
        isCollect: true,
        isLike: true,
        model: {
          mid: '22',
          uid: '222',
          nickname: 'RVC',
          avatar: 'https://picsum.photos/30.webp',
          name: '原神 - 妮露DiffSinger模型',
          picture: 'https://picsum.photos/450/620.webp',
          modelType: '[1,2,3,4]',
          uploadDate: '222',
          aiType: '[1,2,3,4]',
          description: '222',
          note: '222',
        },
      },
    }),
  },
];
