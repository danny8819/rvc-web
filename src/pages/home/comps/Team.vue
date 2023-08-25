<template>
  <div>
    <div class="team-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                我们的团队 Our Team
              </h2>
              <p></p>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-13">
          <v-col
            v-for="(item, index) in members"
            :key="index"
            cols="12"
            md="6"
            lg="3"
            class="team-card-wrap"
          >
            <v-card elevation="0" class="team-card overflow-hidden mb-15">
              <div class="social-overlay">

                <v-img :src="item.img" alt="team" />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pa-2" style="background: #f8f8f8;">
                <h5 class="team-title font-weight-medium font-17">
                  {{ item.nickname }}
                </h5>
                <p class="team-subtitle">
                  {{ item.role }}
                </p>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "Team",
});

defineProps<{
  members: {
    nickname: string;
    role: string;
    description: string;
    img: string;
  }[];
}>()


</script>
