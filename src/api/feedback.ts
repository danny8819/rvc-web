import request from '@/utils/request';

export const getFeedbackList = (params: {
  isSolve: number;
  tagId?: number;
  sortType: 'create_time';
  page: number;
}) => {
  return request.get('/feedback/list', { params });
};

export const getMyFeedbackList = (params: {
  token?: string;
  uid?: string;
  page: number;
}) => {
  return request.get('/feedback/myFeedback', { params });
};

// /tags
export const getFeedbackTags = () => {
  return request.get('/feedback/tags');
};

// 新建反馈
export const addFeedback = (data: {
  feedbackId?: string;
  tagId: string;
  title: string;
  content: string;
}) => {
  return request.post('/feedback/add', data);
};

// /up
export const upFeedback = (params: { feedbackId: string }) => {
  return request.get('/feedback/up', { params });
};
// /solve
export const solveFeedback = (params: { feedbackId: string }) => {
  return request.get('/feedback/solve', { params });
};

// /delete
export const deleteFeedback = (params: { feedbackId: string }) => {
  return request.get('/feedback/delete', { params });
};
// /update
export const updateFeedback = (data: {
  feedbackId: string;
  tagId: number;
  title: string;
  content: string;
}) => {
  return request.post('/feedback/update', data);
};

// /reply/list
export const getReplyList = (params: { feedbackId: string; page: number }) => {
  return request.get('/feedback/reply/list', { params });
};

// /reply/add
export const addReply = (data: { feedbackId: string; content: string }) => {
  return request.post('/feedback/reply/add', data);
};
