<template>
  <div class="friendship-requests-list">
    <div v-for="(friendshipRequest, index) of friendshipRequests" :key="index">
      <FriendshipRequestCard :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      friendshipRequests: Array(15).fill(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.friendship-requests-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  div {
    &:nth-last-child(1) {
      ::v-deep.friendship-request-card {
        .friendship-request-card-dropdown {
          top: -1.5rem;
        }
      }
    }
  }
}
</style>
