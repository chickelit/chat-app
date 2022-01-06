<template>
  <div :class="['hamburger-button', $modeClass]" @click="$emit('click')">
    <div class="hamburger"></div>
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
.hamburger-button {
  cursor: pointer;
  width: 3rem;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: none;
  align-items: center;
  justify-items: center;
  justify-self: end;
  @include screen("small") {
    display: grid;
  }
  &:hover {
    .hamburger,
    .hamburger::after,
    .hamburger::before {
      background: color("light");
    }
  }
  .hamburger,
  .hamburger::after,
  .hamburger::before {
    height: 0.3125rem;
    background: color("light", "darker");
    border-radius: 0.15625rem;
    transition: all 0.15s linear;
  }
  .hamburger {
    position: relative;
    width: 80%;
    &:before {
      transform: translateY(-12px);
    }
    &:after {
      transform: translateY(12px);
    }
  }
  .hamburger::after,
  .hamburger::before {
    content: "";
    position: absolute;
    width: 100%;
  }
  &.light {
    .hamburger,
    .hamburger::after,
    .hamburger::before {
      background: color("dark", "lightest");
    }
    &:hover {
      .hamburger,
      .hamburger::after,
      .hamburger::before {
        background: color("dark");
      }
    }
  }
}
</style>
