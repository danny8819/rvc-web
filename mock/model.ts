export default [
  {
    url: '/mockApi/model/modelList',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => ({
      code: 0,
      data: {
        pageModelVOList: [
          {
            picture: '/img/banner-bg2.png',
            name: '原神 - 妮露DiffSinger模型',
            modelType: '[1,2,3,4]',
            types: [{ id: '1', type: '妮露' }],
            lookNum: 0,
            uploadDate: '222',
            avatar: '/img/user-placeholder.webp',
            nickname: 'RVC',
            mid: '22',
            uid: '222',
          },
        ],
        total: 1,
        page: 1,
      },
    }),
  },
];
