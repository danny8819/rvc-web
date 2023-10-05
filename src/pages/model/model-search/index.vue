<template>
  <div class="model-search p-9">
    <div class="w-full flex justify-center p-10">
      <el-input
        v-model="searchVal"
        placeholder="输入关键字搜索"
        :prefix-icon="Search"
        size="large"
        style="width: 480px"
      >
        <template #append>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </template>
      </el-input>
    </div>

    <div class="my-5 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
      <ModelSearchItem
        :data="{
          picture: 'https://picsum.photos/seed/picsum/800/572.webp',
          name: '原神 - 妮露DiffSinger模型',
          modelType: '[1,2,3,4]',
          types: [{ id: '1', type: '妮露' }],
          lookNum: 0,
          uploadDate: '222',
          avatar: 'https://picsum.photos/seed/picsum/30.webp',
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

<script lang="ts" setup name="ModelSearch">
import ModelSearchItem from './ModelSearchItem.vue';
import { Search } from '@element-plus/icons-vue';
import { searchModelTypeByName } from '@/api/modelType';

const { query } = useRoute();
const searchVal = ref(query.keyword || '');
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
  }).then(res => {
    console.log(res);
  });
};

watchEffect(() => {
  searchVal.value;
  handleSearch();
});
</script>

<style scoped lang="scss"></style>
