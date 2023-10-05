<template>
  <div class="model-home px-9">
    <ModelHomePoster />
    <!-- <el-card class="carousel-wrap mb-5">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            style="width: 100%; height: 100%"
            :src="'https://picsum.photos/1178/300.webp?random=' + item"
            fit="cover"
          />
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <div class="publish-btn">
      <SvgIcon name="upload" color="#fff" />
      <span class="ml-2">发布模型</span>
    </div> -->

    <div class="infinite-scroll-wrap">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <ModelItemCard2
          v-for="(item, index) in modelList"
          :key="index"
          @click="handleToDetail(item)"
          :data="item"
        />
        <!-- <ModelItemCard :data="modelList[0]" /> -->
      </div>
      <div class="w-full h-16" v-loading="loading" ref="loadingRef"></div>
    </div>
    <!-- <div class="model-home__pagination flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="15"
        :total="pagination.total"
        class="mt-4"
        v-model:current-page="pagination.page"
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup name="ModelHome">
// import ModelItemCard from './ModelItemCard.vue';
import ModelItemCard2 from './ModelItemCard2.vue';
import ModelHomePoster from './ModelHomePoster.vue';
import { modelList as modelListApi, watchModel } from '@/api/model';
import { useUserStore } from '@/store/user';
import { useIntersectionObserver } from '@vueuse/core';

const router = useRouter();
const userStore = useUserStore();

const loading = ref(false);
const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    modelList.value.push({
      picture: 'https://picsum.photos/1280/720.webp',
      name: Date.now().toString(),
      modelType: '[1,2,3,4]',
      types: [{ id: '1', type: '妮露' }],
      lookNum: 0,
      uploadDate: '222',
      avatar: '/img/user-placeholder.webp',
      nickname: 'RVC',
      mid: '22',
      uid: '222',
    });
  }, 1212);
};
type ModelList = {
  mid: string;
  uid: string;
  nickname: string;
  avatar: string;
  name: string;
  picture: string;
  modelType: string; // "[1,2,3,4]",
  types: Record<'id' | 'type', string>[];
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
    modelListApi({ page: pagination.page }).then(res => {
      console.log(res.data);
      modelList.value = res.data.pageModelVOList;
      pagination.total = res.data.total;
      pagination.page = res.data.page;
    });
  },
  {
    immediate: true,
  },
);

const handleToDetail = item => {
  // 浏览+1
  if (userStore.isLogin) {
    watchModel({ mid: item.mid }).then(res => {
      console.log('watchModel', res);
    });
  }
  router.push(`/model-detail/${item.mid}`);
};

onMounted(() => {});

const loadingRef = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  loadingRef,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
  },
);

watchEffect(() => {
  if (targetIsVisible.value) {
    load();
  }
});
</script>

<style lang="scss" scoped>
.model-home {
  :deep(.carousel-wrap .el-card__body) {
    padding: 0;
  }
  :deep(.el-loading-mask) {
    background-color: transparent;
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
</style>
