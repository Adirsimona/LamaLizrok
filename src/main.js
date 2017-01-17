import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import Vuetify from 'vuetify';
import store from './store';
import router from './routes';

Vue.use(Vuetify);


// components
import footerNav from './components/footer-nav';

const app = new Vue({
    router,
    store,
    components: {
        footerNav
    }
}).$mount('#app');