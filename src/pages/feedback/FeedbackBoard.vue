<template>
  <div class="">
    <p class="text-sm font-medium text-gray-500 dark:text-gray-100">板块</p>
    <div class="mt-2 space-y-0.5">
      <div
        class="feedback-tag flex items-center"
        :class="{
          isActive: tagId === item.id,
        }"
        v-for="(item, index) in tags"
        :key="index"
        @click="emit('update:modelValue', item.id)"
      >
        <button
          class="flex items-center dashboard-secondary w-full px-2 py-1.5 dark:text-gray-200 space-x-2 text-sm font-medium text-gray-500"
        >
          <div class="pr-1 w-4 mr-1.5" v-if="index == 0">
            <svg-icon name="chat" size="16"></svg-icon>
          
          </div>
          <div class="pr-1 w-4 mr-1.5" v-if="index == 1">💡</div>
          <div class="pr-1 w-4 mr-1.5" v-if="index == 2">🪲</div>
          {{ item.tag }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getFeedbackTags, addFeedback } from '@/api/feedback';

const props = defineProps<{ modelValue: number }>();
const emit = defineEmits(['update:modelValue']);

const tags = ref([]);
const tagId = computed({
  get: () => props.modelValue,
  set: val => {
    emit('update:modelValue', val);
  },
});

getFeedbackTags().then(res => {
  tags.value = res.data.tags;
  emit('update:modelValue', tags.value[0].id);
});
</script>

<style scoped lang="scss">
.feedback-tag.isActive {
  background-color: var(--el-color-primary);
}
</style>
