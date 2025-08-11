// src/router/index.ts
import {createRouter, createWebHistory, type RouteRecordRaw, type RouterOptions} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/features',
        name: 'Features',
        component: () => import('../views/Features.vue')
    },
    {
        path: '/story',
        name: 'Story',
        component: () => import('../views/Story.vue')
    },
    {
        path: '/progress',
        name: 'Progress',
        component: () => import('../views/Progress.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }
];

const routerOptions: RouterOptions = {
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 处理锚点链接
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        // 处理前进/后退时的位置记忆
        else if (savedPosition) {
            return savedPosition
        }
        // 默认滚动到顶部
        else {
            return { top: 0 }
        }
    }
}

const router = createRouter(routerOptions)
export default router
