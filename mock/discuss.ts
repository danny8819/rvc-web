import Mock from 'mockjs';

export default [
  {
    url: '/mockApi/discuss/discussList',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          pageDiscussList: [
            {
              did: 'e8b55bae-96cb-4a40-8fb1-c958262b1798',
              uid: '898bd063-6c16-49e9-8e06-7ab3b1ed289e',
              nickname: 'Genius',
              avatar:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/user/avatar/0f3d6ba7-3860-4164-bf3d-c9cd724522f3.png',
              tagId: '9cb48f5c-b784-4758-9983-bc9e03a7355f',
              tagName: '谈天说地',
              title: '扣1送地狱火',
              content:
                '<h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <audio controls="controls"><source src="https://upload.wikimedia.org/wikipedia/commons/b/b0/%E8%AB%96%E8%AA%9E-%E5%AD%B8%E8%80%8C%E7%AC%AC%E4%B8%80.ogg" type="audio/ogg"></audio> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p>',
              cover:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/img/8c028b4a-d62c-4eb8-ab47-270de38a5b2c.jpg',
              commentNum: 102,
              likeNum: 1045,
              collectNum: 765,
              watchNum: 5000,
              isCollect: null,
              isLike: null,
              createDate: '2023-10-06T02:47:52',
              timeStr: '14 hours ago',
            },
            {
              did: 'e1b4efaa-7777-4557-b606-a96ff7ee6da6',
              uid: '898bd063-6c16-49e9-8e06-7ab3b1ed289e',
              nickname: 'Genius',
              avatar:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/user/avatar/0f3d6ba7-3860-4164-bf3d-c9cd724522f3.png',
              tagId: '9cb48f5c-b784-4758-9983-bc9e03a7355f',
              tagName: '谈天说地',
              title: '战始放我',
              content:
                '<h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <audio controls="controls"><source src="https://upload.wikimedia.org/wikipedia/commons/b/b0/%E8%AB%96%E8%AA%9E-%E5%AD%B8%E8%80%8C%E7%AC%AC%E4%B8%80.ogg" type="audio/ogg"></audio> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p>',
              cover:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/img/8c028b4a-d62c-4eb8-ab47-270de38a5b2c.jpg',
              commentNum: 365,
              likeNum: 2870,
              collectNum: 1250,
              watchNum: 9000,
              isCollect: null,
              isLike: null,
              createDate: '2023-10-03T16:58:19',
              timeStr: '3 days ago',
            },
            {
              did: 'c50d7310-28aa-47cb-bcfd-28f4533549d0',
              uid: 'c44843c5-5c44-43da-919d-77e9b9b49936',
              nickname: 'Aurora',
              avatar: null,
              tagId: '9cb48f5c-b784-4758-9983-bc9e03a7355f',
              tagName: '谈天说地',
              title: '关于RVC社区',
              content:
                '<h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <audio controls="controls"><source src="https://upload.wikimedia.org/wikipedia/commons/b/b0/%E8%AB%96%E8%AA%9E-%E5%AD%B8%E8%80%8C%E7%AC%AC%E4%B8%80.ogg" type="audio/ogg"></audio> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p>',
              cover:
                'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/img/8c028b4a-d62c-4eb8-ab47-270de38a5b2c.jpg',
              commentNum: 876,
              likeNum: 10333,
              collectNum: 5437,
              watchNum: 20500,
              isCollect: null,
              isLike: null,
              createDate: '2023-10-03T17:13:14',
              timeStr: '2 days ago',
            },
          ],
          limit: 10,
          page: 1,
          total: 3,
        },
        timestamp: null,
      };
    },
  },
  {
    url: '/mockApi/discuss/discuss',
    method: 'get',
    timeout: 2000,
    response: ({ did }) => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          did: 'e8b55bae-96cb-4a40-8fb1-c958262b1798',
          uid: '898bd063-6c16-49e9-8e06-7ab3b1ed289e',
          nickname: 'Genius',
          avatar:
            'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/user/avatar/0f3d6ba7-3860-4164-bf3d-c9cd724522f3.png',
          tagId: '9cb48f5c-b784-4758-9983-bc9e03a7355f',
          tagName: '谈天说地',
          title: '扣1送地狱火',
          content:
            '<h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <audio controls="controls"><source src="https://upload.wikimedia.org/wikipedia/commons/b/b0/%E8%AB%96%E8%AA%9E-%E5%AD%B8%E8%80%8C%E7%AC%AC%E4%B8%80.ogg" type="audio/ogg"></audio> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p> <h1>RVC社区</h1> <p>RVC社区是一个基于VITS语音合成系统的开源工具，可以实现实时的声音转换，适用于直播、视频录制等场景。RVC可以让用户将一个人的声音样本复制并转移到另一个人身上，或者自定义声音的特征，如音调、音色、语速等。RVC社区提供了模型分享下载、在线演示、教程指导等功能，让用户可以轻松上手和体验RVC的魅力。</p> <p><a href="https://rvc.top/#/">预览地址</a></p>',
          cover:
            'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/img/8c028b4a-d62c-4eb8-ab47-270de38a5b2c.jpg',
          commentNum: 102,
          likeNum: 1045,
          collectNum: 765,
          watchNum: 5000,
          isCollect: null,
          isLike: null,
          createDate: '2023-10-06T02:47:52',
          timeStr: '14 hours ago',
        },
      };
    },
  },
  {
    url: '/mockApi/discuss/tags',
    method: 'get',
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: '200',
        msg: 'Success',
        data: {
          tags: [
            {
              id: 1,
              tagId: '9cb48f5c-b784-4758-9983-bc9e03a7355f',
              tagName: '谈天说地',
              tagImg: '/image/webp/chat.webp',
              tagUrl: '/community/chat',
            },
            {
              id: 2,
              tagId: 'dc05c13e-5069-42d4-9691-0be4a58366ed',
              tagName: '教教你的',
              tagImg: '/image/webp/tutorial.webp',
              tagUrl: '/community/tutorial',
            },
            {
              id: 3,
              tagId: '1bd9dd49-8aa8-4153-9fc2-ab23fc4a8b77',
              tagName: '炼丹心得',
              tagImg: '/image/webp/train.webp',
              tagUrl: '/community/train',
            },
            {
              id: 4,
              tagId: '715370b5-3122-4722-955a-32e711b26e20',
              tagName: '模型分享',
              tagImg: '/image/webp/share.webp',
              tagUrl: '/community/share',
            },
          ],
        },
        timestamp: null,
      };
    },
  },
];
