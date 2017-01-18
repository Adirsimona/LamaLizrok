import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import Vuetify from 'vuetify';
import store from './store';
import router from './routes';

Vue.use(Vuetify);

// import Toastr
import Toastr from 'vue-toastr';
// import toastr less file: need webpack less-loader
// Register vue component
Vue.component('vue-toastr', Toastr);

window.eventBus = new Vue();

// components
import footerNav from './components/footer-nav';

const app = new Vue({
    router,
    store,
    components: {
        footerNav,
        Toastr
    }
}).$mount('#app');