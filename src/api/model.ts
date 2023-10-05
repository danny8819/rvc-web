import request from "@/utils/request";

// 收藏模型
export const collectModel = (params: { mid: string }) => {
  return request.get("/model/collect", { params });
};

// 删除模型
export const deleteModel = (params: any) => {
  return request.get("/model/deleteModel", { params });
};

// 下载模型
export const downloadModel = (params: any) => {
  return request.get("/model/download", { params });
};

// 点赞模型
export const likeModel = (params: { mid: string }) => {
  return request.get("/model/like", { params });
};

// 获取该模型的详细信息
export const getModelInfo = (params: { mid: string }) => {
  return request.get("/model/modelInfo", { params });
};

/**
 * 获取所有模型
 * @param params
 * @returns
 */
export const modelList = (params: { page: number }) => {
  return request.get("/model/modelList", { params });
};

// 获取该用户的模型(对应点击用户头像获取用户模型列表)
export const searchModelByUser = (params: any) => {
  return request.get("/model/searchModelByUser", { params });
};

// 取消收藏模型
export const unCollectModel = (params: any) => {
  return request.get("/model/unCollect", { params });
};

// 取消点赞模型
export const unlikeModel = (params: any) => {
  return request.get("/model/unlike", { params });
};

// 浏览模型
export const watchModel = (params: any) => {
  return request.get("/model/watch", { params });
};

// 添加模型
export const addModel = (data: {
  name: string;
  aiType: string;
  modelType: string;
  picture: string;
  description: string;
  note: string;
  fid: string;
}) => {
  return request.post("/model/addModel", data);
};

/**
 * 更新模型
 * @param data
 * @returns
 */

export const updateModel = (data: any) => {
  return request.post("/model/updateModel", data);
};

/**
 * 上传模型
 * @param formData
 * @returns
 */
export const uploadModel = (formData: FormData) => {
  return request.post("/oss/upload/model", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
