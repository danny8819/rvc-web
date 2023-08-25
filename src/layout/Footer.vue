<template>
  <v-container class="rvc-layout-footer">
    <v-row class="py-0 py-md-15">
      <v-col cols="12" sm="12" md="4" lg="4" class="px-xs-0">
        <h4 class="font-weight-regular font-18">
          官方QQ群：{{ webInfo?.officialQq }}
        </h4>
        <p class="mt-5">开发者QQ：{{ webInfo.masterQq }}</p>
      </v-col>

      <v-col cols="12" sm="12" md="4" lg="4" class="px-xs-0">
        <h4 class="font-weight-regular font-18">友情链接</h4>
        <p class="mt-5 mb-0">
          <a
            class="gray-link"
            target="_blank"
            href="https://www.bilibili.com/video/BV1pm4y1z7Gm/"
          >
            🎬 演示视频
          </a>
        </p>
      </v-col>

      <v-col cols="12" sm="12" md="4" lg="4" class="px-xs-0">
        <h4 class="font-weight-regular font-18">社区</h4>

        <div class="social-icons mt-5">
          <a
            href="https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI"
            target="_blank"
          >
            <img src="../../public/icon/github.png" class="footer-icon"/>
          </a>
          <a
            href="https://discord.com/invite/HcsmBBGyVk"
            target="_blank"
          >
            <img src="../../public/icon/discord.png" class="footer-icon"/>
          </a>
          <a
              href="https://huggingface.co/lj1995/VoiceConversionWebUI/tree/main"
              target="_blank"
          >
            <img src="../../public/icon/hugging-face.png" class="footer-icon"/>
          </a>
          <a
              href="https://wpa.qq.com/msgrd?v=3&uin=901648607&site=qq&menu=yes"
              target="_blank"
          >
            <img src="../../public/icon/qq.png" class="footer-icon"/>
          </a>
        </div>
      </v-col>
    </v-row>

    <div class="footer-bottom-bar font-14">
      <div class="d-md-flex justify-space-around">
        <p>
          <a href="https://beian.miit.gov.cn" class="link">{{
            webInfo?.beianInfo
          }}</a>
        </p>
        <p class=" ">
          All Rights Reserved by
          <a :href="webInfo?.websiteUrl" class="link">{{
            webInfo?.websiteUrl
          }}</a>
        </p>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
defineOptions({
  name: "LayoutFooter",
});
defineProps<{
  webInfo: Partial<{
    beianInfo: string;
    id: number;
    masterQq: string;
    officialQq: string;
    webName: string;
    websiteUrl: string;
  }>;
}>();
</script>

<style lang="scss">
.theme--light.v-footer {
  background: white;
}
.social-icons {
  a {
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    display: inline-block;
    border-radius: 100%;
    margin: 0 5px;
    transition: 0.2s ease-in;
    color: $dark;
    background: $light;
    &:hover {
      transform: translate3d(0px, -5px, 0px);
      background: $blue;
      color: $white;
    }
  }
}

.footer {
  padding: 45px 0;
}

.footer-bottom-bar {
  padding-top: 10px;
  margin-top: 20px;
}

@media (max-width: 960px) {
  .footer-bottom-bar {
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

.footer-icon{
  width: 25px;
  height: 25px;
}
</style>
