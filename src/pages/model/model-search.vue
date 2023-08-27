<template>
  <div class="model-search">
    <el-card class="model-search-header my-5 mx-10 d-flex justify-center">
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
    </el-card>

    <div class="model-search-content my-5 mx-10 d-flex flex-wrap">
      <ModelItemCard
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
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModelItemCard from "@/pages/model/comps/ModelItemCard.vue";
import { Search } from "@element-plus/icons-vue";
import { searchModelTypeByName } from "@/api/modelType";

const { query } = useRoute();
console.log("useRoute(): ", useRoute());
const searchVal = ref(query.keyword || "");

const handleSearch = () => {
  console.log("handleSearch: ");
  searchModelTypeByName({
    typeName: searchVal.value as string,
  }).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped lang="scss"></style>
