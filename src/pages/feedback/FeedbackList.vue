<template>
  <div class="feedback-list">
    <div class="feedback-list-item" v-for="(item, index) in 11" :key="index">
      <div class="feedback-list-item__left">
        <p class="feedback-list-item__left-header">Having an issue.</p>
        <p class="feedback-list-item__left-content">
          I have been trying to generate more images, but they always get stuck
          on queue and you know what annoys me the most? They fail and don't
          show up due to a "error" apparently. I'm using YiffyMix v34 mind
          you.How do you fix this? Please help.
        </p>
        <div class="feedback-list-item__left-footer">
          <el-avatar
            :size="30"
            :src="'/img/user-placeholder.webp'"
            class="mr-5"
          >
          </el-avatar>
          <div class="feedback-list-item__left-footer__info">
            <span class="font-medium">maxfield1678</span>
            <span class="time"> 4 days ago</span>
          </div>
        </div>
      </div>
      <div class="feedback-list-item__right">
        <div class="feedback-list-item__right-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="false flex-shrink-0 w-6 h-6 group-focus:-translate-y-2 group-hover:-translate-y-0.5 cursor-pointer main-transition"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p>1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
html {
  --feedback-item-hover: rgba(248, 249, 252, 0.9);
}
html.dark {
  --feedback-item-hover: rgb(36 40 55);
}
</style>

<style scoped lang="scss">
.feedback-list {
  margin-top: 16px;
  background-color: var(--el-fill-color-blank);
  border: 1px solid var(--el-border-color-light);
  border-radius: 8px;
  color: var(--el-text-color-regular);

  p {
    color: inherit;
  }

  .feedback-list-item {
    display: flex;
    min-height: 100px;
    &:not(:last-child) {
      border-bottom: 1px solid var(--el-border-color-light);
    }
    &:hover {
      background-color: var(--feedback-item-hover);
    }
    .feedback-list-item__left {
      flex: 1;
      padding: 20px 12px 20px 20px;
      overflow: hidden;
      .feedback-list-item__left-header {
        // color: #404864;

        font-weight: 600;
      }
      .feedback-list-item__left-content {
        // color: rgb(79, 88, 122);

        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        font-size: 14px;
        line-height: 1.5;
      }
      .feedback-list-item__left-footer {
        display: flex;
        align-items: center;
        padding-top: 10px;
        .feedback-list-item__left-footer__info {
          display: flex;
          align-items: center;

          .time {
            font-size: 12px;
            // color: rgb(93, 104, 144);

            margin-left: 6px;
          }
        }
      }
    }
    .feedback-list-item__right {
      width: 63px;
      border-left: 1px solid var(--el-border-color-light);
      display: flex;
      justify-content: center;
      align-items: center;

      .feedback-list-item__right-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          width: 24px;
          color: var(--el-text-color-regular);
          transition: all 0.5s;
        }

        p {
          margin: 0px;
        }
        &:hover svg {
          transform: translateY(-5px);
        }
      }
    }
  }
}
</style>
