<template>
  <div class="container-1200">
    <el-row :gutter="20">
      <el-col :span="17">
        <el-card class="model-detail__info-container">
          <div class="model-detail__info-content position-relative">
            <el-image
              class="position-absolute top-0 w-100 h-100"
              :src="modelDetail?.picture"
              fit="contain"
            />
          </div>

          <el-divider class="my-2" />

          <div class="model-detail__info-footer pa-5">
            <div class="model-detail__info-title mb-2">
              <h2>{{ modelDetail?.name }}</h2>
              <h3>{{ modelDetail?.description }}</h3>
            </div>
            <div class="model-detail__info-tags mb-2">
              <el-tag
                v-for="(tag, index) in modelDetail?.types"
                :key="index"
                class="mr-5"
                >{{ tag.type }}</el-tag
              >
            </div>

            <div class="model-detail__info-data d-flex justify-end">
              <span class="mr-2 d-flex align-center">
                <SvgIcon
                  name="dianzanpc"
                  @click="handleLike"
                  size="25"
                  :color="state.isLike ? 'red' : undefined"
                />
                <span class="ml-1">{{ modelDetail?.likeNum }}</span>
              </span>

              <span class="mr-2 d-flex align-center">
                <SvgIcon
                  name="shoucang"
                  @click="handleCollect"
                  size="25"
                  :color="state.isLike ? 'red' : undefined"
                />
                <span class="ml-1">{{ modelDetail?.collectionNum }}</span>
              </span>

              <span class="mr-2 d-flex align-center">
                <SvgIcon name="watch" size="25" />
                <span class="ml-1">
                  {{ modelDetail?.lookNum }}
                </span></span
              >

              <span
                class="mr-2 cursor-pointer d-flex align-center"
                @click="handleDownload"
              >
                <el-icon size="25"><Download /></el-icon>
              </span>
            </div>
          </div>
        </el-card>

        <ReplyInputCard class="mb-5" />

        <el-card class="mb-1">
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
        <el-card class="mb-5">
          <el-descriptions title="信息" :column="1" border>
            <el-descriptions-item
              label="模型类型:"
              label-align="right"
              align="center"
              width="30px"
              >{{ modelDetail?.aiType }}</el-descriptions-item
            >
            <el-descriptions-item
              label="模型描述:"
              label-align="right"
              align="center"
              >{{ modelDetail?.description }}</el-descriptions-item
            >
            <el-descriptions-item
              label="注意事项:"
              label-align="right"
              align="center"
              >{{ modelDetail?.note }}</el-descriptions-item
            >
          </el-descriptions>
        </el-card>

        <el-card>
          <div class="d-flex justify-center">
            <el-avatar
              :size="90"
              :src="'/img/user-placeholder.webp'"
             
            ></el-avatar>
          </div>
          <div class="ma-2 d-flex justify-center">username</div>
          <div></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {
  getModelInfo,
  collectModel,
  likeModel,
  unlikeModel,
  unCollectModel,
  downloadModel,
} from "@/api/model";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import ReplyInputCard from "@/components/ReplyInputCard.vue";
const modelDetail = ref<ModelDetail>();
const route = useRoute();
const { mid } = route.params;

const state = reactive({
  isCollect: false,
  isLike: false,
});

if (mid) {
  getModelInfo({ mid }).then((res) => {
    console.log(res.data);
    state.isCollect = res.data.isCollect || false;
    state.isLike = res.data.isLike || false;
    modelDetail.value = res.data.model;
  });
}

const handleCollect = () => {
  const _api = state.isCollect ? unCollectModel : collectModel;
  _api({ mid }).then((res) => {
    console.log(res);
    let msg =
      res.code == 200
        ? state.isCollect
          ? "取消收藏成功"
          : "收藏成功"
        : res.msg;
    ElMessage({
      message: msg,
      type: "success",
    });
    state.isCollect = !state.isCollect;
  });
};
const handleLike = () => {
  const _api = state.isLike ? unlikeModel : likeModel;
  _api({ mid }).then((res) => {
    console.log("res: ", res);
    ElMessage({
      message: res.msg,
      type: "success",
    });
  });
};

const handleDownload = () => {
  downloadModel({ mid }).then((res) => {
    if (res.code != 200) {
      ElMessage({
        message: res.msg,
        type: "warning",
      });
    }
  });
};
</script>

<style lang="scss">
.model-detail__info-content {
  padding-top: 60%;
  width: 100%;
}

.model-detail__info-footer {
  overflow: hidden;
}
</style>
