<template>
  <div class="rvc-article-page">
    <div class="rvc-article-container container-1000">
      <el-row :gutter="20">
        <el-col :span="16">
          <ArticleMain />
          <ReplyInputCard class="mb-5" @sendVoice="sendVoice" @reply="reply" />
          <el-card class="rvc-article-reply-list">评论列表
            <div class="comment mt-6" v-for="(item, index) in comments" :key="item.id">
              <Comment :item="item" @replyVoice="(val) => replyVoice(index, val, null)"
                @replyMsg="(val) => replyMsg(index, val, null)" />
              <template v-if="item.reply">
                <div v-for="(replyItem, replyIndex) in reply" :key="replyItem">
                  <Comment :item="replyItem" @replyVoice="(val) => replyVoice(index, val, replyIndex)"
                    @replyMsg="(val) => replyMsg(index, val, replyIndex)" />
                </div>

              </template>

              <!-- <v-row>
                <v-col cols=" 1"><el-avatar :size="40" src="/image/head-img.jpeg"> </el-avatar></v-col>
                <v-col cols="10">
                  <div class="ml-2">
                    <span cols="2" class="comment-name">{{ item.name }}</span>
                    <span cols="10" class="comment-time ml-10">{{ item.time }}</span>
                  </div>
                  <audio class="audio" v-if="item.type === 'voice' && item.voiceUrl" :src="item.voiceUrl" ref="audio"
                    controls />
                  <v-col v-else class="comment-content">{{ item.comment }}</v-col>

                  <Statement :showReply="true" :item="item" @replyVoice="replyVoice" @replyMsg="replyMsg" />

                </v-col>

              </v-row> -->
            </div>
          </el-card>
        </el-col>

        <el-col :span="8" class="rvc-article-sub ">
          <ArticleAuthor />
          <ArticleMenu />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import ArticleMain from "./ArticleMain.vue";
import ReplyInputCard from "@/components/ReplyInputCard.vue";
import ArticleAuthor from "./ArticleAuthor.vue";
import Comment from './Comment.vue'
import ArticleMenu from "./ArticleMenu.vue";
const route = useRoute();
const { id } = route.params;
console.log("id: ", id);
const content = ref("");
const editorOption = {};


const comments: any = ref([
  { name: 'asdss', id: '211', time: '一天前', comment: '评论评论评论评论评论评论' },
  { name: 'a2sdss', id: '2121', time: '三天前', comment: '评论评论评论评论评论评论' },
  { name: 'as2dss', id: '2211', time: '一月前', comment: '评论评论评论评论评论评论' },
  { name: 'as2dss', id: '2112', time: '一月前', comment: '评论评论评论评论评论评论' },
  { name: '2sdss', id: '2121', time: '一月前', comment: '评论评论评论评论评论评论' },

])

const sendVoice = (val) => {
  console.log(val)
  comments.value.unshift(
    {
      name: '2sdss', id: '2121', time: '今天', type: 'voice', voiceUrl: val
    }
  )
}
const reply = (val) => {
  comments.value.unshift(
    {
      name: '2sdss', id: '2121', time: '今天', comment: val
    }
  )
}

const replyVoice = (index, val, replyIndex) => {
  if (!comments.value[index].reply) {
    comments.value[index].reply = []
  }
  comments.value[index].reply.push({
    name: '2sdss', id: '2121', time: '今天', type: 'voice', voiceUrl: val
  })
  comments.value = JSON.parse(JSON.stringify(comments.value));
}

const replyMsg = (index, val, replyIndex) => {
  if (!comments.value[index].reply) {
    comments.value[index].reply = []
  }
  comments.value[index].reply.push({
    name: '2sdss', id: '2121', time: '今天', comment: val
  })
  comments.value = JSON.parse(JSON.stringify(comments.value));
  console.log(comments.value)
}

onMounted(() => { });
// 请求数据
</script>

<style lang="scss" scoped>
.card-item {
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;

}


.rvc-article-sub {
  position: fixed;
  top: 10%;
  width: 21vw;
  right: 10%;
}

.audio {
  margin: 4px;
}
</style>
