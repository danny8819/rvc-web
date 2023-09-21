<template>
  <div class="p-3">
    <h3 class="streaks__title">🔥 Streaks</h3>
    <div class="rvc-card">
      <div
        class="my-2 flex justify-between"
        v-for="(_, index) in 12"
        :key="index"
      >
        <div class="inline-block flex align-items-center">
          <a
            style="color: inherit"
            data-turbo-frame="_top"
            href="https://prompthero.com/abyishot"
          >
            <img
              class="user-profile-pic mr-1"
              height="24"
              src="https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxqWVdSak5ERm1aUzAxWkRFekxUUmlNekV0WVRjM1pTMDFOR0l3WTJVMU0yVXpaRGNHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--ad9f4646ed1c153bed479d13f9e1a45a09cc75f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFVVnBSVG9LYzJGMlpYSjdDVG9UYzNWaWMyRnRjR3hsWDIxdlpHVkpJZ2R2YmdZNkJrVlVPZ3B6ZEhKcGNGUTZEbWx1ZEdWeWJHRmpaVlE2REhGMVlXeHBkSGxwSXc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7ccfde8977b527dfecf699c4b8fac72c79b04d39/abyishot-6c9f2b02d3b.jpg"
            />
          </a>
          <div class="inline-block ml-2">
            <div class="inline-flex align-items-center" style="">
              <a
                style="
                  color: inherit;
                  text-decoration-color: rgba(0, 0, 0, 0.1);
                  font-weight: 500;
                "
                data-turbo-frame="_top"
                href="https://prompthero.com/abyishot"
              >
                <span class="">abyishot </span></a
              >
              <i
                class="fa-solid fa-shield-halved mx-1"
                data-toggle="tooltip"
                data-placement="right"
                title="PromptHero moderator"
              ></i>
            </div>
          </div>
        </div>
        <span class="streak-badge">🔥 147</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.streaks__title {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(107, 114, 128);
  font-weight: bolder;
  text-transform: uppercase;
}
</style>
