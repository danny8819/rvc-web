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
import { useDark, useToggle } from "@vueuse/core";
import { Moon, Sunny } from "@element-plus/icons-vue";

const isDark = useDark();
const switchVal = ref(isDark.value);
const toggleDark = useToggle(isDark);

watch(
  () => switchVal.value,
  (val) => {
    toggleDark();
  }
);
</script>

<style scoped lang="scss">
:deep(.el-switch__action .el-icon) {
  color: #606266;
}
</style>
