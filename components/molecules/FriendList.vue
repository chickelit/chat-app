<template>
  <div class="friends-list">
    <div v-for="(friend, index) of friends" :key="index">
      <FriendCard :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      friends: Array(15).fill(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.friends-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  div {
    &:nth-last-child(1) {
      ::v-deep.friend-card {
        .friend-card-dropdown {
          top: -1rem;
        }
      }
    }
  }
}
</style>
