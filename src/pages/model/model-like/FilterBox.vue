<template>
  <div class="model-filter-wrap">
    <div class="model-tabs-wrap">
      <el-dropdown trigger="click">
        <div class="model-1squ83a">
          <div class="model-1ls9xs1">Highest Rated</div>
          <SvgIcon name="arrow-down" size="24" style="color: inherit"></SvgIcon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Highest Rated</el-dropdown-item>
            <el-dropdown-item>Most Downloaded</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="model-filter__right">
      <!-- 叹号 -->
      <button
        class="model-1a8qwgc"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="model-rdf-dropdown"
        id="model-rdf-target"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-exclamation-mark"
        >
          <path d="M12 19v.01"></path>
          <path d="M12 15v-10"></path>
        </svg>
      </button>
      <!-- 时间过滤 -->
      <el-dropdown trigger="click">
        <div class="model-1squ83a">
          <div class="model-1ls9xs1">Month</div>
          <SvgIcon name="arrow-down" size="24" style="color: inherit"></SvgIcon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>DAY</el-dropdown-item>
            <el-dropdown-item>WEEK</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 过滤器 -->
      <div v-if="false" class="model-gc2cx1" id="model-rdi-target">
        <button class="model-lzd6x3" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-filter"
          >
            <path
              d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
            ></path>
          </svg>
          <span>
            <SvgIcon
              name="arrow-down"
              size="24"
              style="color: inherit"
            ></SvgIcon>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style scoped lang="scss">
.model-filter-wrap {
  box-sizing: border-box;

  display: flex;

  flex-direction: row;

  align-items: center;

  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

  color: var(--el-text-color-regular);
}

.model-filter-wrap > * {
  box-sizing: border-box;

  flex-grow: 0;
}
.model-1squ83a {
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;

  align-items: center;

  justify-content: flex-start;
  gap: 6px;
  cursor: pointer;
}
.model-1ls9xs1 {
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  font-size: inherit;
  line-height: 1.55;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
}
.model-filter__right {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 4px;

  .model-8y0mzi {
    -webkit-tap-highlight-color: transparent;
    color: white;
    font-size: 14px;
    line-height: 1.55;
    text-decoration: none;
    font-weight: 500;
  }
}
.model-1a8qwgc {
  -webkit-tap-highlight-color: transparent;

  cursor: pointer;
  border: 0;
  padding: 0;

  appearance: none;
  font-size: 16px;
  background-color: transparent;
  text-align: left;
  // color: #c1c2c5;

  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  background-color: var(--el-color-primary);

  // color: #fff;
  position: relative;
  height: 22px;
  min-height: 22px;
  width: 22px;
  min-width: 22px;
  border-radius: 32px;
  padding: 0;
  line-height: 1;

  display: flex;

  align-items: center;

  justify-content: center;
  margin-right: 4px;
}
.model-1a8qwgc:focus {
  outline-offset: 2px;
  outline: 2px solid #1c7ed6;
}

.model-1a8qwgc:focus:not(:focus-visible) {
  outline: none;
}

.model-1a8qwgc:active {
  transform: translateY(1px);
}

.model-1a8qwgc:disabled {
  color: #868e96;
  cursor: not-allowed;
  background-color: #343a40;
  border-color: #343a40;
  background-image: none;
  pointer-events: none;
}
.model-1a8qwgc:disabled:active {
  transform: none;
}
.model-lzd6x3 {
  -webkit-tap-highlight-color: transparent;

  cursor: pointer;
  appearance: none;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  background-color: transparent;
  // color: rgb(193, 194, 197);
  position: relative;
  height: 28px;
  min-height: 28px;
  min-width: 28px;
  border-radius: 4px;
  padding: 0px;
  line-height: 1;
  display: flex;

  align-items: center;

  justify-content: center;
  width: 40px;
}
</style>
