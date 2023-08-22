<template>
  <div class="rvc-article-page">
    <div class="rvc-article-container container-1000">
      <el-row :gutter="20">
        <el-col :span="16">
          <ArticleMain />
          <ArticleReplyAction />
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
import ArticleMain from "./ArticleMain.vue";
import ArticleReplyAction from "./ArticleReplyAction.vue";
const route = useRoute();
const { id } = route.params;
console.log('id: ', id);
const content = ref("");
const editorOption = {};

onMounted(() => {});
// 请求数据
</script>

<style lang="scss"></style>
