import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/home/index.vue";
import Login from "@/pages/login/index.vue";
import NotFoundVue from "../pages/NotFound.vue";
import Layout from "@/layout/index.vue";
import Profile from "@/pages/profile.vue";
import Community from "@/pages/community/index.vue";
import { useUserStore } from "@/store/user";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
      },
      {
        path: "/community",
        name: "community",
        component: Community,
      },
      {
        path: "/account/setting",
        name: "setting",
        component: () => import("@/pages/account/setting.vue"),
      },
      {
        path: "/account/password",
        name: "password",
        component: () => import("@/pages/login/password.vue"),
      },
      {
        path: "/article/:id",
        name: "article",
        component: () => import("@/pages/article/index.vue"),
      },
      {
        path: "/model-home",
        name: "model-home",
        component: () => import("@/pages/model/model-home/index.vue"),
      },
      {
        path: "/model-detail/:mid",
        name: "model-detail",
        component: () => import("@/pages/model/model-detail/index.vue"),
      },
      {
        path: "/model-publish",
        name: "model-publish",
        component: () => import("@/pages/model/model-publish/index.vue"),
      },
      {
        path: "/model-search",
        name: "model-search",
        component: () => import("@/pages/model/model-search/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 公共路由
const publicRoute = [
  "home",
  "community",
  "model-home",
  "model-search",
  "article",
];
router.beforeEach((to, from, next) => {
  console.log("to: ", to);
  const userStore = useUserStore();
  console.log("userStore: ", publicRoute.includes(to.name as string));
  if(publicRoute.includes(to.name as string)){
    next()
  }
  if (!userStore.isLogin && to.path !== "/login") {
    next("/login");
  }
  next(); 
});
export default router;
