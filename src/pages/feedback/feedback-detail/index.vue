<template>
  <Teleport to="body" v-if="false">
    <div
      class="z-[3000] absolute inset-0 sm:flex sm:justify-center w-full sm:pt-12 flex-col"
    >
      <!-- 背景 -->
      <div
        class="absolute inset-0 bg-white dark:bg-[#1E222E] sm:bg-opacity-40 dark:sm:bg-opacity-40 sm:bg-gray-900/20 dark:sm:bg-gray-950 backdrop-filter backdrop-blur-sm"
        id="headlessui-dialog-overlay-:r1q:"
      ></div>
      <!-- 关闭按钮 -->
      <div class="block relative w-full h-8 text-2xl" @click="$router.back()">
        <div
          class="w-10 h-10 flex items-center justify-center p-1.5 border absolute shadow-none -top-6 right-1 md:right-4 dropdown-background cursor-pointer rounded-lg bg-white/40 hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-700/70 main-transition"
        >
          <span class="mdi mdi-close"></span>
        </div>
      </div>
      <!-- main -->
      <div
        class="m-auto relative z-50 w-full max-w-5xl px-6 sm:px-8 py-4 sm:py-6 bg-white dark:bg-[#1E222E] dark:shadow undefined -mt-px sm:rounded-lg opacity-100 scale-100"
      >
        <div style="max-height: 80vh; overflow-y: scroll"></div>
      </div>
    </div>
  </Teleport>

  <el-dialog
    title="详情"
    v-model="dialogVisible"
    style="width: 50%; max-width: 600px"
  >
    <div class="mb-2">
      <h1>{{ data.title }}</h1>
      <p>{{ data.content }}</p>
    </div>
    <el-form :model="form">
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

    <div class="flex justify-end">
      <button class="btn btn-secondary btn-sm text-white" @click="handleReply">
        回复
      </button>
    </div>

    <ReplyItem v-for="(item, index) in pageList" :key="index" :data="item" />
  </el-dialog>
</template>

<script lang="ts" setup>
import ReplyItem from '@/pages/feedback/feedback-detail/ReplyItem.vue';
import { getReplyList, addReply } from '@/api/feedback';
import ReplyInputCard from '@/components/ReplyInputCard.vue';
import { ElMessage } from 'element-plus';
const props = defineProps<{
  modelValue: boolean;
  data: any;
}>();
const emit = defineEmits(['update:modelValue']);
const dialogVisible = ref(false);
const form = reactive({
  content: '',
});

watch(
  () => props.modelValue,
  () => {
    dialogVisible.value = props.modelValue;
    if (props.modelValue) {
      form.content = '';
      refreshData();
    } else {
      pageList.value = [];
    }
  },
);
watch(
  () => dialogVisible.value,
  () => {
    emit('update:modelValue', dialogVisible.value);
  },
);

// const route = useRoute();
const pageList = ref<
  {
    feedbackId: string;
    rid: string;
    uid: string;
    nickname: string;
    content: string;
    createTime: string;
    avatar: string;
  }[]
>([
  // {
  //   feedbackId: '342ff873-d76a-494e-8edb-bb172067812d',
  //   rid: '1557d45d-7aff-42f4-bbee-6be5fff72e15',
  //   uid: '898bd063-6c16-49e9-8e06-7ab3b1ed289e',
  //   avatar:
  //     'https://timemachinelab.oss-cn-hangzhou.aliyuncs.com/RVC/user/avatar/0f3d6ba7-3860-4164-bf3d-c9cd724522f3.png',
  //   nickname: 'Genius',
  //   content: 'in ullamco',
  //   createTime: '2023-10-06T20:28:48',
  // },
]);

function refreshData() {
  getReplyList({
    feedbackId: props.data.feedbackId,
    page: 1,
  }).then(res => {
    pageList.value = res.data.pageList;
  });
}
const handleReply = () => {
  if (!form.content) {
    return;
  }
  addReply({
    feedbackId: props.data.feedbackId,
    content: form.content,
  }).then(res => {
    if (res.code === '200') {
      ElMessage({
        type: 'success',
        message: '回复成功',
      });
      refreshData();
    }
  });
};
</script>

<style scoped lang="scss"></style>
