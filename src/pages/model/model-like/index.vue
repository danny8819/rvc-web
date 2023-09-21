<template>
  <div class="model-like">
    <div class="">
      <div class="model-container" style="width: 992px">
        <!-- title -->
        <h1 class="model-title">喜欢的模型</h1>
        <!-- content -->
        <div class="model-content">
          <!-- tabs -->
          <TabsBox />
          <!-- filter -->
          <FilterBox />
          <!-- tags -->
          <TagsScroll />
          <!-- 模型 -->
          <div style="position: relative">
            <div class="model-63e7k9">
              <div class="model-16xlp3a">
                <ModelCard />
              </div>
            </div>
            <!-- 底部 -->
            <div class="model-116ea4z">
              <div
                class="model-Divider-root model-Divider-horizontal model-Divider-withLabel model-1wj58lv"
                role="separator"
              >
                <div class="model-6egeyz">
                  <div class="footer-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-clock"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    You are all caught up
                  </div>
                </div>
              </div>
              <div class="model-8od8ev">
                <div class="model-l8k4bd">
                  <div class="model-1jt6jod">
                    Consider changing your period or filters to find more
                  </div>
                  <div class="model-1xmuiwy">Back to the top</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TagsScroll from '@/pages/model/model-like/TagsScroll.vue';
import FilterBox from '@/pages/model/model-like/FilterBox.vue';
import ModelCard from '@/pages/model/model-like/ModelCard.vue';
import TabsBox from '@/pages/model/model-like/TabsBox.vue';
</script>

<style scoped lang="scss">
.model-1trwvlz {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}

.model-content {
  display: flex;

  flex-direction: column;

  align-items: stretch;

  justify-content: flex-start;
  gap: 10px;
}

.model-container {
  margin: 0 auto;
  max-width: 2336px;
  width: 100%;
}

.model-like {
  padding-left: 16px;
  padding-right: 16px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
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
  color: var(--el-text-color-regular);
}

.model-title {
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  font-size: inherit;
  line-height: 1.55;

  text-decoration: none;

  font-weight: 700;
  font-size: 34px;
  line-height: 1.3;
  margin: 0;
}

.model-title:focus {
  outline-offset: 2px;
  outline: 2px solid #1c7ed6;
}

.model-title:focus:not(:focus-visible) {
  outline: none;
}

.model-gc2cx1 {
  position: relative;
  display: inline-block;
}

.model-16xlp3a {
  display: flex;
  flex-direction: column;
  width: 320px;
  max-width: 450px;
  row-gap: 16px;

  .model-7aj0so {
    width: 100%;
    height: auto;
    max-width: 450px;
  }
}

.model-116ea4z {
  display: flex;
  flex-direction: column;

  align-items: stretch;

  justify-content: flex-start;
  gap: 16px;
  margin-top: 24px;
  color: #c1c2c5;
  .model-1wj58lv {
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    border-image: initial;
    margin: 0px;
    border-top: 0px !important;

    .model-6egeyz {
      -webkit-tap-highlight-color: transparent;
      color: inherit;
      font-size: 14px;
      line-height: 1.55;
      text-decoration: none;
      display: flex;

      align-items: center;
      margin-top: 2px;

      .footer-text {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 4px;
      }
    }

    .model-6egeyz::before {
      content: '';
      flex: 1 1 0%;
      height: 1px;
      border-top: 2px solid rgb(55, 58, 64);
      margin-right: 10px;
    }
    .model-6egeyz::after {
      content: '';
      flex: 1 1 0%;
      border-top: 2px solid rgb(55, 58, 64);
      margin-left: 10px;
    }
  }

  .model-8od8ev {
    display: flex;

    align-items: center;

    justify-content: center;

    .model-l8k4bd {
      display: flex;
      flex-direction: column;

      align-items: center;

      justify-content: flex-start;
      gap: 0px;

      .model-1jt6jod {
        -webkit-tap-highlight-color: transparent;
        color: rgb(144, 146, 150);
        font-size: 14px;
        line-height: 1.55;
        text-decoration: none;
      }
      .model-1xmuiwy {
        -webkit-tap-highlight-color: transparent;
        color: rgb(77, 171, 247);
        font-size: 14px;
        line-height: 1.55;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>
