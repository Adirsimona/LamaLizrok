import VueRouter from 'vue-router';

import Home from './components/home';
import addItem from './components/edit-item';

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/edititem',
        name: 'edit-item',
        component: addItem
    },
    { path: '*', redirect: { name: 'home' } }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router