<template>
  <div>
    <p>{{ fetchedItem.title }}</p>
    <div>
      {{ fetchedItem.content }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scoped>

</style>