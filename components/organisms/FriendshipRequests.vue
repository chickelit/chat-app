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
  position: relative;
  width: 100%;
  height: 100%;
  background: color("dark");
  .friendship-requests-list {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
  }
}
</style>
