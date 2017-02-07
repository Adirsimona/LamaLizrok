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

window.eventBus.$on('nav', itemId => {
    console.log('itemId', itemId);
    router.push({ name: 'item-details', params: { itemId: itemId } })
});


Vue.http.options.root = 'https://coding-academy.net/lamalizrok-ado/data';

// if (process.env.NODE_ENV === 'development') {

// }
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