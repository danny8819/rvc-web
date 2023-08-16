<template>
  <div class="banner-wrapper">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              {{ webInfo?.webName || "RVC社区" }}
            </h1>
            <h4 class="banner-subtitle white--text font-weight-regular">
              <!-- Minecraft我的世界公益社区 -->
              <br />
              <!-- 2019-2022 -->
              <br />
              <!-- 注册并填写白名单申请来加入我们的服务器 -->
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                color="error"
                class="mr-0 mr-md-8 mb-5 mb-md-0"
                size="large"
                to="/login"
                elevation="0"
              >
                立即注册
              </v-btn>

              <v-btn
                size="large"
                target="_blank"
                href="https://qm.qq.com/cgi-bin/qm/qr?k=LyhaBNgHliX2gl4u6oSvlrSMayyAAEe_&jump_from=webapi"
                class="mr-0 mr-md-8 mb-5 mb-md-0"
                variant="outlined"
                color="white"
                elevation="0"
              >
                快速加群
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-img
            max-width="100%"
            max-height="100%"
            src="https://cdn.lwmc.net/images/banners/banner2.png"
            alt="banner2"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
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
