<template>
  <div class="rvc-card rvc-article-author justify-around">
    <div class="background">
      <div class="imgs"></div>
    </div>
    <div class="main">
      <div class="flex index-2">
        <el-avatar :size="90" src="/image/head-img.jpeg"> </el-avatar>

        <div class="ml-4">
          <div class="author-name">author</div>
          <div class="author-date mt-2">注册于26, 2023</div>
          <el-button class="mt-2">
            <SvgIcon name="icon_plus" class="follow mr-2" size="14" /> 关注
          </el-button>
        </div>
      </div>
      <el-rate
        class="rate mt-4"
        v-model="rate"
        disabled
        show-score
        text-color="#FFFFFF"
        score-template="1.5k"
      />
      <div class="mt-4 mb-4">
        <div class="flex justify-between emojis">
          <div v-for="item in emojis" :key="item.emoji" class="flex">
            <SvgIcon :name="item.emoji" class="emoji" size="16" />
            <span class="number ml-1">
              {{ changeNum(item.number) }}
            </span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <SvgIcon name="icon_coffee" class="emoji ml-2 mr-6" size="20" />
        <SvgIcon name="icon_globe" class="emoji" size="20" />
      </div>
    </div>
  </div>
</template>

<script setup>
let emojis = ref([
  { emoji: "icon_upload", number: 100 },
  { emoji: "icon_users", number: 100 },
  { emoji: "icon_heart", number: 1001 },
  { emoji: "icon_download", number: 10000 },
]);
const changeNum = (val) => {
  if (val >= 1000 && val < 10000) {
    return Number.parseInt(val / 1000) + "k+";
  } else if (val >= 10000) {
    return Number.parseInt(val / 10000) + "w+";
  } else {
    return val;
  }
};

let rate = ref(5);
</script>

<style lang="scss" scoped>
.rvc-article-author {
  min-width: 250px;
  /* 这里的背景色根据需求设置 */

  position: relative;
  height: 250px;
}

.background {
  background-image: url("/img/welcome5.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 6px;
  border: 1px solid;
}

.imgs {
  border-radius: 6px;
  height: 100%;
  background-color: black;
  filter: Alpha(Opacity=80);
  opacity: 0.4;
  z-index: 2;
}

.main {
  z-index: 22;
  position: absolute;
  color: white;
  width: 90%;
}

.emojis {
  width: 100%;
  //background: #343a40;
  border-radius: 32px;
}

.author-date {
  font-size: 14px;
  color: gray;
}

.emoji,
.number {
  //color: white;
  font-size: 14px;
}

.emoji:hover {
  color: $primary_color;
}

.follow {
  color: $primary_color;
}

:deep(.el-rate__text) {
  color: white !important;
}

.bottom {
  border-top: 1px solid white;
  padding-top: 10px;
  height: 30px;
  line-height: 30px;
}
</style>
