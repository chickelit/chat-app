<template>
  <div
    :class="['dropdown', { dark: $mode === 'dark', light: $mode === 'light' }]"
  >
    <slot />
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
.dropdown {
  z-index: 5000;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-10px);
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 0.3125rem;
  position: absolute;
  border-radius: 0.3125rem;
  min-width: 12rem;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.25rem;
  transition: all 0.15s linear;
  button {
    width: max-content;
    cursor: pointer;
    position: relative;
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    transition: all 0.15s linear;
  }
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }
  &.dark {
    background: color("dark");
    button {
      color: color("light", "darker");
      &:hover {
        color: color("light");
      }
    }
  }
  &.light {
    background: color("light", "lighter");
    button {
      color: color("dark", "darker");
      &:hover {
        color: color("dark", "darkest");
      }
    }
  }
}
</style>
