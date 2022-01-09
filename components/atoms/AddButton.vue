<template>
  <div :class="['add-button', $modeClass]" @click="$emit('click')">
    <fa class="icon" :icon="$fas.faPlus"></fa>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $modeClass() {
      return mode.$mode;
    },
    $fas() {
      return fas;
    },
  },
});
</script>

<style lang="scss" scoped>
.add-button {
  max-width: 3rem;
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  transition: all 0.15s linear;
  .icon {
    width: 60%;
    height: 60%;
    transition: all 0.15s linear;
  }
  &.dark {
    .icon {
      color: color("dark", "darker");
    }
    &:hover {
      .icon {
        color: color("dark");
      }
    }
  }
  &.light {
    .icon {
      color: color("light", "lighter");
    }
    &:hover {
      .icon {
        color: color("light", "lightest");
      }
    }
  }
}
</style>
