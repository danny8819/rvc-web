<template>
  <div class="container-1200">
    <el-row class="mx-5 my-5" :gutter="20">
      <el-col :span="18">
        <el-card>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <el-image
                style="width: 100%; height: 100%"
                src="https://fj.zhjlfx.cn/aibbs/forum/202303/15/204316lr8wvjths8im441m.png"
                fit="contain"
              />
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card
          class="rounded-lg h-100 d-flex flex-column justify-space-between align-center"
        >
          <el-button @click="$router.push('/model-publish')">
            发布模型
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <div class="d-flex flex-wrap">
      <ModelItemCard
        v-for="(item, index) in modelList"
        :key="index"
        @click="handleToDetail(item)"
        :data="item"
      />
    </div>

    <div class="model-home__pagination d-flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="15"
        :total="pagination.total"
        class="mt-4"
        v-model:current-page="pagination.page"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModelItemCard from "@/pages/model/comps/ModelItemCard.vue";
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
  // {
  //   picture:
  //     "https://fj.zhjlfx.cn/aibbs/forum/202303/15/204316lr8wvjths8im441m.png",
  //   name: "原神 - 妮露DiffSinger模型",
  //   modelType: "[1,2,3,4]",
  //   types: [{ id: "1", type: "妮露" }],
  //   lookNum: 0,
  //   uploadDate: "222",
  //   avatar: "https://uc.zhjlfx.cn/avatar.php?uid=2&size=middle",
  //   nickname: "红血球AE3803",
  //   mid: "22",
  //   uid: "222",
  // },
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
</script>

<style lang="scss"></style>
