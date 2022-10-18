<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from './utils/bus.js'

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    // 이벤트 객체는 항상 쌓이기 때문에
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // 컴포넌트 역할이 끝나면 꼭 off 하기
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
