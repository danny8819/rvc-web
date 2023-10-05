<template>
  <el-switch
    v-model="switchVal"
    style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #f2f2f2"
    :active-action-icon="Moon"
    :inactive-action-icon="Sunny"
    size="large"
  />
</template>

<script lang="ts" setup>
import { useDark, useToggle, useColorMode } from '@vueuse/core';
import { Moon, Sunny } from '@element-plus/icons-vue';

const isDark = useDark();
const mode = useColorMode({
  attribute: 'data-theme',
});
const switchVal = ref(isDark.value);
const toggleDark = useToggle(isDark);

// 默认黑色 后续根据用户登录信息设置
if (!isDark.value) {
  toggleDark();
}

watch(
  () => switchVal.value,
  val => {
    toggleDark();
    console.log(mode);
  },
);
</script>

<style scoped lang="scss">
:deep(.el-switch__action .el-icon) {
  color: #606266;
}
</style>
