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
        @keyup="handleKeyup"
      />
    </div>
  </div>
  <div class="tags-input-foryou">
    <span>推荐:</span>
    <el-tag
      v-for="tag in foryouOptions"
      :key="tag"
      class="mx-1"
      :disable-transitions="false"
      @click="addForyouTag(tag)"
    >
      {{ tag.type }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import { getAllType, addModelType } from "@/api/modelType";
type TagsInputProps = {
  modelValue: string;
  // options: {
  //   id: string;
  //   type: string;
  // }[];
};
const props = withDefaults(defineProps<TagsInputProps>(), {});
const emit = defineEmits(["update:modelValue"]);
const inputValue = ref("");
const tags = ref<string[]>([]);

const foryouOptions = ref<{ id: string; type: string }[]>([]);

getAllType().then((res) => {
  console.log(res);
  foryouOptions.value = res.data.types;
});

watchEffect(() => {
  if (props.modelValue) {
    tags.value = props.modelValue.split(",");
  } else {
    tags.value = [];
  }
});

watch(
  () => tags.value,
  (newValue) => {
    emit("update:modelValue", newValue.join(","));
  }
);

const handleClose = (tag: string) => {
  tags.value.splice(tags.value.indexOf(tag), 1);
};

const handleKeyup = async (e) => {
  const type = inputValue.value;
  if (e.key === "Enter") {
    if (type && !tags.value.includes(type)) {
      try {
        await addModelType({ type: type });
        tags.value.push(type);
        inputValue.value = "";
      } catch (error) {}
    }
  }
  if (e.key === "Backspace" && type === "") {
    // 数值移除最后一位
    tags.value = tags.value.slice(0, tags.value.length - 1);
  }
};

const addForyouTag = (tag) => {
  if (!tags.value.includes(tag.type)) {
    tags.value.push(tag.type);
  }
};
</script>

<style scoped lang="scss">
.tags-input-container {
}
.tags-input {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px 12px;
  border-radius: 4px;
  box-shadow: rgb(220, 223, 230) 0px 0px 0px 1px inset;

  :deep(.el-input__wrapper) {
    box-shadow: none;
  }
}
</style>
