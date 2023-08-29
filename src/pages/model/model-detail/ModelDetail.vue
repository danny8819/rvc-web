<template>
  <el-card shadow="never" class="mb-5">
    <el-collapse model-value="1">
      <el-collapse-item title="信息" name="1">
        <el-descriptions title="" :column="1" border>
          <el-descriptions-item
            label="模型类型:"
            label-align="right"
            align="center"
            width="190"
            >{{ data?.aiType }}</el-descriptions-item
          >
          <el-descriptions-item
            label="模型描述:"
            label-align="right"
            align="center"
            >{{ data?.description }}</el-descriptions-item
          >
          <el-descriptions-item
            label="注意事项:"
            label-align="right"
            align="center"
            >{{ data?.note }}</el-descriptions-item
          >
        </el-descriptions>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" setup>

defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss"></style>
