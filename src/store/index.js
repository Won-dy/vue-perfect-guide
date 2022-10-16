import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList, fetchAskList, fetchJobsList} from '../api/index.js';

// Vuex는 plugin 형태로 제공
// Vuex는 상태관리도구 -> 상태:여러 컴포넌트간에 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
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
        FETCH_ASK({commit}) {
            fetchAskList()
                .then(({data}) => {
                    commit('SET_ASK', data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // Destructuring: 구조 분해 문법
        // FETCH_JOBS(context) {
        FETCH_JOBS({commit}) {
            fetchJobsList()
                // .then(response => {
                //     context.commit('SET_JOBS', response.data);
                // })
                .then(({data}) => {
                    commit('SET_JOBS', data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
})