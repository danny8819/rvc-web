<template>
  <div class="article-container px-4 m-auto">
    <section class="flex flex-col">
      <div class="flex justify-between">
        <h1 class="text-[34px] leading-[1.3] font-bold">
          {{ articleData.data.title }}
        </h1>
        <div class="flex items-center justify-start gap-[10px]">
          <div class="flex items-center justify-start gap-1">
            <div
              class="inline-flex justify-center items-center font-bold bg-[#343A40]/30 rounded-md h-[26px] leading-6 text-[13px] pl-[3px] pr-[5px] border my-1 cursor-pointer"
            >
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
                class="mr-1"
              >
                <path
                  d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"
                />
              </svg>
              <span>174</span>
            </div>
            <button
              type="button"
              class="h-9 w-9 rounded-md border hover:bg-[#343A40]/30 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <path
                  d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-controls="mantine-R197d5lpr6-dropdown"
          >
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
            >
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex">
        <div class="flex gap-10 pr-4 border-r-[1px] border-white/30">
          <div class="avatar">
            <div class="w-[26px] rounded-full">
              <img :src="articleData.data.avatar" alt="avatar" />
            </div>
          </div>
          <div class="text-[#8D97AD] font-bold">
            {{ articleData.data.nickname }}
          </div>
        </div>
        <div class="px-4 border-r-[1px] border-white/30 text-[#8D97AD]">
          {{ articleData.data.createDate }}
        </div>
        <div class="pl-4 flex text-[#8D97AD] font-bold uppercase">tag</div>
      </div>
    </section>
    <div class="flex justify-between translate-x-0">
      <ArticleMain />
    </div>
    <ReplyInputCard class="mb-5" @sendVoice="sendVoice" @reply="reply" />
    <!-- <el-card class="rvc-article-reply-list"> -->
    评论列表
    <div class="comment mt-6" v-for="(item, index) in comments" :key="item.id">
      <Comment
        :item="item"
        @replyVoice="val => replyVoice(index, val, null)"
        @replyMsg="val => replyMsg(index, val, null)"
      />
      <Comment
        class="ml-12"
        v-if="item.reply"
        :item="item.reply[0]"
        @replyVoice="val => replyVoice(index, val, 0)"
        @replyMsg="val => replyMsg(index, val, 0)"
      />

      <div class="ml-14 mt-6 hover:text-primary-color cursor-pointer">
        <span
          v-if="item.reply && item.reply.length > 1 && !item.showReply"
          @click="showReplyMax(item)"
        >
          <SvgIcon
            name="icon_down"
            class="emoji ml-14 mr-2"
            size="14"
          ></SvgIcon>
          展开{{ item.reply.length - 1 }}条回复
        </span>
      </div>
      <template v-if="item.showReply && item.reply">
        <div v-for="(replyItem, replyIndex) in item.reply" :key="replyItem.id">
          <Comment
            class="ml-12"
            v-if="replyIndex > 0"
            :item="replyItem"
            @replyVoice="val => replyVoice(index, val, replyIndex)"
            @replyMsg="val => replyMsg(index, val, replyIndex)"
          />
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
    <div class="fixed top-28 right-80 w-80">
      <ArticleAuthor />
      <ArticleMenu />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CreateArticle from './comps/CreateArticle.vue';
import { useRoute } from 'vue-router';
import ArticleMain from './comps/ArticleMain.vue';
import ReplyInputCard from '@/components/ReplyInputCard.vue';
import ArticleAuthor from './comps/ArticleAuthor.vue';
import Comment from './comps/Comment.vue';
import ArticleMenu from './comps/ArticleMenu.vue';
import userPlaceholder from '../../../public/img/user-placeholder.webp';
import { watch, reactive } from 'vue';

const route = useRoute();
const { did } = route.params;
const content = ref('');
const editorOption = {};
// import { useArticleStore } from '../../store/article';
import { useArticleStore } from '@/store/article';
import { discuss } from '@/api/discuss';

const articleData = useArticleStore();

articleData.discussData({ did: did });
setTimeout(() => {
  console.log(articleData.data);
}, 3000);

const comments: any = ref([
  {
    name: 'asdss',
    id: '211sd',
    time: '一天前',
    comment: '评论评论评论评论评论评论',
  },
  {
    name: 'a2sdss',
    id: '212dfs1',
    time: '三天前',
    comment: '评论评论评论评论评论评论',
  },
  {
    name: 'as2dss',
    id: '221dssssf1',
    time: '一月前',
    comment: '评论评论评论评论评论评论',
  },
  {
    name: 'as2dss',
    id: '211dsf2',
    time: '一月前',
    comment: '评论评论评论评论评论评论',
  },
  {
    name: '2sdss',
    id: '212dsssf1',
    time: '一月前',
    comment: '评论评论评论评论评论评论',
    reply: [
      {
        name: '2sdss',
        id: '212dssssff1',
        time: '一月前',
        comment: '评论评论评论评论评论评论',
      },
      {
        name: '2sdss',
        id: '212dssssff1',
        time: '一月前',
        comment: '评论评论dsfdsf评论评论评论评论',
      },
    ],
  },
]);

const sendVoice = val => {
  console.log(val);
  comments.value.unshift({
    name: '2sdss',
    id: new Date(),
    time: '今天',
    type: 'voice',
    voiceUrl: val,
  });
};
const reply = val => {
  comments.value.unshift({
    name: '2sdss',
    id: new Date(),
    time: '今天',
    comment: val,
  });
};

const replyVoice = (index, val, replyIndex) => {
  if (!comments.value[index].reply) {
    comments.value[index].reply = [];
  }
  comments.value[index].reply.push({
    name: '2sdss',
    id: new Date(),
    time: '今天',
    type: 'voice',
    voiceUrl: val,
  });
  comments.value = JSON.parse(JSON.stringify(comments.value));
};

const replyMsg = (index, val, replyIndex) => {
  if (!comments.value[index].reply) {
    comments.value[index].reply = [];
  }
  comments.value[index].reply.push({
    name: '2sdss',
    id: new Date(),
    time: '今天',
    comment: val,
  });
  comments.value[index].showReply = true;
  comments.value = JSON.parse(JSON.stringify(comments.value));
  console.log(comments.value);
};

const showReplyMax = item => {
  item.showReply = true;
};

onMounted(() => {});
// 请求数据
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
.article-container {
  width: 1320px;
}
@media (min-width: 640px) {
  .article-container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .article-container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .article-container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .article-container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .article-container {
    max-width: 1320px;
  }
}
/* .card-item {
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.rvc-article-sub {
  position: fixed;
  top: 15%;
  width: 21vw;
  right: 10%;
}

.audio {
  margin: 4px;
}

.open:hover {
  color: $primary_color;
}

.open {
  cursor: pointer;
} */
</style>
