<template>
  <div class="container-1200">
    <ModelDetailHeader :data="modelDetail" />
    <el-row :gutter="20">
      <el-col :span="17">
        <ModelInfoCard :data="modelDetail" />
        <ReplyInputCard class="mb-5 shadow-none" @reply="handleReply" @sendVoice="sendVoice"/>
        <el-card
          shadow="never"
          class="mb-1"
          v-for="(item, index) in 11"
          :key="index"
        >
          <div class="model-detail__comment-header d-flex align-center mb-5">
            <el-avatar
              :size="30"
              :src="'/img/user-placeholder.webp'"
              class="mr-5"
            >
            </el-avatar>
            <span>作者</span><span class="pipe">|</span>
            <span>时间</span>
          </div>
          <div class="model-detail__comment-content mb-5">
            <p>66666666666666666666666666</p>
          </div>
          <div
            class="model-detail__comment-footer d-flex justify-space-between align-center"
          >
            <el-button>回复</el-button>
            <span class="font-12 cursor-pointer">举报</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <div class="d-flex mb-5">
          <div
            class="mr-2 cursor-pointer d-flex align-center download-btn"
            @click="handleDownload"
          >
            <el-icon size="25"><Download /></el-icon>
            <span>下载</span>
          </div>
          <div class="icon-btn" @click="handleLike">
            <SvgIcon
              name="dianzan"
              size="25"
              :color="state.isLike ? 'orange' : undefined"
            />
          </div>
          <div class="icon-btn" @click="handleCollect">
            <SvgIcon
              name="shoucang2"
              size="25"
              :color="state.isCollect ? 'orange' : undefined"
            />
          </div>
        </div>
        <ModelDetail :data="modelDetail" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import ReplyInputCard from "@/components/ReplyInputCard.vue";
import ModelInfoCard from "@/pages/model/model-detail/ModelInfoCard.vue";
import ModelDetailHeader from "./ModelDetailHeader.vue";
import ModelDetail from "@/pages/model/model-detail/ModelDetail.vue";

import {
  getModelInfo,
  collectModel,
  likeModel,
  unlikeModel,
  unCollectModel,
  downloadModel,
} from "@/api/model";
import { ElMessage } from "element-plus";
let comment = ref();

const route = useRoute();
const mid = route.params.mid;
const modelDetail = ref<ModelDetail>();
const state = reactive({
  isCollect: false,
  isLike: false,
});
getModelInfo({ mid: mid as string }).then((res) => {
  console.log(res.data);
  state.isCollect = res.data.isCollect || false;
  state.isLike = res.data.isLike || false;
  modelDetail.value = res.data.model;
});

const handleCollect = () => {
  const _api = state.isCollect ? unCollectModel : collectModel;
  _api({ mid: mid as string }).then((res: any) => {
    console.log(res);
    let msg =
      res.code == 200 ? (state.isCollect ? "已取消收藏" : "收藏成功") : res.msg;
    ElMessage({
      message: msg,
      type: "success",
    });
    // 返回字段是 isCollection 不是 isCollect
    state.isCollect = res.data.isCollection;
  });
};
const handleLike = () => {
  const _api = state.isLike ? unlikeModel : likeModel;
  _api({ mid: mid as string }).then((res: any) => {
    console.log("res: ", res);
    let msg =
      res.code == 200 ? (state.isLike ? "已取消点赞" : "点赞成功") : res.msg;
    ElMessage({
      message: msg,
      type: "success",
    });
    state.isLike = res.data.isLike;
  });
};
function downloadFile(url, filename) {
  var a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  a.href = url;
  a.download = filename;
  a.click();
  document.body.removeChild(a);
}
const handleDownload = async () => {
  const res: any = await downloadModel({ mid });
  console.log("res: ", res);
  if (res.code && res.code != 200) {
    ElMessage({
      message: res.msg,
      type: "warning",
    });
    return;
  }
  try {
    downloadFile(res.data.download, res.data.fileInfo.filename);
  } catch (error) {
    console.error("模型下载出错: ", error);
  }
};

const handleReply = (val) => {
  console.log("val: ", val);
};
const sendVoice = (val) => {
  console.log('val: ', val);
}
</script>

<style lang="scss">
.download-btn {
  cursor: pointer;
  border: 1px solid transparent;
  background-color: rgb(25, 113, 194);
  color: rgb(255, 255, 255);
  padding: 0px 18px 0px 12px;
  border-radius: 4px;
  font-weight: 600;
  height: 36px;
  line-height: 1;
  font-size: 14px;

  display: flex;
  align-items: center;
}

.icon-btn {
  height: 36px;
  width: 36px;
  margin-right: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 2px;
}
</style>
