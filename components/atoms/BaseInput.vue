<template>
  <input class="base-input" :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  background: color("primary", "lighter");
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  color: color("dark", "lightest");
  padding: 0.25rem 0.75rem;
  border-radius: 0.3rem;
  font-size: 1.0625rem;
  transition: all 0.15s linear;
  &:focus {
    background: color("primary", "lightest");
  }
}
</style>
