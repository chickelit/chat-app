<template>
  <div
    :class="['auto-expanding-input', $modeClass]"
    role="textbox"
    contenteditable="true"
    :data-placeholder="placeholder"
    @keydown="$emit('keydown', $event)"
  ></div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.auto-expanding-input {
  cursor: text;
  display: inline-block;
  min-height: 1rem;
  max-height: 7rem;
  width: auto;
  color: color("dark");
  overflow-y: auto;
  outline: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.3125rem;
  &:empty:before {
    content: attr(data-placeholder);
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 0.25rem;
    background: color("dark", "lighter");
  }
  &::-webkit-scrollbar-thumb {
    background: color("dark", "lightest");
    border-radius: 0.25rem;
  }
  &.dark {
    &::-webkit-scrollbar {
      background: color("dark", "lighter");
    }
    &::-webkit-scrollbar-thumb {
      background: color("dark", "lightest");
    }
  }
  &.light {
    &::-webkit-scrollbar {
      background: color("light", "lighter");
    }
    &::-webkit-scrollbar-thumb {
      background: color("dark", "lightest");
    }
  }
}
</style>
