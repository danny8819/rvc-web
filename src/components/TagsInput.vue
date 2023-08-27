<template>
  <div class="tags-input">
    <div class="tags-container">
      <el-tag
        v-for="tag in tags"
        :key="tag"
        class="mx-1"
        closable
        :disable-transitions="false"
        @click="handleClose(tag)"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
    </div>
    <div>
      <el-input
        v-model="inputValue"
        class="ml-1 w-20"
        placeholder="按回车键Enter创建标签"
        @keyup.enter="handleInputConfirm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string[];
  }>(),
  {
    modelValue: () => [],
  }
);
const emit = defineEmits(["update:modelValue"]);
const inputValue = ref("");
const tags = ref<string[]>([]);

watchEffect(() => {
  tags.value = props.modelValue;
});

watch(
  () => tags.value,
  (newValue) => {
    emit("update:modelValue", newValue);
  }
);

const handleClose = (tag: string) => {
  tags.value.splice(tags.value.indexOf(tag), 1);
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    tags.value.push(inputValue.value);
  }
  inputValue.value = "";
};
</script>

<style scoped lang="scss">
.tags-input {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px 12px;
  border-radius: 4px;
  box-shadow: rgb(220, 223, 230) 0px 0px 0px 1px inset;

  ::v-deep .el-input__wrapper {
    box-shadow: none;
  }
}
</style>
