import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from "../views/CreateListView";

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
            component: NewsView,  // 기본 or Mixin 사용
            // component: createListView('NewsView'),  // HOC 생성
        },
        {
            name: 'ask',
            path: '/ask',
            component: AskView,  // 기본 or Mixin 사용
            // component: createListView('AskView'),  // HOC 생성
        },
        {
            name: 'jobs',
            path: '/jobs',
            component: JobsView,  // 기본 or Mixin 사용
            // component: createListView('JobsView'),  // HOC 생성
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