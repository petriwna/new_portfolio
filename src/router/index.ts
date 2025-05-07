import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '_hello',
        component: HomeView,
    },
    {
        path: '/about',
        name: '_about-me',
        component: () => AboutView,
    },
    // {
    //     path: '/projects',
    //     name: 'Projects',
    //     component: () => import('@/views/ProjectsView.vue'),
    // },
    // {
    //     path: '/contacts',
    //     name: 'Contacts',
    //     component: () => import('@/views/ContactsView.vue'),
    // },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
