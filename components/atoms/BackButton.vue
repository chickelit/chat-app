<template>
  <button
    :aria-label="label"
    class="back-button"
    @click="
      setView({
        newView,
        navigationActiveClass,
      })
    "
  >
    <img src="@/assets/img/arrow-left.svg" alt="Arrow left" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    newView: {
      type: String,
      required: true,
    },
    navigationActiveClass: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      setView,
    };
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  cursor: pointer;
  display: grid;
  align-items: center;
  &:hover {
    img {
      filter: invert(0.75);
    }
  }
  img {
    filter: invert(0.65);
    transition: all 0.15s linear;
  }
}
</style>
