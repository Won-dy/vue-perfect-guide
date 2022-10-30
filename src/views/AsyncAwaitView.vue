<template>
  <div>
    <button @click="loginUser">login</button>
    <h1>Todo List</h1>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import {handleException} from "../utils/handler.js";

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    // async & await 방식
    async loginUser() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log('response', response);
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          var todoList = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = todoList.data;
        } else {
          throw '사용자 인증에 실패하였습니다.';
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    },
    // Promise & Callback 방식
    loginUser1() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(response => {
            if (response.data.id === 1) {
              console.log('사용자가 인증되었습니다.');
              axios.get('https://jsonplaceholder.typicode.com/todos')
                  .then(response => {
                    this.items = response.data;
                  });
            }
          })
          .catch(error => console.log(error));
    },
  }
}
</script>

<style scoped>

</style>