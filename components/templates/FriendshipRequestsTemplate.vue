<template>
  <div
    :class="[
      'friendship-requests-template',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <Navigation />
    <FriendshipRequests />
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
.friendship-requests-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  &.dark {
    background: color("dark");
  }
  &.light {
    background: color("light");
  }
}
</style>
