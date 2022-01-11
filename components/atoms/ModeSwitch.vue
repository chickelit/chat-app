<template>
  <div :class="['mode-switch', $modeClass]" @click="toggleMode">
    <div class="switch-wrapper">
      <div class="switch"></div>
    </div>
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
  methods: {
    toggleMode() {
      mode.update({ mode: mode.$mode === "light" ? "dark" : "light" });
    },
  },
});
</script>

<style lang="scss" scoped>
.mode-switch {
  cursor: pointer;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  padding: 0.25rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1.5rem;
  align-content: center;
  .switch-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    .switch {
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      position: absolute;
      left: 0;
      transition: all 0.15s linear;
    }
  }
  &.dark {
    border: 1px solid color("light", "darkest");
    .switch {
      background: color("light", "darkest");
      left: calc(100% - 1.5rem);
    }
  }
  &.light {
    border: 1px solid color("dark");
    .switch {
      background: color("dark");
      left: 0;
    }
  }
}
</style>
