<template>
  <div class="feedback-control flex flex-wrap justify-between gap-3 mt-4">
    <div class="flex gap-3">
      <button class="btn btn-sm dashboard-secondary btn-primary">
        <SvgIcon name="clock" class="mr-1.5" size="14" />
        最新
      </button>

      <button class="dashboard-secondary btn btn-sm">
        <SvgIcon name="trend" class="mr-1.5" size="14" />
        热门
      </button>
      <button class="dashboard-secondary btn btn-sm">
        <SvgIcon name="fire" class="mr-1.5" size="14" />
        趋势
      </button>
    </div>
    <div class="flex items-center gap-3">
      <div class="dropdown">
        <button
          class="dashboard-secondary btn btn-sm"
          type="button"
          data-state="closed"
          tabindex="0"
        >
          <span class="inline-flex items-center">
            <SvgIcon name="filter" class="mr-1.5" size="14" />
            {{ filterType === 'all' ? '全部' : '我发布的' }}
          </span>
        </button>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40"
          data-type="dropdown"
        >
          <li @click="emit('update:filterType', 'all')">
            <a>全部</a>
          </li>
          <li @click="emit('update:filterType', 'my')">
            <a>我发布的</a>
          </li>
        </ul>
      </div>

      <button class="dashboard-secondary btn btn-sm">
        <SvgIcon name="search" class="mr-1.5" size="14" />
        <span class="hidden sm:block">Search</span>
      </button>
      <div class="hidden md:block">
        <button
          class="btn btn-secondary btn-sm text-white"
          @click="dialogVisible = true"
        >
          <SvgIcon
            name="plus-circle"
            size="14"
            class="shrink-0 w-3.5 h-3.5 mr-1.5 opacity-70 lg:block"
          />
          创建
        </button>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="创建反馈" width="50%">
      <el-form :model="form" ref="addFormRef" :rules="rules">
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="form.title"
            placeholder="请输入标题..."
            maxlength="50"
          />
        </el-form-item>
        <el-form-item label="板块" prop="tagId">
          <el-radio-group v-model="form.tagId">
            <el-radio-button
              v-for="(item, index) in tags"
              :key="index"
              :label="item.tag"
            />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input
            v-model="form.content"
            :rows="6"
            type="textarea"
            placeholder="请输入反馈内容..."
            maxlength="300"
            show-word-limit
            class="font-16"
          />
          <!-- <RichEdit v-model="form.content" /> -->
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
  </div>
</template>

<script lang="ts" setup>
import RichEdit from '@/pages/feedback/RichEdit.vue';
import { getFeedbackTags, addFeedback } from '@/api/feedback';
import { ElMessage } from 'element-plus';

const props = defineProps<{
  filterType: 'all' | 'my';
  tags: any[];
}>();
const emit = defineEmits(['update:filterType', 'addFinish']);
const dropdownRef = ref(null);
const dialogVisible = ref(false);
const addFormRef = ref(null);
const form = reactive({
  tagId: '',
  title: '',
  content: '',
});
const rules = {
  title: [
    {
      required: true,
      message: '请输入标题',
      trigger: 'blur',
    },
  ],
  content: [
    {
      required: true,
      message: '请输入内容',
    },
  ],
  tagId: [
    {
      required: true,
      message: '请选择板块',
    },
  ],
};
const handleSubmit = async () => {
  addFormRef.value.validate(async valid => {
    if (!valid) {
      return;
    }
    const params = {
      ...form,
      tagId: tagName2Id(form.tagId),
    };
    try {
      const res = await addFeedback(params);
      if (res.data.add) {
        ElMessage({
          type: 'success',
          message: '创建成功',
        });
        emit('addFinish');
      }
    } catch (error) {
      console.log(error);
    } finally {
      dialogVisible.value = false;
      addFormRef.value.resetFields();
    }
  });
};
const tagName2Id = tag => {
  return props.tags.find((item: any) => item.tag === tag).id;
};
</script>

<style scoped lang="scss">
.dashboard-secondary {
  border: 1px solid var(--el-border-color-light);
  svg {
    height: 1rem;
    width: 1rem;
    color: rgba(93, 104, 144, 0.6);
  }
  &:focus {
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
}
.branded-btn {
  color: rgb(255 255 255 / 1);
}
button {
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;

  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000),
    0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
