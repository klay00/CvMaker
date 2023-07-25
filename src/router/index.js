import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../view/HomePage'
import BlogPage from '../view/BlogPage'


const routes =[
    {
        path:'/',
        name: 'Bloge',
        component:BlogPage
    },
    {
        path:'/HomePage',
        name: 'home',
        component:HomePage
    },
]

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
})
export default router