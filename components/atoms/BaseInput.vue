<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :maxlength="maxLength"
    @input="$emit('input', $event.target.value)"
  />
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
    maxLength: {
      type: Number,
      default: 255,
    },
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  background: color("primary", "lighter");
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  color: color("light", "darkest");
  padding: 0.25rem 0.75rem;
  border-radius: 0.3rem;
  font-size: 1.0625rem;
  transition: all 0.15s linear;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  &:focus {
    background: color("primary", "lightest");
    color: color("light");
  }
  &::placeholder {
    color: color("dark", "lighter");
  }
}
</style>
