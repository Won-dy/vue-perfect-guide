import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js';
import {store} from './store/index.js';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,  // 축약 문법: router: router, -> router,
    store,
}).$mount('#app')
