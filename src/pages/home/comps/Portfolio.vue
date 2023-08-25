<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">社区功能</h2>
              <p>
                在RVC社区，你不仅可以遇到与你志同道合的小伙伴，还能体验以下功能....
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-13">
          <ToolTable/>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import ToolTable from "@/pages/home/comps/ToolTable.vue";
export default {
  name: "Portfolio",
  components: {ToolTable},
  props: {
    historyList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">

</style>
