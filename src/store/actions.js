import {
/*    fetchAskList,
    fetchJobsList,
    fetchNewsList,*/
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from "../api";

export default {
/*    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                // console.log(response);
                context.commit('SET_NEWS', response.data);
                return response;
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
    },*/
    FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
            .then(({data}) => commit('SET_LIST', data))
            .catch(error => console.log(error));

    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({commit}, id) {
        fetchCommentItem(id)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
}