<template>
  <div class="model-search">
    <div class="model-search-header">
      <el-input
        v-model="searchVal"
        placeholder="输入关键字搜索"
        :prefix-icon="Search"
        size="large"
        style="width: 480px"
      >
        <template #append>
          <el-button type="primary" @click="handleSearch"> 搜索 </el-button>
        </template></el-input
      >
    </div>

    <div
      class="model-search-content my-5 mx-10"
      :style="{
        '--grid-row-count': Math.ceil(22 / 5),
      }"
    >
      <ModelSearchItem
        :data="{
          picture:
            'https://fj.zhjlfx.cn/aibbs/forum/202303/15/204316lr8wvjths8im441m.png',
          name: '原神 - 妮露DiffSinger模型',
          modelType: '[1,2,3,4]',
          types: [{ id: '1', type: '妮露' }],
          lookNum: 0,
          uploadDate: '222',
          avatar: 'https://uc.zhjlfx.cn/avatar.php?uid=2&size=middle',
          nickname: '红血球AE3803',
          mid: '22',
          uid: '222',
        }"
        v-for="(a, index) in 22"
        :key="index"
      />
    </div>

    <div class="flex justify-center">
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
import ModelSearchItem from "./ModelSearchItem.vue";
import { Search } from "@element-plus/icons-vue";
import { searchModelTypeByName } from "@/api/modelType";

const { query } = useRoute();
const searchVal = ref(query.keyword || "");
const pagination = reactive({
  page: 1,
  total: 0,
});
watch([() => pagination.page], () => {
  // modelListApi({ page: pagination.page }).then((res) => {
  //   console.log(res.data);
  //   modelList.value = res.data.pageModelVOList;
  //   pagination.total = res.data.total;
  //   pagination.page = res.data.page;
  // });
});
const handleSearch = () => {
  searchModelTypeByName({
    type: searchVal.value as string,
  }).then((res) => {
    console.log(res);
  });
};

watchEffect(() => {
  searchVal.value;
  handleSearch();
});
</script>

<style scoped lang="scss">
.model-search {
  min-width: 1100px;
}
.model-search-header {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.model-search-content {
  --grid-col-count: 5;
  display: grid;
  grid-template: repeat(var(--grid-row-count), 1fr) / repeat(
      var(--grid-col-count),
      1fr
    );
  gap: 20px 10px;
}
@media screen and (max-width: 1200px) {
  .model-search-content {
    --grid-col-count: 4;
  }
}
</style>
