<template>
  <div :class="['send-button', $modeClass]" @click="$emit('click')">
    <fa class="icon" :icon="$fas.faPaperPlane"></fa>
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
.send-button {
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
    width: 80%;
    height: 80%;
    transition: all 0.15s linear;
  }
  &.dark {
    .icon {
      color: color("light", "darkest");
    }
    &:hover {
      .icon {
        color: color("light");
      }
    }
  }
  &.light {
    .icon {
      color: color("dark", "darker");
    }
    &:hover {
      .icon {
        color: color("dark", "lighter");
      }
    }
  }
}
</style>
