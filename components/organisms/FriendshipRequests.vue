<template>
  <div class="friendship-requests">
    <Wrapper>
      <FriendshipRequestList />
    </Wrapper>
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
::-webkit-scrollbar {
  width: 0px;
}
.friendship-requests {
  height: 100%;
  background: color("dark", "darker");
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 1fr;
  .friendship-requests-list {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
  }
}
</style>
