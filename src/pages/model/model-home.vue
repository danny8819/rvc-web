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
    <div class="brick__container d-flex flex-wrap">
      <div
        class="brick"
        v-for="(item, index) in modelList"
        :key="index"
        @click="handleToDetail(item)"
      >
        <div class="brick__inner">
          <div class="brick__image">
            <div
              class="brick__image-inner"
              :style="`background-image: url(${item.picture})`"
            ></div>
          </div>
          <div class="brick__info">
            <div class="brick__info-title">
              {{ item.name }}
              <!-- <div class="brick__info-subtitle">666</div> -->
            </div>
            <el-divider class="my-2" />

            <div class="brick__info-tags">
              <el-tag
                v-for="(tag, j) in item.types"
                :key="j"
                class="mr-2 mb-2"
                >{{ tag.type }}</el-tag
              >
            </div>
            <div class="brick__info-footer">
              <div class="brick__info-userInfo d-flex align-center">
                <el-avatar :size="30" :src="item.avatar"> </el-avatar>
                <span class="ml-2">{{ item.nickname }}</span>
              </div>
              <div
                class="brick__info-watch d-flex justify-space-around align-center"
              >
                <SvgIcon name="liulan"></SvgIcon>
                {{ item.lookNum }}
              </div>
            </div>
          </div>
        </div>
      </div>
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
  types: { id: string; type: string }[];
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

<style lang="scss">
.brick {
  width: 33%;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 50px;

  .brick__inner {
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    background-color: $white;
    display: flex;
    flex-direction: column;

    transition: all 0.2s ease-out;
    box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
    &:hover {
      transform: translateY(2px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);

      .brick__image-inner {
        transform: scale(1.1);
      }
    }

    .brick__image {
      padding-top: 66%;
      position: relative;

      .brick__image-inner {
        transition: all 0.3s;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: contain;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-position: center center;
      }
    }

    .brick__info {
      padding: 15px;
      .brick__info-title {
        font-size: 24px;
        font-weight: 600;
        padding: 19px 20px px 13px;
        // min-height: 110px;
        margin-bottom: 7px;

        .brick__info-subtitle {
          font-size: 16px;
          line-height: 22px;
          color: #435b71;
          font-weight: 400;
        }
      }

      .brick__info-tags {
        // white-space: nowrap;
        min-height: 64px;
      }
      .brick__info-footer {
        display: flex;
        justify-content: space-between;
        .brick__info-watch {
          // float: right;
        }
      }
    }
  }
}
</style>
