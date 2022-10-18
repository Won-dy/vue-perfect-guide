<template>
  <div>
    <ListItem></ListItem>
    <!--    <ul class="news-list">
          <li v-for="job in this.$store.state.jobs" class="post">
            &lt;!&ndash; 포인트 영역 &ndash;&gt;
            <div class="points">
              {{ job.points || 0 }}
            </div>
            &lt;!&ndash; 기타 정보 영역 &ndash;&gt;
            <div>
              <p class="news-title">
                <a :href="job.url">{{ job.title }}</a>
              </p>
              <small class="link-text">
                {{ job.time_ago }} by
                <a :href="job.url">
                  {{ job.user }}
                </a>
              </small>
            </div>
          </li>
        </ul>-->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from '../utils/bus.js';

export default {
  components: {ListItem},
  created() {
    // this.$store.dispatch('FETCH_JOBS');
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
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