<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="6" class="d-flex flex-column">
          <div class="ml-10">
            <v-avatar size="70">
              <img
                :src="'/img/user-placeholder.webp'"
                alt="Avatar"
                style="width: 100%"
              />
            </v-avatar>
          </div>
          <h1 class="ml-10">{{ userStore.userInfo?.nickname }}</h1>
          <h3 class="ml-10">description</h3>

          <div class="d-flex align-center mt-5">
            <div class="mx-10">
              <div>关注数</div>
              <div>0</div>
            </div>
            <div>
              <div>粉丝数</div>
              <div>0</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>

<style scoped lang="scss"></style>
