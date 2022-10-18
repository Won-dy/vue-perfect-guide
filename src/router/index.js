import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",  // hash # 제거
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            name: 'news',
            // path: url 주소
            path: '/news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            // component: NewsView,
            component: createListView('NewsView'),
        },
        {
            name: 'ask',
            path: '/ask',
            // component: AskView,
            component: createListView('AskView'),
        },
        {
            name: 'jobs',
            path: '/jobs',
            // component: JobsView,
            component: createListView('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
});