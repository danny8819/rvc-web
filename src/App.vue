<script setup lang="ts">
onBeforeMount(() => {
  const loadingDom = document.querySelector(".before-app-render-loading");

  if (loadingDom) {
    loadingDom.addEventListener("transitionend", () => {
      loadingDom.remove();
    });
    loadingDom.classList.add("unmount");
  }
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
