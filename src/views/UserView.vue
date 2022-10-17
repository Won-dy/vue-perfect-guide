<template>
  <div>
    <!-- # 1 -->
    <!-- <UserProfile></UserProfile>-->
    <!-- # 2 -->
    <UserProfile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  // # 2. View 내용 최대한 살리기, props 사용
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style scoped>

</style>