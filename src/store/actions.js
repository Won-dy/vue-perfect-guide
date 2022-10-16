import {fetchAskList, fetchJobsList, fetchNewsList} from "../api";

export default {
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