<template>
  <div ref="coming-soon" class="coming-wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" sm="10" md="6" class="d-flex align-center">
          <div>
            <h2 class="coming-title font-weight-bold white--text">快速加群</h2>
            <h4 class="coming-subtitle white--text font-weight-bold">
              你还在等什么？快速加群了解我们的最新动态
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                nuxt
                large
                target="_blank"
                class="btn-custom-md"
                color="primary"
                elevation="0"
              >
                JOIN US
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.coming-wrapper {
  min-height: 350px;
  overflow: auto;
  background-size: cover;
  background: url("/img/comming-soon-bg1.png")  top 50% center;
  background-size: cover;
  display: flex;
  align-items: center;
}

.coming-title {
  font-size: 30px;
  margin: 20px 0 15px;
}

.coming-title,
.coming-subtitle {
  text-shadow: 1px 1px 10px #333;
}
</style>
