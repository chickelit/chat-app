<template>
  <div :class="['loading', { active }]"></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  border: 0.5rem solid color("light", "darker");
  border-top: 0.5rem solid color("primary");
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  animation: spin 2s linear infinite;
  display: none;
  &.active {
    display: block;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
