import request from '@/utils/request';

// 添加帖子
export const addDiscuss = (data: {
  did: string;
  title: string;
  cover: string;
  content: string;
  tagId: string;
  show: number;
}) => {
  return request.post('/discuss/addDiscuss', data);
};

// 更新帖子
export const updateDiscuss = (data: {
  did: string;
  title: string;
  cover: string;
  content: string;
  tagId: string;
  show: number;
}) => {
  return request.post('/discuss/updateDiscuss', data);
};

// 获取帖子列表
export const discussList = (params: object) => {
  return request.get('/discuss/discussList', { params });
};

// 我的讨论列表
export const myDiscussList = (params: object) => {
  return request.get('/discuss/myDiscussList', { params });
};

// 搜索某用户的讨论列表
export const selectDiscussList = (params: object) => {
  return request.get('/discuss/selectDiscussList', { params });
};

// 获取所有帖子Tag
export const tags = (params: object) => {
  return request.get('/discuss/tags', { params });
};

// 删除帖子
export const deleteDiscuss = (params: object) => {
  return request.get('/discuss/deleteDiscuss', { params });
};

// 获取某个帖子信息
export const discuss = (params: object) => {
  return request.get('/discuss/discuss', { params });
};

// 点赞帖子
export const like = (params: object) => {
  return request.get('/discuss/like', { params });
};

// 收藏帖子
export const collect = (params: object) => {
  return request.get('/discuss/collect', { params });
};

// 浏览帖子
export const watch = (params: object) => {
  return request.get('/discuss/watch', { params });
};

//上传图片
export const uploadImg = (formData: FormData) => {
  return request.post('/upload/img', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//上传音频
export const uploadAudio = (formData: FormData) => {
  return request.post('/upload/audio', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
