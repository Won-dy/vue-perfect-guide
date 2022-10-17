<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <!-- # 1 -->
      <!-- <div>{{ userInfo.id }}</div>-->
      <!-- # 2 -->
      <!-- <div>username: {{ info.id }}</div>-->
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <!-- # 1 -->
      <!-- <div class="time">{{ userInfo.created }}</div>-->
      <!-- # 2 -->
      <!-- <div class="time">time: {{ info.created }}</div>-->
      <div class="time">
        <!-- time: {{ info.created }}-->
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
      <slot name="karma"></slot>

    </div>
  </div>
</template>

<script>
export default {
  // # 2. View 내용 최대한 살리기, props 사용
  // 컴포넌트 태그 차원에서 명시적으로 표현하는 이점
  props: {
    info: Object,
  },

  // # 1. Profile에서 store에 접근하여 가져온다
  // 표현할 부분에서 직접 state에 접근 - vuex 특성에 더 적합
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>