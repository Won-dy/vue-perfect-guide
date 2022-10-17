import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations.js";
import actions from "./actions.js";

// Vuex는 plugin 형태로 제공
// Vuex는 상태관리도구 -> 상태:여러 컴포넌트간에 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
    },
    mutations,
    actions,
})