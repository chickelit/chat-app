<template>
  <div class="avatar">
    <img v-if="src" :src="src" />
    <div v-else class="avatar-skeleton skeleton"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar {
  display: grid;
  align-items: center;
  .avatar-skeleton {
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
