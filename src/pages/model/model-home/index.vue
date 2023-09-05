<template>
  <div class="model-home container-1200">
    <el-card class="carousel-wrap mb-5">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            style="width: 100%; height: 100%"
            src="https://img0.baidu.com/it/u=3604177901,3426946885&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
            fit="cover"
          />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="h-100 mb-5">
      <div class="d-flex justify-end">
        <div class="publish-btn" @click="$router.push('/model-publish')">
          <SvgIcon name="upload" color="#fff" />
          <span class="ml-2">发布模型</span>
        </div>
      </div>
    </el-card>

    <div class="model-home-list">
      <template v-for="(i, ff) in 11" :key="ff">
        <ModelItemCard
          v-for="(item, index) in modelList"
          :key="index"
          @click="handleToDetail(item)"
          :data="item"
        />
      </template>
    </div>

    <div class="model-home__pagination d-flex justify-center">
      <div class="pt-10">加载中。。。</div>
      <!-- <el-pagination
        background
        layout="prev, pager, next"
        :page-size="15"
        :total="pagination.total"
        class="mt-4"
        v-model:current-page="pagination.page"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup name="ModelHome">
import ModelItemCard from "./ModelItemCard2.vue";
import { modelList as modelListApi, watchModel } from "@/api/model";
import { useUserStore } from "@/store/user";

const router = useRouter();
const userStore = useUserStore();

type ModelList = {
  mid: string;
  uid: string;
  nickname: string;
  avatar: string;
  name: string;
  picture: string;
  modelType: string; // "[1,2,3,4]",
  types: Record<"id" | "type", string>[];
  lookNum: number;
  uploadDate: string;
}[];
const modelList = ref<ModelList>([
  {
    picture:
      "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3c451176-a098-4191-907a-e898bfdf673b/width=2048/ComfyUI_00747_.jpeg",
    name: "原神 - 妮露DiffSinger模型",
    modelType: "[1,2,3,4]",
    types: [{ id: "1", type: "妮露" }],
    lookNum: 0,
    uploadDate: "222",
    avatar: "/img/user-placeholder.webp",
    nickname: "RVC",
    mid: "22",
    uid: "222",
  },
]);
const pagination = reactive({
  page: 1,
  total: 0,
});

watch(
  [() => pagination.page],
  () => {
    modelListApi({ page: pagination.page }).then((res) => {
      console.log(res.data);
      modelList.value = res.data.pageModelVOList;
      pagination.total = res.data.total;
      pagination.page = res.data.page;
    });
  },
  {
    immediate: true,
  }
);

const handleToDetail = (item) => {
  // 浏览+1
  if (userStore.isLogin) {
    watchModel({ mid: item.mid }).then((res) => {
      console.log("watchModel", res);
    });
  }
  router.push(`/model-detail/${item.mid}`);
};

onMounted(() => {
  window.addEventListener("scroll", function () {
    console.log(window.innerHeight, window.scrollY, document.body.offsetHeight);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    }
  });
});
</script>

<style lang="scss" scoped>
.model-home {
  :deep(.carousel-wrap .el-card__body) {
    padding: 0;
  }
}
.publish-btn {
  width: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  min-width: 90px;
  height: 40px;
  border-radius: 8px;

  border: var(--el-border);
  background-color: var(--el-button-bg-color);
  color: var(--el-button-text-color);

  text-align: center;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  padding: 0 10px;
}

.model-home-list {
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
}
</style>
