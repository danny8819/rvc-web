import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/pages/home/index.vue'
import Login from '@/pages/login/index.vue'

const routes = [
    {
        path: '/',
        component:Home
    },
    {
        path: '/login',
        component:Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router