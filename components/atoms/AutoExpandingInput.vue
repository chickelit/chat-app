<template>
  <div
    class="auto-expanding-input"
    role="textbox"
    contenteditable="true"
    @keydown="$emit('keydown', $event)"
  ></div>
</template>

<style lang="scss" scoped>
.auto-expanding-input {
  display: inline-block;
  min-height: 1rem;
  max-height: 7rem;
  width: auto;
  color: color("light", "darker");
  overflow-y: auto;
  outline: none;
  background: color("dark");
  padding: 0.25rem 0.5rem;
  border-radius: 0.3125rem;
  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 0.25rem;
    background: color("dark", "lighter");
  }
  &::-webkit-scrollbar-thumb {
    background: color("dark", "lightest");
    border-radius: 0.25rem;
  }
}
</style>
