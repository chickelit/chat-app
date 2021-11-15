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
  position: relative;
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  color: color("light", "darkest");
  padding: 0.125rem;
  border-radius: 0.3rem;
  font-size: 1.0625rem;
  transition: all 0.15s linear;
  border-radius: 0;
  border: 1px solid color("light", "darkest");
  border-width: 0 0 2px 0;
  &:after {
    content: "a";
  }
  &:focus {
    color: color("light");
    &::placeholder {
    color: color("light", "darker");
  }
  }
  &::placeholder {
    transition: all 0.15s linear;
    color: color("light", "darkest");
  }
}
</style>
