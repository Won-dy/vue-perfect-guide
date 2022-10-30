import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
} from "../api";

export default {
    // promise
    /*    FETCH_NEWS(context) {
            return fetchNewsList()
                .then(response => {
                    // console.log(response);
                    context.commit('SET_NEWS', response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                });
        },*/
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    // promise
    /*    FETCH_ASK({commit}) {
            return fetchAskList()
                .then(({data}) => {
                    commit('SET_ASK', data);
                })
                .catch(error => {
                    console.log(error);
                })
        },*/
    // async
    async FETCH_ASK({commit}) {
        try {
            const response = await fetchAskList();
            commit('SET_ASK', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
        // Destructuring
        // const { data } = await fetchAskList();
        // commit('SET_ASK', data);
        // return data;
    },
    // Destructuring: 구조 분해 문법
    // FETCH_JOBS(context) {
    // promise
    /*    FETCH_JOBS({commit}) {
            return fetchJobsList()
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
    // async
    async FETCH_JOBS({commit}) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },
    // #2
    async FETCH_LIST({commit}, pageName) {
        // #3
        const response = await fetchList(pageName);
        // #4
        console.log(4);
        commit('SET_LIST', response.data);
        return response;
/*        // #3
        return fetchList(pageName)
            // .then(({data}) => commit('SET_LIST', data))
            .then(response => {
                // #4
                console.log(4);
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));*/
    },
    FETCH_USER({commit}, name) {
        return fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({commit}, id) {
        return fetchCommentItem(id)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
}