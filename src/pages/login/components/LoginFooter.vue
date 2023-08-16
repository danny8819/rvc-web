<template>
  <div class="login-footer py-5">
    <v-container class="login-footer-container">
      <v-row>
        <v-col cols="12" sm="3">
          <div class="footer-section">
            <div>RVC</div>
            <ul>
              <li>
                <a href="#">
                  <i class="mdi mdi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="mdi mdi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="mdi mdi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="footer-section">
            <div class="footer-section-title">Navigation</div>

            <ul class="">
              <li><a data-turbo="false" href="/create">Create AI images</a></li>
              <li><a href="/academy">Academy - Learn AI</a></li>
              <li><a href="/community">PromptHero Community</a></li>
              <li>
                <a href="/affiliate">Affiliate program</a>
                <!-- <img
                  height="10px"
                  style="vertical-align: middle"
                  src="/assets/new2x-6bcb4c0a020a5bc3c45a00a381c52e4ec5b25479a7e9290491d63f2bf924eda8.webp"
                /> -->
              </li>
              <li><a href="https://openjourney.art">Openjourney</a></li>
              <li><a href="/challenges">AI Challenges</a></li>
              <li><a href="/verified">Verified profiles</a></li>
              <li><a href="/pro">Go PRO</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="footer-section">
            <div class="footer-section-title">THE BEST AI PROMPTS</div>
          </div>
        </v-col>
        <v-col cols="12" sm="3"
          ><div class="footer-section">
            <div class="footer-section-title">AI MODELS</div>
          </div></v-col
        >
      </v-row>
      <!-- <v-row>
        <v-col cols="12" class="justify-center"> 2023 © RVC </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
</script>

<style lang="scss">
.login-footer {
  background-color: rgba(0, 0, 0, 0.04);

  .login-footer-container {
    margin-left: auto;
    margin-right: auto;
  }
  .footer-section {
    color: rgba(0, 0, 0, 0.6);
  }
  .footer-section-title {
    font-size: 13px;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  ul {
    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
@media (max-width: 600px) {
  .footer-section {
    text-align: center;
  }
}
@media (min-width: 600px) {
  .login-footer-container {
    max-width: 500px;
  }
}
@media (min-width: 960px) {
  .login-footer-container {
    max-width: 860px;
  }
}
@media (min-width: 1280px) {
  .login-footer-container {
    max-width: 1100px;
  }
}
</style>
