import { createRouter, createWebHistory } from 'vue-router'
import bodyComp from './../components/bodyComp.vue'
import Login from './../components/loginComp.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: bodyComp,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
]

const router = createRouter({history: createWebHistory(), routes})
export default router