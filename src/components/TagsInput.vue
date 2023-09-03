<template>
  <div class="tags-input" @click.prevent="inputRef.focus()">
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
        {{ tag.type }}
      </el-tag>
    </div>
    <div>
      <el-input
        ref="inputRef"
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
  modelValue: { id: number | string; type: string }[];
  // options: {
  //   id: string;
  //   type: string;
  // }[];
};
const props = withDefaults(defineProps<TagsInputProps>(), {});
const emit = defineEmits(["update:modelValue"]);
const inputValue = ref("");
const inputRef = ref();

const foryouOptions = ref<{ id: string; type: string }[]>([]);

getAllType().then((res) => {
  foryouOptions.value = res.data.types;
});

const tags = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const handleClose = (tag) => {
  tags.value = tags.value.filter((item) => item.id != tag.id);
};

const handleKeyup = async (e) => {
  const _inputVal = inputValue.value;
  if (e.key === "Enter") {
    const _f = foryouOptions.value.find((item) => item.type == _inputVal);
    if (_f) {
      tags.value.push(_f);
      return;
    }
    if (_inputVal && !tags.value.find((f) => f.type == _inputVal)) {
      try {
        const res: any = await addModelType({ type: _inputVal });
        if (res.code == 200) {
          const newTag = {
            id: res.data.type.id + "",
            type: res.data.type.type,
          };
          foryouOptions.value.push(newTag);
          tags.value.push(newTag);
          inputValue.value = "";
        }
      } catch (error) {}
    }
  }
  if (e.key === "Backspace" && _inputVal === "") {
    // 数值移除最后一位
    tags.value = tags.value.slice(0, tags.value.length - 1);
  }
};

const addForyouTag = (tag) => {
  let _f = tags.value.find((item) => item.type == tag.type);
  if (!_f) {
    tags.value = [...tags.value, tag];
  }
  _f = null;
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
  box-shadow: 0px 0px 0px 1px var(--el-border-color) inset;

  :deep(.el-input__wrapper) {
    box-shadow: none;
  }
}
</style>
