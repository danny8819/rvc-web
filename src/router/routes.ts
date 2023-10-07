import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/home/index.vue';
import Login from '@/pages/login/index.vue';
import NotFoundVue from '../pages/NotFound.vue';
import Layout from '@/layout/index.vue';
import Profile from '@/pages/profile.vue';
import Community from '@/pages/community/index.vue';
import CreateArticle from '@/pages/article/comps/CreateArticle.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: '/community',
        name: 'community',
        component: Community,
      },
      {
        path: '/create',
        name: 'create',
        component: CreateArticle,
      },
      {
        path: '/account/setting',
        name: 'setting',
        component: () => import('@/pages/account/setting.vue'),
      },
      {
        path: '/account/password',
        name: 'password',
        component: () => import('@/pages/login/password.vue'),
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import('@/pages/article/index.vue'),
      },
      {
        path: '/model-home',
        name: 'model-home',
        component: () => import('@/pages/model/model-home/index.vue'),
        meta: {
          hideFooter: true,
        },
      },
      {
        path: '/model-like',
        name: 'model-like',
        component: () => import('@/pages/model/model-like/index.vue'),
        meta: {
          hideFooter: true,
        },
      },
      {
        path: '/model-detail/:mid',
        name: 'model-detail',
        component: () => import('@/pages/model/model-detail/index.vue'),
      },
      {
        path: '/model-publish',
        name: 'model-publish',
        component: () => import('@/pages/model/model-publish/index.vue'),
      },
      {
        path: '/model-search',
        name: 'model-search',
        component: () => import('@/pages/model/model-search/index.vue'),
      },
      {
        path: '/join-us',
        name: 'join-us',
        component: () => import('@/pages/join-us.vue'),
      },
      {
        path: '/feedback',
        name: 'feedback',
        component: () => import('@/pages/feedback/index.vue'),
      },
      {
        path: '/leader-board',
        name: 'leader-board',
        component: () => import('@/pages/leader-board/index.vue'),
      },
      {
        path: '/follow',
        name: 'follow',
        component: () => import('@/pages/follow/index.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFoundVue,
  },
];

export default routes;
