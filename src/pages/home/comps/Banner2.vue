<template>
  <div>
    <div class="banner1-component">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <v-chip size="small" class="bg-dark" color="white"
                >版本信息</v-chip
              >
              <h2
                class="banner1-title font-weight-bold text-uppercase white--text"
              >
                {{ webInfo?.githubVersion }}【RVC】已经到来！
              </h2>
              <p
                class="white--text op-8 font-weight-regular"
                v-html="webInfo?.versionDescription"
              ></p>
              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  rounded
                  target="_blank"
                  href="https://github.com/LorisYounger/VPet/releases"
                  class="btn-custom-md"
                  depressed
                  color="white"
                  elevation="0"
                >
                  了解更多
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="5"> </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
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
      githubVersion: string;
      versionDescription: string;
    };
  }>(),
  {}
);
</script>
