<template>
  <div class="rvc-article-page">
    <div class="rvc-article-container container-1000">
      <el-row :gutter="20">
        <el-col :span="16">
          <main class="rvc-article-main rvc-card pa-10">
            <h1 class="rvc-article-title">title</h1>

            <div class="rvc-article-content">content</div>

            <el-divider />

            <img src="@/assets/svg/dianzanpc.svg" />
            <img src="@/assets/svg/shoucang.svg" />
          </main>

          <div class="rvc-article-reply-action rvc-card pa-10">
            <h4>看帖是喜欢，评论才是真爱：</h4>
            <el-input
              resize="none"
              :rows="4"
              type="textarea"
              placeholder="请开始你的表演..."
              maxlength="300"
              show-word-limit
            />

            <el-button>回复</el-button>
          </div>

          <div class="rvc-article-reply-list rvc-card">评论列表</div>
        </el-col>
        <el-col :span="8" class="rvc-article-sub">
          <div class="rvc-card rvc-article-author d-flex justify-space-around">
            <el-avatar :size="90" src="/img/user-placeholder.webp"> </el-avatar>

            <div>
              <div class="author-name">author</div>
              <el-button>关注</el-button>
            </div>
          </div>
          <div class="rvc-card other">其他</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
const content = ref("");
const editorOption = {};

onMounted(() => {});
// 请求数据
</script>

<style lang="scss"></style>
