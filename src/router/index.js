import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import bus from "../utils/bus.js";
import { store } from "../store/index.js";
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
            beforeEnter: (to, from, next) => {
                console.log('to', to);  // 이동할 URL의 라우팅 정보
                console.log('from', from);  // 현재 URL의 라우팅 정보
                console.log('next', next);  // 이동하기 위해 호출해야 하는 함수

                bus.$emit('start:spinner');
                // #1
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        // #5
                        console.log(5);
                        console.log('fetched RouterGuard');
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            name: 'ask',
            path: '/ask',
            component: AskView,  // 기본 or Mixin 사용
            // component: createListView('AskView'),  // HOC 생성
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log('fetched RouterGuard');
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        {
            name: 'jobs',
            path: '/jobs',
            component: JobsView,  // 기본 or Mixin 사용
            // component: createListView('JobsView'),  // HOC 생성
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log('fetched RouterGuard');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
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