import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';


// components
import footerNav from './components/footer';

const app = new Vue({
    router,
    store,
    components: {
        footerNav
    }
}).$mount('#app');