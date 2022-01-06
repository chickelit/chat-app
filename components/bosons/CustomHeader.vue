<template>
  <div :class="['custom-header', $modeClass]">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.custom-header {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  &.dark {
    background: color("dark", "darkest");
  }
  &.light {
    background: color("light", "lightest");
  }
}
</style>
