<template>
  <div class="rvc-article-page">
    <div class="rvc-article-container container-1000">
      <el-row :gutter="20">
        <el-col :span="16">
          <ArticleMain />
          <ReplyInputCard class="mb-5" />
          <el-card class="rvc-article-reply-list">评论列表
            <div class="comment mt-6" v-for="item in comments" :key="item.id">
              <v-row>
                <v-col cols="1"><el-avatar :size="40" src="/image/head-img.jpeg"> </el-avatar></v-col>
                <v-col cols="10">
                  <div class="ml-2">
                    <span cols="2" class="comment-name">{{ item.name }}</span>
                    <span cols="10" class="comment-time ml-10">{{ item.time }}</span>
                  </div>

                  <v-col class="comment-content">{{ item.comment }}</v-col>

                </v-col>

              </v-row>

            </div>
          </el-card>
        </el-col>

        <el-col :span="8" class="rvc-article-sub ">
          <div class="rvc-card rvc-article-author d-flex justify-space-around">
            <el-avatar :size="90" src="/img/user-placeholder.webp"> </el-avatar>

            <div>
              <div class="author-name">author</div>
              <el-button>关注</el-button>
            </div>
          </div>
          <div class="rvc-card other ">
            <div class="rvc-card-menu card-item">目录</div>
            <div @click="go(item.key + '')" class="card-item" :class="item.key === activeKey" v-for="item in menus"
              :key="item.key">
              {{ item.name }}
            </div>

          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import ArticleMain from "./ArticleMain.vue";
import ReplyInputCard from "@/components/ReplyInputCard.vue";

const route = useRoute();
const { id } = route.params;
console.log("id: ", id);
const content = ref("");
const editorOption = {};

const activeKey = ref()
const go = (key) => {
  console.log(key)
  activeKey.value = key
  document.getElementById(key).scrollIntoView();

}

const menus = ref([
  { name: '前言', key: 'head' },
  { name: '介绍', key: 'Intro' },
  { name: '文章终点', key: 'end' },
])

const comments = ref([
  { name: 'asdss', id: '211', time: '一天前', comment: '评论评论评论评论评论评论' },
  { name: 'a2sdss', id: '2121', time: '三天前', comment: '评论评论评论评论评论评论' },
  { name: 'as2dss', id: '2211', time: '一月前', comment: '评论评论评论评论评论评论' },
  { name: 'as2dss', id: '2112', time: '一月前', comment: '评论评论评论评论评论评论' },
  { name: '2sdss', id: '2121', time: '一月前', comment: '评论评论评论评论评论评论' },
])
onMounted(() => { });
// 请求数据
</script>

<style lang="scss">
.card-item {
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;

}

.comment-name {
  font-size: 14px;
  font-weight: 500;
}

.comment-time {
  color: rgb(144, 146, 150);
  font-size: 12px;
  line-height: 1.55;
}

.comment-content {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  line-height: 1.55;
  font-size: 14px;
}

.rvc-article-sub {
  position: fixed;
  top: 30%;
  width: 20vw;
  right: 10%;
}
</style>
