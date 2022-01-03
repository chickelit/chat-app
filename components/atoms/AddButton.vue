<template>
  <div :class="['add-button', $modeClass]" @click="$emit('click')">
    <img src="@/assets/img/add.svg" alt="Sinal de mais" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $modeClass() {
      return mode.$mode === "dark" ? "dark" : "light";
    },
  },
});
</script>

<style lang="scss" scoped>
.add-button {
  cursor: pointer;
  width: 3rem;
  height: 3rem;
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
