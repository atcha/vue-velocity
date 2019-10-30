import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Dashboard from "./pages/Dashboard";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
});

export default router;