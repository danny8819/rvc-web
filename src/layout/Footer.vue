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
          <a
            href="https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI"
            target="_blank"
          >
            <i class="mdi mdi-github"></i>
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
.rvc-layout-footer {
  // background-color: $white;
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
</style>
