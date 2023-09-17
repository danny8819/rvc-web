<template>
  <div class="banner-wrapper">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              {{ webInfo?.webName || "RVC社区" }}
            </h1>
            <h4
              class="banner-subtitle white--text font-weight-regular"
              style="width: 55vh"
            >
              RVC模型交流社区
              <br />
              2022-2023
              <br />
              一起探索声音变换的无限可能,你梦想的声音从现在开始!
            </h4>
            <div class="mt-10 pt-2" v-if="!userStore.token">
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
                href=""
                class="mr-0 mr-md-8 mb-5 mb-md-0 flow-button"
                variant="outlined"
                color="white"
                elevation="0"
              >
                进入社区
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <!--          <v-img-->
          <!--            max-height="450px"-->
          <!--            src="/img/二次元猫娘2.png"-->
          <!--            alt="banner2"-->
          <!--          />-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/store/user";
const userStore = useUserStore();

withDefaults(
  defineProps<{
    webInfo: {
      beianInfo: string;
      id: number;
      masterQq: string;
      officialQq: string;
      webName: string;
      websiteUrl: string;
      webDescription: string;
    };
  }>(),
  {}
);
</script>
