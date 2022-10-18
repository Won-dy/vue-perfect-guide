<template>
  <div>
    <ListItem></ListItem>
    <!--    <ul class="news-list">
          <li v-for="item in fetchedAsk" class="post">
            &lt;!&ndash; 포인트 영역 &ndash;&gt;
            <div class="points">
              {{ item.points }}
            </div>
            &lt;!&ndash; 기타 정보 영역 &ndash;&gt;
            <div>
              <p class="news-title">
                <router-link v-bind:to="`/item/${item.id}`">
                  {{ item.title }}
                </router-link>
              </p>
              <small class="link-text">
                {{ item.time_ago}} by
                <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
              </small>
            </div>
          </li>
        </ul>-->
  </div>
</template>

<script>
// import {mapState, mapGetters} from 'vuex';
import ListItem from "../components/ListItem.vue";
import bus from '../utils/bus.js';

export default {
  components: {
    ListItem
  },
  // computed: {
  //   // #1
  //   // fetchedAsk() {
  //   //   return this.$store.state.ask;
  //   // },
  //
  //   // #2
  //   fetchedAsk() {
  //     return this.$store.getters.fetchedAsk;
  //   },
  //
  //   // map 헬퍼 함수 이용
  //   // #3
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // }),
  //
  //   // #4
  //   // ...mapGetters({
  //   //   // 객체 표기법
  //   //   fetchedAsk: "fetchedAsk"
  //   // }),
  //
  //   // #5
  //   // ...mapGetters([
  //   //   // 배열 표기법
  //   //   "fetchedAsk"
  //   // ]),
  // },
  created() {
    // this.$store.dispatch("FETCH_ASK");
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch("FETCH_ASK")
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch((error) => {
            console.log(error);
          });
    }, 1000);
  }
}
</script>