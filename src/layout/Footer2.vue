<template>
  <footer class="footer2-wrap" :class="{ hidden: hideFooter }">
    <div class="footer-copy">© RVC 2023</div>
    <div class="footer-center">
      <router-link
        class="text-xs text-[#fcc2d7] px-2 font-semibold"
        to="/join-us"
      >
        <div>
          <span>支持我们 ❤️</span>
        </div>
      </router-link>
      <router-link
        class="text-xs text-[#b2f2bb] px-2 font-semibold"
        to="/join-us"
      >
        <div>
          <span>加入我们 💼</span>
        </div>
      </router-link>

      <router-link
        class="text-xs text-[#e9ecef] px-2 font-semibold"
        to="/join-us"
      >
        <div>
          <span>隐私条款</span>
        </div>
      </router-link>

      <a
        class="icon-wrap flex items-center"
        style="width: 34px; height: 34px"
        href="https://github.com/xxxsjan/rvc-web"
        target="_blank"
        rel="noopener noreferrer"
        v-for="(item, index) in [
          // 'discord',
          // 'twitter',
          // 'instagram',
          // 'youtube',
          // 'tiktok',
          // 'reddit',
          'github',
        ]"
        :key="index"
      >
        <SvgIcon :name="item" color="#fff" />
      </a>
    </div>
    <div class="footer-right">
      <!-- <router-link to="/feedback" target="_blank">🪲 Bugs</router-link> -->
      <router-link class="feedback-btn" to="/feedback" target="_blank">
        <span>💡 反馈</span>
      </router-link>
    </div>
  </footer>
  <div
    class="scroll-to-top-wrap"
    @click="scrollToTop"
    :class="{ hide: y > 50 }"
  >
    <button class="scroll-to-top-btn">
      <div class="scroll-to-top-btn-content">
        <span class="scroll-to-top__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5l0 14"></path>
            <path d="M18 11l-6 -6"></path>
            <path d="M6 11l6 -6"></path>
          </svg>
        </span>
        <span class="scroll-to-top__text">回到顶部</span>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
const { y } = useWindowScroll();

const hideFooter = ref(false);

let timer: any;
function handleScroll() {
  if (timer) {
    this.clearTimeout(timer);
  }

  timer = setTimeout(() => {
    if (y.value < 10) {
      console.log(y.value);
      hideFooter.value = false;
      return;
    } else {
      hideFooter.value = true;
    }
  }, 500);
}

window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped lang="scss">
.footer2-wrap {
  min-width: 1111px;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 100;

  position: fixed;
  box-sizing: border-box;
  background-color: #1a1b1e;
  border-top: 1px solid #2c2e33;

  padding: 12px;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: nowrap;
  transition: bottom 0.5s ease-in-out;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji;
  &.hidden {
    bottom: -62px;
  }
}

.footer-copy {
  color: rgb(193, 194, 197);
  font-size: inherit;
  line-height: 1.55;
  text-decoration: none;
  font-weight: 700;
  white-space: nowrap;
  user-select: none;
}
.footer-center {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0;
  flex-wrap: nowrap;
}
.footer-right {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 4px;

  flex-wrap: nowrap;
  margin-left: auto;

  font-weight: 600;
  line-height: 30px;
  font-size: 12px;
  color: #e9ecef;

  .feedback-btn {
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;

    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: rgba(240, 140, 0, 0.2);
    color: #ffec99;
    text-align: center;

    padding: 0 12px 0 4px;
  }
}

.scroll-to-top-wrap {
  position: fixed;
  z-index: 99;
  bottom: 12px;
  right: 12px;
  transition: bottom 300ms linear 0s;
  &.hide {
    bottom: -62px;
  }

  .scroll-to-top-btn {
    transition-property: transform, opacity;
    transition-duration: 250ms;
    transition-timing-function: ease;
    transform-origin: center bottom;
    opacity: 1;
    transform: translateY(0px);

    padding: 0px 18px 0px 12px;
    appearance: none;
    text-align: left;
    text-decoration: none;
    box-sizing: border-box;
    height: 36px;

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

    color: rgb(255, 255, 255);
    .scroll-to-top-btn-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      overflow: visible;
      .scroll-to-top__icon {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
      .scroll-to-top__text {
        white-space: nowrap;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
