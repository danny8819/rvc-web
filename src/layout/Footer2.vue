<template>
  <footer class="footer2-wrap" :class="{ hidden: y > 10 }">
    <div class="footer-copy">© RVC 2023</div>
    <div class="footer-center">
      <a
        class="mantine-Button-root mantine-12d6g0a"
        type="button"
        data-button="true"
        href="javascript:void(0);"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label">Support Us ❤️</span>
        </div></a
      ><a
        class="mantine-Button-root mantine-1innaxq"
        type="button"
        data-button="true"
        href="/join-us"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label">Join Us 💼</span>
        </div></a
      ><a
        class="mantine-Button-root mantine-x6buan"
        type="button"
        data-button="true"
        href="javascript:void(0);"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label"
            >Terms of Service</span
          >
        </div></a
      ><a
        class="mantine-Button-root mantine-x6buan"
        type="button"
        data-button="true"
        href="javascript:void(0);"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label">Privacy</span>
        </div></a
      ><a
        class="mantine-Button-root mantine-x6buan"
        data-button="true"
        href="javascript:void(0);"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label">API</span>
        </div></a
      ><a
        class="mantine-Button-root mantine-x6buan"
        data-button="true"
        href="javascript:void(0);"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label">Status</span>
        </div></a
      ><a
        class="icon-wrap flex items-center"
        style="width: 34px; height: 34px"
        href="javascript:void(0);"
        target="_blank"
        rel="noopener noreferrer"
        v-for="(item, index) in [
          'discord',
          'twitter',
          'instagram',
          'youtube',
          'tiktok',
          'reddit',
          'github',
        ]"
        :key="index"
      >
        <SvgIcon :name="item" color="#fff" />
      </a>
    </div>
    <div class="footer-right">
      <a
        class="mantine-Button-root mantine-96znl7"
        type="button"
        data-button="true"
        href="javascript:void(0);"
        target="_blank"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label">🪲 Bugs</span>
        </div></a
      ><router-link
        class="mantine-Button-root mantine-ua08er"
        to="/feedback"
        target="_blank"
        ><div class="mantine-3xbgk5 mantine-Button-inner">
          <span class="mantine-qo1k2 mantine-Button-label"
            >💡 Feature Requests</span
          >
        </div></router-link
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
const { x, y } = useWindowScroll();
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

  &.hidden {
    bottom: -62px;
  }
}

.footer-copy {
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

  .mantine-12d6g0a {
    -webkit-tap-highlight-color: transparent;
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
    cursor: pointer;
    border: 0;
    padding: 0;

    appearance: none;
    font-size: 16px;
    background-color: transparent;
    text-align: left;
    color: #c1c2c5;

    text-decoration: none;
    box-sizing: border-box;
    height: 30px;
    padding-left: 14px;
    padding-right: 14px;
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

    display: inline-block;
    width: auto;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
    line-height: 30px;
    font-size: 12px;

    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    color: #fcc2d7;
    padding-right: 10px;
    padding-left: 10px;
  }
  .mantine-1innaxq {
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
    cursor: pointer;
    border: 0;
    padding: 0;

    appearance: none;
    font-size: 16px;
    background-color: transparent;
    text-align: left;
    color: #c1c2c5;
    text-decoration: none;
    box-sizing: border-box;
    height: 30px;
    padding-left: 14px;
    padding-right: 14px;
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
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    width: auto;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
    line-height: 30px;
    font-size: 12px;

    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    color: #b2f2bb;
    padding-right: 10px;
    padding-left: 10px;
  }
  .mantine-x6buan {
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
    cursor: pointer;
    border: 0;
    padding: 0;
    appearance: none;
    font-size: 16px;
    background-color: transparent;
    text-align: left;
    color: #c1c2c5;
    text-decoration: none;
    box-sizing: border-box;
    height: 30px;
    padding-left: 14px;
    padding-right: 14px;
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
    display: inline-block;
    width: auto;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
    line-height: 30px;
    font-size: 12px;
    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    color: #e9ecef;
    padding-right: 10px;
    padding-left: 10px;
  }
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
  .mantine-96znl7 {
    -webkit-tap-highlight-color: transparent;
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
    cursor: pointer;
    border: 0;
    padding: 0;

    appearance: none;
    font-size: 16px;
    background-color: transparent;
    text-align: left;
    color: #c1c2c5;
    text-decoration: none;
    box-sizing: border-box;
    height: 30px;
    padding-left: 14px;
    padding-right: 14px;
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

    display: inline-block;
    width: auto;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
    line-height: 30px;
    font-size: 12px;

    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    color: #e9ecef;
    padding-left: 10px;
    padding-right: 10px;
  }
  .mantine-ua08er {
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
    cursor: pointer;
    border: 0;
    padding: 0;

    appearance: none;
    font-size: 16px;
    background-color: transparent;
    text-align: left;
    color: #c1c2c5;

    text-decoration: none;
    box-sizing: border-box;
    height: 36px;
    padding-left: 18px;
    padding-right: 18px;
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

    display: inline-block;
    width: auto;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
    line-height: 30px;
    font-size: 14px;

    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: rgba(240, 140, 0, 0.2);
    color: #ffec99;
    padding-left: 4px;
    padding-right: 10px;
    .mantine-3xbgk5 {
      display: flex;

      align-items: center;

      justify-content: center;
      height: 100%;
      overflow: visible;
    }
  }
}
</style>
