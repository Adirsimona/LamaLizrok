import VueRouter from 'vue-router';

import Home from './components/home';
import addItem from './components/edit-item';
import itemList from './components/item-list';
import itemListMap from './components/item-list-map';
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
    {
        path: '/list',
        name: 'item-list',
        component: itemList
    },
    {
        path: '/list-map',
        name: 'item-list-map',
        component: itemListMap
    },
    { path: '*', redirect: { name: 'home' } }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router