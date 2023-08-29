<template>
  <div class="home-page">
    <Welcome />
    <Banner :webInfo="webInfo" />
    <Feature />
    <Portfolio :tools="tools" />
    <Banner2 :webInfo="webInfo" />
    <Team2 />
    <ComingSoon />
  </div>
</template>

<script lang="ts" setup>
import Welcome from "@/pages/home/comps/Welcome.vue";
import Banner from "@/pages/home/comps/Banner.vue";
import Feature from "@/pages/home/comps/Feature.vue";
import Portfolio from "@/pages/home/comps/Portfolio.vue";
import Banner2 from "@/pages/home/comps/Banner2.vue";
import Team from "@/pages/home/comps/Team.vue";
import Team2 from "@/pages/home/comps/Team2.vue";
import ComingSoon from "@/pages/home/comps/ComingSoon.vue";

import { getWebInfo, getWebTool } from "@/api/website";

const members = ref([]);
const webInfo = ref<{
  beianInfo: string;
  id: number;
  masterQq: string;
  officialQq: string;
  webName: string;
  websiteUrl: string;
  webDescription: string;
  githubVersion: string;
  versionDescription: string;
}>();
const tools = ref([]);

getWebInfo().then((res) => {
  if (res?.data?.webInfo) {
    webInfo.value = res.data.webInfo;
  }
  if (res?.data?.tools) {
    tools.value = res.data.tools;
  }
});
</script>
