<template>
  <div>
    <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  computed: {
    // #1
    // fetchedAsk() {
    //   return this.$store.state.ask;
    // },

    // #2
    fetchedAsk() {
      return this.$store.getters.fetchedAsk;
    },

    // map 헬퍼 함수 이용
    // #3
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #4
    // ...mapGetters({
    //   // 객체 표기법
    //   fetchedAsk: "fetchedAsk"
    // }),

    // #5
    // ...mapGetters([
    //   // 배열 표기법
    //   "fetchedAsk"
    // ]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
}
</script>

<style scoped>

</style>