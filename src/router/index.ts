import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/pages/home/index.vue'
import Login from '@/pages/login/index.vue'
import NotFoundVue from '../pages/NotFound.vue'
import Layout from '@/layout/index.vue'
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