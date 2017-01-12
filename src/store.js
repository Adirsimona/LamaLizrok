import Vuex from 'vuex';
import Vue from 'vue';


const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
    state: {
        mapOrList: 'item-list-map',
        items: []
    },
    mutations: {
        switchDisplay(state, display) {
            state.mapOrList = display;
        },
        setItems(state, payload) {
            state.items = payload;
        }
    },
    getters: {

    },
    actions: {
        getItems({ commit }) {
            fetch('http://localhost:3003/data/item').then(res => res.json()).then(res => commit("setItems", res));
        },
        sendItem({ commit }, item) {
            console.log('payload', item);

            Vue.http.post('http://localhost:3003/data/item', item).then(res => res.json()).then(res => console.log('res', res));
        }
    },
    strict: !isProduction
})