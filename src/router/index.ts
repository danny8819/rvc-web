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
                component:Home
            },
            {
                path: '/login',
                component:Login
            },
            {
                path: '/profile',
                component:Profile
            },
            {
                path: '/community',
                component:Community
            },{
                path:'/account/setting',
                component:()=>import('@/pages/account/setting.vue')
            },
            {
                path:'/account/password',
                component:()=>import('@/pages/login/password.vue')
            },
            {
                path:'/article/:id',
                component:()=>import('@/pages/article/index.vue')
            },
            {
                path:'/model/home',
                component:()=>import('@/pages/model/model-home.vue')
            },
            {
                path:'/model/detail/:mid',
                component:()=>import('@/pages/model/model-detail.vue')
            },
            {
                path:'/model/publish',
                component:()=>import('@/pages/model/model-publish.vue')
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