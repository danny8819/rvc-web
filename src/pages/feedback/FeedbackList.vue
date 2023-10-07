<template>
  <FeedbackControl v-model:filterType="filterType" :tags="tags" />
  <div class="feedback-list relative" v-loading="loading">
    <div
      class="feedback-list-item flex min-h-[100px]"
      v-for="(item, index) in list"
      :key="index"
      @click="handleClick(item)"
    >
      <div class="feedback-list-item__left">
        <p class="font-semibold">
          {{ item.title }}
        </p>
        <p class="feedback-list-item__left-content">
          {{ item.content }}
        </p>
        <div
          class="feedback-list-item__left-footer flex items-center pt-3 justify-between"
        >
          <div class="flex">
            <el-avatar :size="30" :src="item.avatar" class="mr-5"></el-avatar>
            <div class="flex items-center">
              <span class="font-medium">{{ item.username }}</span>
              <span class="text-xs ml-1">{{ item.createDayTime }}</span>
            </div>
          </div>
          <div>
            <span class="mdi mdi-message-processing-outline mr-2"></span>
            <span>{{ item.replyNum }}</span>
          </div>
        </div>
      </div>
      <div
        class="feedback-list-item__right cursor-pointer flex justify-center items-center"
        v-if="filterType === 'all'"
        @click="handleUpNum(item)"
      >
        <div
          class="feedback-list-item__right-content flex flex-col items-center"
        >
          <svg-icon
            name="arrow-up"
            class="false shrink-0 w-6 h-6 group-focus:-translate-y-2 group-hover:-translate-y-0.5 cursor-pointer main-transition"
          ></svg-icon>
          <p class="m-0">{{ item.upNum }}</p>
        </div>
      </div>
      <!-- 下拉菜单 编辑 删除 -->
      <div class="dropdown" v-else>
        <label tabindex="0" class="w-8 h-8 cursor-pointer mr-2 text-xl">
          <span>...</span>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
        >
          <li @click="handleEdit(item)"><a>编辑</a></li>
          <li @click="handleDelete(item)"><a>删除</a></li>
        </ul>
      </div>
    </div>

    <!-- 无数据展示 -->
    <div
      class="flex justify-center items-center h-10 w-full"
      v-show="!loading && list.length === 0"
    >
      <!-- <span class="loading loading-dots loading-lg"></span> -->
      <span>暂无反馈数据</span>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="编辑" width="50%">
    <el-form :model="form">
      <el-form-item label="标题">
        <el-input
          v-model="form.title"
          placeholder="请输入标题..."
          maxlength="50"
        />
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="form.content"
          :rows="6"
          type="textarea"
          placeholder="请输入反馈内容..."
          maxlength="300"
          show-word-limit
          class="font-16"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="flex justify-end">
        <button
          class="dashboard-secondary btn btn-sm mr-5"
          @click="dialogVisible = false"
        >
          取消
        </button>
        <button
          class="btn btn-secondary btn-sm text-white"
          @click="handleSubmit"
        >
          提交
        </button>
      </div>
    </template>
  </el-dialog>
  <FeedbackDetail v-model="dialogVisible2" :data="detailData" />
</template>

<script lang="ts" setup>
import FeedbackControl from '@/pages/feedback/FeedbackControl.vue';
import FeedbackDetail from '@/pages/feedback/feedback-detail/index.vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import {
  getFeedbackList,
  upFeedback,
  getMyFeedbackList,
  updateFeedback,
  deleteFeedback,
} from '@/api/feedback';

const props = defineProps<{
  tagId: number;
  tags: any;
}>();
const filterType = ref<'all' | 'my'>('all');
const list = ref([]);
const detailData = ref({});
let requestFlag = false;

const loading = ref(false);
async function getList(type?: string) {
  type = type || filterType.value;
  loading.value = true;
  if (type === 'my') {
    try {
      const res = await getMyFeedbackList({ page: 1 });
      list.value = res.data.pageList;
    } catch (error) {
      console.log('error: ', error);
    } finally {
      loading.value = false;
    }
  } else {
    try {
      const res = await getFeedbackList({
        isSolve: 0, // 0 未解决 1 已解决
        sortType: 'create_time',
        page: 1,
        tagId: props.tagId || null,
      });
      list.value = res.data.pageList;
    } catch (error) {
      console.log('error: ', error);
    } finally {
      loading.value = false;
    }
  }
}
watch([() => props.tagId, () => filterType.value], () => {
  getList(filterType.value);
});

const handleUpNum = (item: any) => {
  if (requestFlag) {
    return;
  }
  requestFlag = true;
  try {
    const { feedbackId } = item;
    upFeedback({ feedbackId }).then(res => {
      console.log(res);
      if (res.data.up) {
        item.upNum = item.upNum + 1;
      } else {
        alert('111');
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    requestFlag = false;
  }
};

const dialogVisible = ref(false);
const dialogVisible2 = ref(false);
const form = reactive({
  title: '',
  content: '',
  feedbackId: undefined,
  tagId: undefined,
});
const handleDelete = (item: any) => {
  console.log('item: ', item);
  ElMessageBox.confirm('确定删除该条反馈记录吗?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '再想想',
    type: 'warning',
  })
    .then(() => {
      deleteFeedback({ feedbackId: item.feedbackId }).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功',
        });
        getList();
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作已取消',
      });
    });
};
const handleEdit = (item: any) => {
  dialogVisible.value = true;
  form.title = item.title;
  form.content = item.content;
  form.feedbackId = item.feedbackId;
  form.tagId = props.tagId;
};
const handleSubmit = async () => {
  console.log(form);
  try {
    const res = await updateFeedback(form);
    console.log('res: ', res);
  } catch (error) {
    console.error(error);
  } finally {
    dialogVisible.value = false;
  }
};
const router = useRouter();
const handleClick = (item: any) => {
  detailData.value = item;
  dialogVisible2.value = true;
  // router.push({
  //   path: `/feedback-detail`,
  //   query: { feedbackId: item.feedbackId },
  // });
};
</script>

<style>
html {
  --feedback-item-hover: rgba(248, 249, 252, 0.9);
}
html.dark {
  --feedback-item-hover: rgb(36 40 55);
}
</style>

<style scoped lang="scss">
.feedback-list {
  margin-top: 16px;
  background-color: var(--el-fill-color-blank);
  border: 1px solid var(--el-border-color-light);
  border-radius: 8px;
  color: var(--el-text-color-regular);
  min-height: 100px;
  p {
    color: inherit;
  }

  .feedback-list-item {
    // min-height: 100px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--el-border-color-light);
    }
    &:hover {
      background-color: var(--feedback-item-hover);
    }
    .feedback-list-item__left {
      flex: 1;
      padding: 20px 12px 20px 20px;
      overflow: hidden;

      .feedback-list-item__left-content {
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        font-size: 14px;
        line-height: 1.5;
      }
      .feedback-list-item__left-footer {
        padding-top: 10px;
      }
    }
    .feedback-list-item__right {
      width: 63px;
      border-left: 1px solid var(--el-border-color-light);

      .feedback-list-item__right-content {
        svg {
          width: 24px;
          color: var(--el-text-color-regular);
          transition: all 0.5s;
        }

        &:hover svg {
          transform: translateY(-5px);
        }
      }
    }
  }
}
</style>
