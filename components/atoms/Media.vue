<template>
  <div class="media">
    <img v-if="$type === 'image'" :src="src" />
    <video v-if="$type === 'video'" controls :src="src" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    fa() {
      return fas;
    },
    $type() {
      const src = this.src;
      const splittedSrc = src.split(".");

      const extname = splittedSrc[splittedSrc.length - 1];

      if (["jpeg", "jpg", "png"].includes(extname)) {
        return "image";
      } else {
        return "video";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.media {
  width: 100%;
  border-radius: 0.25rem;
  img {
    border-radius: 0.25rem;
    width: 100%;
  }
  video {
    border-radius: 0.25rem;
    width: 100%;
  }
  .audio {
    display: grid;
    grid-template-columns: 1.4rem 1fr;
    grid-template-rows: max-content;
    gap: 0.75rem;
    .play-button {
      cursor: pointer;
      width: 100%;
      aspect-ratio: 1 / 1;
      height: max-content;
      display: grid;
      align-items: center;
      .icon {
        width: 100%;
        height: 100%;
        color: color("light", "darker");
      }
    }
  }
}
</style>
