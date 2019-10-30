import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Vehicles from "./pages/Vehicles";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/vehicles',
            name: 'vehicles',
            component: Vehicles
        }
    ]
});

export default router;