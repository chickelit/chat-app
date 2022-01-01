<template>
  <button
    :class="[
      'options-button',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
    @click="$emit('click')"
  >
    <div class="wrapper">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </button>
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
.options-button {
  cursor: pointer;
  width: 2.4375rem;
  height: 2.4375rem;
  border-radius: 100%;
  display: grid;
  align-items: center;
  transition: all 0.15s linear;
  .wrapper {
    display: grid;
    grid-auto-rows: max-content;
    align-items: center;
    justify-items: center;
    gap: 0.1875rem;
    .dot {
      width: 0.3125rem;
      height: 0.3125rem;
      border-radius: 100%;
    }
  }
  &.dark {
    &:hover {
      background: color("dark", "lighter");
    }
    .wrapper {
      .dot {
        background: color("light", "darkest");
      }
    }
  }
  &.light {
    &:hover {
      background: color("light");
    }
    .wrapper {
      .dot {
        background: color("dark");
      }
    }
  }
}
</style>
