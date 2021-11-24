<template>
  <button class="base-button" :type="type" @click="$emit('click', $event)">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 0.3125rem;
  padding: 0 1rem;
  background: color("dark", "lighter");
  height: 1.6rem;
  justify-self: center;
  transition: all 0.15s linear;
  color: color("light", "darkest");
  font-weight: 600;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  &:hover {
  background: color("dark", "lightest");
  }
}
</style>
