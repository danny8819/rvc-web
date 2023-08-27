<template>
  <div class="container-1200">
    <el-row class="mx-5 my-5" :gutter="20">
      <el-col :span="18"> <el-card class="rounded-lg"> </el-card></el-col>

      <el-col :span="6">
        <el-card class="rounded-lg">
          <el-button @click="$router.push('/model/publish')">
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
        :total="50"
        class="mt-4"
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
const modelList = ref<ModelList>([]);
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
  router.push(`/model/detail/${item.mid}`);
};
</script>

<style lang="scss"></style>
