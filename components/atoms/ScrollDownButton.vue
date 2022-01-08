<template>
  <button :class="['scroll-down-button', { active }]" @click="$emit('click')">
    <img src="@/assets/svg/scroll-down.svg" alt="Setas apontadas para baixo" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.scroll-down-button {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}
.scroll-down-button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: color("primary");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  align-items: center;
  justify-items: center;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  img {
    filter: invert(0.65);
    transition: all 0.15s linear;
  }
  &.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  &:hover {
    img {
      filter: invert(0.75);
    }
    background: color("primary", "lighter");
  }
}
</style>
