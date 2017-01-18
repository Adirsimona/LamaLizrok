import Vuex from 'vuex';
import Vue from 'vue';


const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
    state: {
        items: [],
        ctgs: ['מוצרי חשמל', 'ריהוט וכלי בית', 'ספרים ומדיה', 'בגדים ואופנה', 'תחביבים וספורט', 'לתינוק ולילד', 'שונות'],
        currFilter: 'all',
        isMapMode: true
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload;
        },
        updateFilter(state, payload) {
            state.currFilter = payload;
            console.log('currFilter', state.currFilter);
        },
        switchDisplay(state) {
            state.isMapMode = !state.isMapMode;
        }
    },
    getters: {
        filterItems(state) {
            if (state.currFilter === 'all') return state.items;
            else return state.items.filter(item => item.ctg === state.currFilter);
        }
    },
    actions: {
        getItems({ commit }) {
            return Vue.http.get('http://localhost:3003/data/item')
                .then(res => res.json())
                .then(items => {
                    commit("setItems", items);
                    // commit('filterItems', 'all')
                    return items;
                });
        },
        sendItem({ commit }, item) {
            console.log('payload', item);
            Vue.http.post('http://localhost:3003/data/item', item).then(res => res.json()).then(res => console.log('res', res));
        }
    },
    strict: !isProduction
})