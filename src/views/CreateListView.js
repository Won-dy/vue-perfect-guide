import ListView from './ListView.vue';
import bus from "../utils/bus";

// HOC에서 <ListView> 생성
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: `${name} HOC`,  // 'NewsView', 'AskView', 'JobsView'
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        console.log('fetched' + name);
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }, 1000);
        },
        render(createElement) {
            return createElement(ListView);
        },
    }
}