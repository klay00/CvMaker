import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../view/HomePage'


const routes =[
    {
        path:'/',
        name: 'home',
        component:HomePage
    },
]

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
})
export default router