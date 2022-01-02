<template>
  <div
    :class="[
      'friendship-requests',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <Wrapper>
      <FriendshipRequestList class="friendship-request-list" />
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $mode() {
      return mode.$mode;
    },
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
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
  .friendship-request-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
</style>
