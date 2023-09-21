<template>
  <el-dropdown-menu>
    <!-- 个人 -->
    <el-dropdown-item @click="router.push('/profile')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1971c2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-user"
        >
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
        个人主页
      </div>
    </el-dropdown-item>
    <!-- 收藏 -->
    <el-dropdown-item @click="router.push('/404')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2f9e44"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-playlist-add"
        >
          <path d="M19 8h-14"></path>
          <path d="M5 12h9"></path>
          <path d="M11 16h-6"></path>
          <path d="M15 16h6"></path>
          <path d="M18 13v6"></path>
        </svg>
        我的收藏
      </div>
    </el-dropdown-item>
    <!-- 喜欢的模型 -->
    <el-dropdown-item @click="router.push('/model-like')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c2255c"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-heart"
        >
          <path
            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
          ></path>
        </svg>
        喜欢的模型
      </div>
    </el-dropdown-item>
    <!-- 我的书签 -->
    <el-dropdown-item @click="router.push('/404')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c2255c"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-bookmark"
        >
          <path
            d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"
          ></path>
        </svg>
        文章书签
      </div>
    </el-dropdown-item>
    <!-- 排行------------------------ -->
    <el-dropdown-item divided @click="router.push('/leader-board')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f08c00"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-crown"
        >
          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
        </svg>
        排行榜单
      </div>
    </el-dropdown-item>
    <!-- 隐藏模型 -->
    <el-dropdown-item @click="router.push('/404')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f08c00"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-circle-dashed"
        >
          <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
          <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
          <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
          <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
          <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
          <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
          <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
        </svg>
        隐藏模型
      </div>
    </el-dropdown-item>
    <!-- 关注 -->
    <el-dropdown-item @click="router.push('/follow')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-users"
        >
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
        </svg>
        关注的创作者
      </div>
    </el-dropdown-item>
    <!-- 下载历史 -->
    <el-dropdown-item @click="router.push('/404')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-history"
        >
          <path d="M12 8l0 4l2 2"></path>
          <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
        </svg>
        下载历史
      </div>
    </el-dropdown-item>
    <!-- 问答 -->
    <el-dropdown-item @click="router.push('/404')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-info-square-rounded"
        >
          <path d="M12 9h.01"></path>
          <path d="M11 12h1v4h1"></path>
          <path
            d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
          ></path>
        </svg>
        问题
        <div class="beta-btn">
          <span>Beta</span>
        </div>
      </div>
    </el-dropdown-item>
    <!-- 暗色------------------------- -->
    <el-dropdown-item divided>
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-palette"
        >
          <path
            d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
          ></path>
          <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <div class="flex flex-1 justify-between items-center">
          暗色模式
          <!-- <ThemeToggle /> -->
        </div>
      </div>
    </el-dropdown-item>
    <!-- 设置 -->
    <el-dropdown-item @click="router.push('/account/setting')">
      <div class="item-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-settings"
        >
          <path
            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
          ></path>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        </svg>
        账户设置
      </div>
    </el-dropdown-item>
    <!-- 登出 -->
    <el-dropdown-item>
      <div class="item-wrap" @click="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c92a2a"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-logout"
        >
          <path
            d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
          ></path>
          <path d="M9 12h12l-3 -3"></path>
          <path d="M18 15l3 -3"></path>
        </svg>
        退出登录
      </div>
    </el-dropdown-item>
  </el-dropdown-menu>
</template>

<script lang="ts" setup>
import ThemeToggle from './ThemeToggle.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const router = useRouter();

const isLogin = userStore.isLogin;
console.log('isLogin: ', isLogin);

const logout = async () => {
  try {
    await userStore.logout();
    router.replace('/');
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped lang="scss">
.item-wrap {
  width: 260px;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  border: 0px;
  background-color: transparent;
  outline: 0px;

  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  padding: 5px 0px;

  cursor: pointer;
  border-radius: 4px;
  color: rgb(193, 194, 197);
}

.item-right {
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;

  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.svg-wrap {
  display: flex;

  justify-content: center;

  align-items: center;
  margin-right: 10px;
}
.beta-btn {
  -webkit-tap-highlight-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 9px;
  height: 16px;
  line-height: 14px;
  text-decoration: none;
  padding: 0px 6.66667px;
  box-sizing: border-box;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: auto;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.25px;
  cursor: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  background: rgba(240, 140, 0, 0.2);
  color: rgb(255, 236, 153);
  border: 1px solid transparent;
}
</style>
