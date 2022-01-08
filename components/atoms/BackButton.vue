<template>
  <div :class="['back-button', $modeClass]" @click="back">
    <fa class="icon" :icon="$fas.faChevronLeft"></fa>
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
  methods: {
    back() {
      this.$router.back();
    },
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  align-items: center;
  justify-items: center;
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
