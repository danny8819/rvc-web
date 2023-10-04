<template>
  <div class="follow-wrap">
    <div class="follow-box-content">
      <div class="follow-box">
        <div class="follow-header">
          <span class="link-back" @click="$router.push('/profile')">
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
              class="tabler-icon-arrow-left"
            >
              <path d="M5 12l14 0"></path>
              <path d="M5 12l6 6"></path>
              <path d="M5 12l6 -6"></path>
            </svg>
          </span>
          <h1 class="username-text">@RVC</h1>
        </div>
      </div>
      <div class="follow-box">
        <!-- tabs -->
        <div class="follow-tabs">
          <button
            class="follow-tab"
            role="tab"
            v-for="(item, index) in ['Following', 'Followers', 'Hidden']"
            :key="index"
            :class="{
              active: index === activeIdx,
            }"
            @click="activeIdx = index"
          >
            <div class="">{{ item }} ({{ followList[index].length || 0 }})</div>
          </button>
        </div>
        <div>
          <ul class="follow-list" v-if="followList[activeIdx].length > 0">
            <li
              class="follow-list-item"
              v-for="(item, index) in followList[activeIdx]"
              :key="index"
            >
              <div class="userInfo">
                <el-avatar :size="26" :src="item.src"></el-avatar>
                <div class="username">{{ item.username }}</div>
              </div>

              <button class="follow-btn">
                <span>Unfollow</span>
              </button>
            </li>
          </ul>
          <ul class="follow-list" v-else>
            <li class="empty-tips-box flex justify-center items-center">
              <div class="empty-tips-box__content">
                <div class="empty-tips-box__text">暂无关注</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const followList = ref([
  [
    {
      username: 'rvc',
      src: '/logo.png',
    },
  ],
  [],
  [],
]);
const activeIdx = ref(0);

watch(
  () => activeIdx.value,
  nVal => {},
);
</script>

<style scoped lang="scss">
.follow-wrap {
  padding-left: 16px;
  padding-right: 16px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  color: #c1c2c5;
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
}
.follow-box-content {
  margin: -12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;

  .follow-box {
    box-sizing: border-box;
    flex: 0 0 100%;
    padding: 12px;
    max-width: 100%;
    .follow-header {
      box-sizing: border-box;
      display: flex;
      flex-flow: wrap;

      align-items: center;

      justify-content: flex-start;
      gap: 24px;

      .link-back {
        -webkit-tap-highlight-color: transparent;

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
        border: 1px solid transparent;
        background-color: transparent;
        color: #e9ecef;
        position: relative;
        height: 28px;
        min-height: 28px;
        width: 28px;
        min-width: 28px;
        border-radius: 4px;
        padding: 0;
        line-height: 1;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .username-text {
        -webkit-tap-highlight-color: transparent;
        color: inherit;
        text-decoration: none;

        font-weight: 700;
        font-size: 34px;
        line-height: 1.3;
        margin: 0px;
      }
    }
    // tabs
    .follow-tabs {
      display: flex;
      flex-flow: wrap;

      justify-content: flex-start;
      border-bottom: 2px solid rgb(55, 58, 64);
    }
    .follow-list {
      list-style-type: none;
      color: rgb(193, 194, 197);
      font-size: 16px;
      line-height: 1.55;
      margin: 0px;
      padding-left: 0px;
      list-style-position: inside;
      width: 100%;
    }
  }
}
.follow-tabs [role='tab'] {
  flex: 1 1 0%;
}
.follow-tab {
  -webkit-tap-highlight-color: transparent;

  cursor: pointer;
  border-width: 0px 0px 2px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  appearance: none;
  background-color: transparent;
  text-align: left;
  color: rgb(193, 194, 197);
  text-decoration: none;
  box-sizing: border-box;
  position: relative;
  padding: 10px 16px;
  font-size: 14px;
  white-space: nowrap;
  z-index: 0;
  display: flex;

  align-items: center;

  justify-content: center;
  line-height: 1;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  margin-bottom: -2px;
  border-radius: 4px 4px 0px 0px;
}
.follow-tab.active {
  border-color: rgb(25, 113, 194);
  color: rgb(255, 255, 255);
}
.empty-tips-box {
  outline: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  text-decoration: none;
  color: rgb(193, 194, 197);
  background-color: rgb(26, 27, 30);
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid rgb(55, 58, 64);
  width: 100%;
  padding: 24px;
  .empty-tips-box__content {
    display: flex;

    align-items: center;

    justify-content: center;
    .empty-tips-box__text {
      -webkit-tap-highlight-color: transparent;
      color: inherit;
      font-size: 18px;
      line-height: 1.55;
      text-decoration: none;
      font-weight: bold;
    }
  }
}
.userInfo {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 8px;
}
.follow-btn {
  padding: 0px 12px;
  appearance: none;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  height: 26px;

  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: auto;
  border-radius: 32px;
  position: relative;
  user-select: none;
  cursor: pointer;
  border: 1px solid rgb(51, 154, 240);
  background-color: transparent;
  color: rgb(51, 154, 240);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;

  &:hover {
    background-color: rgba(51, 154, 240, 0.05);
  }
}
.follow-list-item {
  white-space: nowrap;
  line-height: 1.55;
  padding: 8px;

  display: flex;
  justify-content: space-between;
}
</style>
