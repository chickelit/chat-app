<template>
  <div
    :class="[
      'conversations-template',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <Navigation />
    <Conversations />
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
.conversations-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
}
</style>
