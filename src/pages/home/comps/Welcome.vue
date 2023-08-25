<template>
  <div class="welcome">
    <div class="bg">
      <span>RVC</span>

    </div>
    <h1>Welcome To <br>RVC Community!</h1>
  </div>
</template>

<script setup lang="ts">
 const element = document.getElementsByClassName('bg') as HTMLElement | null;
 document.addEventListener("scroll",function(){
   // 获取当前滚轮的位置
   const scrollY=window.scrollY;
   if(scrollY!=0){
     // 滚轮位置不等于0时,修改背景的定位加上滚轮的值
     element[0].style.backgroundPosition="calc(50% + "+scrollY+"px) calc(50% + "+scrollY+"px)";
   }else{
     // 否则清空背景的定位
     element[0].style.backgroundPosition="";
   }
 })
</script>

<style scoped>

</style>
