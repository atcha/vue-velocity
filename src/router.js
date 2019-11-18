import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: () => import('./pages/Analytics.vue')
        },
        {
            path: '/vehicles',
            name: 'vehicles',
            component: () => import('./pages/Vehicles.vue')
        },
        {
            path: '/service-reminders',
            name: 'serviceReminders',
            component: () => import('./pages/ServiceReminders.vue')
        }
    ]
});

export default router;