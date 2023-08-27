import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/pages/home/index.vue'
import Login from '@/pages/login/index.vue'
import NotFoundVue from '../pages/NotFound.vue'
import Layout from '@/layout/index.vue'
import Profile from '@/pages/profile.vue' 
import Community from '@/pages/community/index.vue'
const routes = [
    {
        path: '/',
        component:Layout,
        children:[
            {
                path:'/',
                name:'Home',
                component:Home
            },
            {
                path: '/login',
                name:'Login',
                component:Login
            },
            {
                path: '/profile',
                name:'Profile',
                component:Profile
            },
            {
                path: '/community',
                name:'Community',
                component:Community
            },{
                path:'/account/setting',
                name:'Setting',
                component:()=>import('@/pages/account/setting.vue')
            },
            {
                path:'/account/password',
                name:'Password',
                component:()=>import('@/pages/login/password.vue')
            },
            {
                path:'/article/:id',
                name:'Article',
                component:()=>import('@/pages/article/index.vue')
            },
            {
                path:'/model/home',
                name:'model-home',
                component:()=>import('@/pages/model/model-home.vue')
            },
            {
                path:'/model/detail/:mid',
                name:'model-detail',
                component:()=>import('@/pages/model/model-detail.vue')
            },
            {
                path:'/model/publish',
                name:'model-publish',
                component:()=>import('@/pages/model/model-publish.vue')
            },{
                path:'/model/search',
                name:'model-search',
                component:()=>import('@/pages/model/model-search.vue')
            }
        ]
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFoundVue
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router