<template>
  <div class="home-page">
    <Header />
    <Banner />
    <Feature />
    <Portfolio :history-list="historyList" />
    <Banner2 />
    <Team :team-numbers="teamNumbers" />
    <ComingSoon />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Banner from "@/pages/home/components/Banner.vue";
import Feature from "@/pages/home/components/Feature.vue";
import Portfolio from "@/pages/home/components/Portfolio.vue";
import Banner2 from "@/pages/home/components/Banner2.vue";
import Team from "@/pages/home/components/Team.vue";
import ComingSoon from "@/pages/home/components/ComingSoon.vue";
import Footer from "@/pages/home/components/Footer.vue";
import Header from "@/pages/home/components/Header.vue";

const historyList = [
  {
    name: "【一周目】2019年4月6日",
    description:
      "1.13.2服务器开服，启用白名单审核入会制；服务器开启第一周目，迎接第一位玩家。",
    image_url: "https://cdn.lwmc.net/images/term/1.jpg",
  },
  {
    name: "【二周目】2019年6月3日",
    description: "服务器1.14.x第二周目启动",
    image_url: "https://cdn.lwmc.net/images/term/2.jpg",
  },
  {
    name: "【三周目】2020年1月14日",
    description: "服务器1.15.2第三周目，服务器向纯净服靠拢",
    image_url: "https://cdn.lwmc.net/images/term/3.jpg",
  },
  {
    name: "【四周目】2020年1月20日",
    description: "开启内外服，内服纯净并开启正版验证，外服（第四周目）为插件服",
    image_url: "https://cdn.lwmc.net/images/term/4.jpg",
  },

  {
    name: "【五周目】2020年9月7日",
    description: "服务器1.16.3第五周目，内外服合并，开启正版验证",
    image_url: "https://cdn.lwmc.net/images/term/5.jpg",
  },
  {
    name: "【六周目】2020年11月5日",
    description: "服务器1.17.X第六周目开启，正式会员超过300人",
    image_url: "https://cdn.lwmc.net/images/term/6.jpg",
  },
  {
    name: "【七周目】2021年12月1日",
    description: "服务器1.18.X第七周目启动...",
    image_url: "https://cdn.lwmc.net/images/term/7.jpg",
  },
  {
    name: "【八周目】2022年6月8日",
    description: "服务器1.19 第八周目，地下世界启动！",
    image_url: "https://cdn.lwmc.net/images/term/8.jpg",
  },
];
const teamNumbers = [
  {
    image_url: "https://cdn.lwmc.net/images/users/1.jpg",
    name: "MoMeaks",
    role: "腐竹",
    description: "服务器工具人，网站开发者",
  },
  {
    image_url: "https://cdn.lwmc.net/images/users/2.jpg",
    name: "MoMeaks",
    role: "腐竹",
    description: "服务器工具人，网站开发者",
  },
  {
    image_url: "https://cdn.lwmc.net/images/users/3.jpg",
    name: "MoMeaks",
    role: "腐竹",
    description: "服务器工具人，网站开发者",
  },
  {
    image_url: "https://cdn.lwmc.net/images/users/4.jpg",
    name: "MoMeaks",
    role: "腐竹",
    description: "服务器工具人，网站开发者",
  },
  {
    image_url: "https://cdn.lwmc.net/images/users/5.jpg",
    name: "MoMeaks",
    role: "腐竹",
    description: "服务器工具人，网站开发者",
  },
  {
    image_url:
      "https://cdn.lwmc.net/userUpload/files/2022069QQ%EF%BF%BDG20220610004409.jpg",
    name: "MoMeaks",
    role: "腐竹",
    description: "服务器工具人，网站开发者",
  },
];
</script>
