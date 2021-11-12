<template>
  <button class="form-button" :type="type" @click="$emit('click', $event)">
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
.form-button {
  border-radius: 0.3125rem;
  width: 5rem;
  background: color("primary");
  height: 1.6rem;
  justify-self: center;
  transition: all 0.15s linear;
  color: color("light", "darkest");
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  font-weight: 600;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background: color("secondary", "darkest");
  }
}
</style>
