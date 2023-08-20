<template>
  <v-container class="rvc-layout-footer">
    <v-row class="py-0 py-md-15">
      <v-col cols="12" sm="12" md="4" lg="4" class="px-xs-0">
        <h4 class="font-weight-regular font-18">
          官方QQ群：{{ webInfo?.officialQq }}
        </h4>
        <p class="mt-10">开发者QQ：{{ webInfo.masterQq }}</p>
      </v-col>

      <v-col cols="12" sm="12" md="4" lg="4" class="px-xs-0">
        <h4 class="font-weight-regular font-18">友情链接</h4>
        <p class="mt-10 mb-0">
          <a
            class="dark-link"
            target="_blank"
            href="https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI"
          >
            Rvc Github导航
          </a>
        </p>
      </v-col>

      <v-col cols="12" sm="12" md="4" lg="4" class="px-xs-0">
        <h4 class="font-weight-regular font-18">社区</h4>

        <div class="social-icons mt-10">
          <a href="javascript:void(0)">
            <i class="mdi mdi-facebook"></i>
          </a>
          <a href="javascript:void(0)">
            <i class="mdi mdi-twitter"></i>
          </a>
          <a href="javascript:void(0)">
            <i class="mdi mdi-google-plus"></i>
          </a>
          <a href="javascript:void(0)">
            <i class="mdi mdi-youtube"></i>
          </a>
          <a href="javascript:void(0)">
            <i class="mdi mdi-instagram"></i>
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
        <div class=" ">
          <div class="d-flex align-center">
            <a href="javascript:void(0)" class="link px-4">Terms of Use</a>
            <a href="javascript:void(0)" class="link px-4">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
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
