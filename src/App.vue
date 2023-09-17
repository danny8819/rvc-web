<script setup lang="ts">
onBeforeMount(() => {
  const loadingDom = document.querySelector(".before-app-render-loading");

  if (loadingDom) {
    console.log("loadingDom: ", loadingDom.parentElement);
    // loadingDom.addEventListener("transitionend", () => {
    //   console.log("transitionend: ");
    //   loadingDom.remove();
    // });
    setTimeout(() => {
      loadingDom.remove();
    }, 500);
    loadingDom.classList.add("unmount");
  }
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
