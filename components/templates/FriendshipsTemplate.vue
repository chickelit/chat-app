<template>
  <div
    :class="[
      'friendships-template',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <Navigation />
    <Friends />
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
.friendships-template {
  height: 100vh;
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  &.light {
    background: color("light");
  }
}
</style>
