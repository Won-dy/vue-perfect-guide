<template>
  <div class="header">
    <router-link to="/news">News</router-link>&nbsp;|&nbsp;
    <router-link to="/ask">Ask</router-link>&nbsp;|&nbsp;
    <router-link to="/jobs">Jobs</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/asyncawait">async&await</router-link>
  </div>
</template>

<style scoped>
/* scoped - style이 해당 컴포넌트에만 적용 */
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>