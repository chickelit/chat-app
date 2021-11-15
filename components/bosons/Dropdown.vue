<template>
  <div class="dropdown">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-10px);
  padding: 0.3125rem;
  position: absolute;
  background: color("dark", "darker");
  border-radius: 0.3125rem;
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  min-width: 12rem;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.25rem;
  transition: all 0.15s linear;
  div {
    cursor: pointer;
    position: relative;
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    color: color("light", "darker");
    transition: all 0.15s linear;
    &:hover {
      color: color("light");
    }
  }
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }
}
</style>
