import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from "@/pages/home/ui/HomeView.vue";
import AboutView from "@/pages/about/ui/AboutView.vue";
import ContactView from "@/pages/contact/ui/ContactView.vue";

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
    //     component: () => import('@/pages/ProjectsView.vue'),
    // },
    {
        path: '/contacts',
        name: '_contact-me',
        component: () => ContactView,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
