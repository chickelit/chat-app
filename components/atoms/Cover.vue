<template>
  <div class="cover">
    <img v-if="src" :src="src" />
    <div
      v-else
      :class="[
        'cover-skeleton',
        'skeleton',
        { dark: $mode === 'dark', light: $mode === 'light' },
      ]"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.cover {
  display: grid;
  align-items: center;
  .cover-skeleton {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
}
</style>
