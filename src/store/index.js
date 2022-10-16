import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index.js';

// Vuex는 plugin 형태로 제공
// Vuex는 상태관리도구 -> 상태:여러 컴포넌트간에 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response);
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
})