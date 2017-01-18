import VueRouter from 'vue-router';

import Home from './components/home';
import addItem from './components/edit-item';
import chat from './components/chat';
import itemListMap from './components/item-list-map';
import itemList from './components/item-list';


const routes = [{
        path: '/',
        name: 'home',
        children: [{
                path: '/item-list-map',
                name: 'list-map',
                component: itemListMap
            },
            {
                path: '/item-list',
                name: 'item-list',
                component: itemList
            },
        ],
        component: Home
    },
    {
        path: '/edititem',
        name: 'edit-item',
        component: addItem
    },
    {
        path: '/chat',
        name: 'chat',
        component: chat
    },
    { path: '*', redirect: { name: 'home' } }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router