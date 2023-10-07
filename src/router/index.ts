import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store/user';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 公共路由
const publicRoute = [
  'home',
  'community',
  'model-home',
  'model-search',
  'article',
];
router.beforeEach((to, from, next) => {
  NProgress.start();

  console.log('to: ', to);
  const userStore = useUserStore();
  // console.log("userStore: ", publicRoute.includes(to.name as string));
  // if(publicRoute.includes(to.name as string)){
  //   next()
  // }
  // if (!userStore.isLogin && to.path !== "/login") {
  //   next("/login");
  // }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
