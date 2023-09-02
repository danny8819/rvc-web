<template>
  <div class="community-container">

    <div class="community-container-content">
      <Community />

    </div>
    <!-- <el-row :gutter="20">
      <el-col :span="16" class="pt-7">

      </el-col>
      <el-col :span="8">
        <Streaks />
      </el-col>
    </el-row> -->
  </div>
</template>

<script lang="ts" setup>
import Community from "./comps/Community.vue";
import Streaks from "./comps/Streaks.vue";
</script>

<style scoped lang="scss">
.community-banner {
  background: radial-gradient(circle, #f7f7f7, #999999, #333333);
  height: 450px;
}

.community-container-content {
  width: 84%;
  margin: auto;

  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
}



.list-item {
  padding: 0;

  .item__main {
    padding: 0 20px 0 88px;
    position: relative;

    .item__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 86.4px;
      left: 0;
      position: absolute;
      top: 0;
      width: 86.4px;
    }
  }
}

.item__header {
  box-sizing: border-box;
  height: 62px;
  padding-top: 16px;

  .item__title {
    align-items: center;
    display: flex;
    height: 22px;
    margin: 1px 0 2px;
    width: max-content;

    .text {
      color: #f69;
      font-weight: 600;
    }
  }
}

// .item__body {
//   margin-top: 8px;

//   .body__title {
//     color: black;
//     cursor: pointer;
//     font-size: 15px;
//     font-weight: 700;
//     line-height: 25px;
//   }

//   .body__summary {
//     line-height: 25px;
//     max-height: 100px;
//     font-size: 15px;
//     color: #18191c;

//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 4;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// }

.item__footer {
  box-sizing: border-box;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  //color: #9499a0;
}
</style>
