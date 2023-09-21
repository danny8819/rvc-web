<template>
  <div class="tags-scroll-wrap">
    <div class="scroll-wrap" style="overflow: scroll" ref="el">
      <div style="min-width: 100%; display: table">
        <div class="arrow-left" v-show="!arrivedState.left" @click="x -= 66">
          <button class="" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-chevron-left"
            >
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </button>
        </div>
        <div class="arrow-right" v-show="!arrivedState.right" @click="x += 66">
          <button class="" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-chevron-right"
            >
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </button>
        </div>
        <div class="tags-scroll-tag">
          <button
            :class="activeIdx === index ? 'active-btn' : 'normal-btn'"
            v-for="(item, index) in tagList"
            :key="index"
            @click="activeIdx = index"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScroll } from '@vueuse/core';
const el = ref<HTMLElement | null>(null);
const { x, arrivedState } = useScroll(el);
const activeIdx = ref(0);
const tagList = ref([
  'All',
  '原神',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
  'character',
]);
</script>

<style scoped lang="scss">
.tags-scroll-wrap {
  overflow: hidden;
  position: relative;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}
.scroll-wrap {
  scrollbar-width: none;
  color: var(--el-text-color-regular);
}
.scroll-wrap::-webkit-scrollbar {
  display: none;
}
.arrow-left {
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 24px;
  z-index: 12;
  background-image: linear-gradient(
    90deg,
    rgb(26, 27, 30) 0%,
    transparent 100%
  );
}
.arrow-right {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 24px;
  z-index: 12;
  background-image: linear-gradient(
    270deg,
    rgb(26, 27, 30) 0%,
    transparent 100%
  );
}
.tags-scroll-tag {
  box-sizing: border-box;
  display: flex;
  flex-flow: row;

  align-items: center;

  justify-content: flex-start;
  gap: 8px;
}
.active-btn {
  padding: 0px 8px;
  appearance: none;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  height: 26px;

  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: auto;
  border-radius: 4px;
  font-weight: 600;
  position: relative;
  line-height: 1;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: var(--el-color-primary);
  text-transform: uppercase;
  color: #fff;
}

.normal-btn {
  padding: 0px 8px;
  appearance: none;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  height: 26px;

  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: auto;
  border-radius: 4px;
  font-weight: 600;
  position: relative;
  line-height: 1;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: rgb(52, 58, 64);
  text-transform: uppercase;
}
</style>
