export default [
  {
    url: '/mockApi/feedback/list',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          pageList: [
            {
              feedbackId: '7ad062f9-bc89-4691-9447-9f4270088a55',
              uid: '898bd063-6c16-49e9-8e06-7ab3b1ed289e',
              username: 'Genius',
              nickname: 'Genius',
              avatar:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/user/avatar/0f3d6ba7-3860-4164-bf3d-c9cd724522f3.png',
              tagId: 1,
              tagName: 'RVC反馈',
              title: '六提少华论',
              content: 'officia do esse tempor elit',
              upNum: 2,
              replyNum: 0,
              isSolve: false,
              createTime: '2023-10-03 21:11:05',
              createDayTime: '1 day ago',
              solveTime: '2023-10-03 21:11:05',
              solveDayTime: '1 day ago',
            },
            {
              feedbackId: '342ff873-d76a-494e-8edb-bb172067812d',
              uid: '898bd063-6c16-49e9-8e06-7ab3b1ed289e',
              username: 'Genius',
              nickname: 'Genius',
              avatar:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/user/avatar/0f3d6ba7-3860-4164-bf3d-c9cd724522f3.png',
              tagId: 1,
              tagName: 'RVC反馈',
              title: '还造张连清形',
              content: 'enim',
              upNum: 0,
              replyNum: 0,
              isSolve: false,
              createTime: '2023-10-03 20:44:11',
              createDayTime: '2 days ago',
              solveTime: null,
              solveDayTime: null,
            },
          ],
          limit: 10,
          page: 1,
          total: 2,
        },
        timestamp: null,
      };
    },
  },
  {
    url: '/mockApi/feedback/up',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          up: true,
        },
        timestamp: null,
      };
    },
  },
  {
    url: '/mockApi/feedback/tags',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          tags: [
            {
              id: 1,
              tag: 'RVC反馈',
            },
            {
              id: 2,
              tag: '社区反馈',
            },
            {
              id: 3,
              tag: '网站BUG反馈',
            },
          ],
        },
        timestamp: null,
      };
    },
  },
  {
    url: '/mockApi/feedback/add',
    method: 'post',
    timeout: 2000,
    response: () => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          add: true,
        },
        timestamp: null,
      };
    },
  },
  {
    url: '/mockApi/feedback/delete',
    method: 'get',
    timeout: 2000,

    response: () => {
      return {
        code: '200',
        msg: 'Success',
        data: {},
        timestamp: null,
      };
    },
  },
  {
    url: '/mockApi/feedback/solve',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: '200',
        msg: 'Success',
        data: {},
        timestamp: null,
      };
    },
  }
];
