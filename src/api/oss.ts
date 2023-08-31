import request from "@/utils/request";
// http://geniussbg.cn:8803/swagger-ui.html#/
/**
 * 上传模型
 * @param formData 
 * @returns 
 */
export const uploadModel = (formData: FormData) => {
    return request.post("/oss/upload/model", formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  export const uploadImg = (formData: FormData) => {
    return request.post("/oss/upload/img", formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };