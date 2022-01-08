<template>
  <button
    :class="['search-button', $modeClass]"
    :type="type"
    @click="$emit('click')"
  >
    <img src="@/assets/svg/magnifying-glass.svg" alt="Lupa" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.search-button {
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  background: color("primary");
  display: grid;
  align-items: center;
  justify-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.15s linear;
  img {
    width: 60%;
    transition: all 0.15s linear;
  }
  &:hover {
    background: color("primary", "lighter");
  }
  &.dark {
    img {
      filter: invert(0.65);
    }
  }
  &.light {
    img {
      filter: invert(0.9);
    }
  }
}
</style>
