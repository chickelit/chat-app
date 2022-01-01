<template>
  <div
    :class="[
      'loading',
      { active, dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  ></div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.loading {
  border-radius: 100%;
  position: absolute;
  width: 2rem;
  height: 2rem;
  animation: spin 2s linear infinite;
  display: none;
  &.dark {
    border: 0.5rem solid color("light", "darker");
    border-top: 0.5rem solid color("primary");
  }
  &.light {
    border: 0.5rem solid color("light", "darker");
    border-top: 0.5rem solid color("primary");
  }
  &.active {
    display: block;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
