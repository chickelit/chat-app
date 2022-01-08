<template>
  <button :class="['back-button', $modeClass]" @click="back">
    <img src="@/assets/svg/arrow-left.svg" alt="Arrow left" />
  </button>
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
    back() {
      this.$router.back();
    },
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  cursor: pointer;
  display: grid;
  align-items: center;
  img {
    transition: all 0.15s linear;
  }
  &.dark {
    &:hover {
      img {
        filter: invert(0.75);
      }
    }
    img {
      filter: invert(0.65);
    }
  }
  &.light {
    &:hover {
      img {
        filter: invert(0.35);
      }
    }
    img {
      filter: invert(0.25);
    }
  }
}
</style>
