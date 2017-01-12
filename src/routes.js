import VueRouter from 'vue-router';

import Home from './components/home';
import addItem from './components/add-item';
import itemList from './components/item-list';
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/additem',
        name: 'add-item',
        component: addItem
    },
    {
        path: '/list',
        name: 'item-list',
        component: itemList
    },
    { path: '*', redirect: { name: 'home' } }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router