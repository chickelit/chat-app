<template>
  <div class="options" aria-label="Opções" role="button"  @click="$emit('click')">
    <div class="wrapper">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.options {
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 2.4375rem;
  height: 2.4375rem;
  background: color("primary", "lightest");
  border-radius: 100%;
  display: grid;
  align-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("secondary");
  }
  .wrapper {
    display: grid;
    grid-auto-rows: max-content;
    align-items: center;
    justify-items: center;
    gap: 0.125rem;
    .dot {
      width: 0.3125rem;
      height: 0.3125rem;
      background: color("dark", "lightest");
      border-radius: 100%;
    }
  }
}
</style>
