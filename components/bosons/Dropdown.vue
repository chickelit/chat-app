<template>
  <div class="dropdown">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  opacity: 0;
  pointer-events: none;
  padding: 0.3125rem;
  position: absolute;
  right: 2.25rem;
  top: 1.5rem;
  background: color("light", "darkest");
  border-radius: 0.3125rem;
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  min-width: 12rem;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.25rem;
  transition: all 0.15s linear;
  transform: translateX(-10px);
  div {
    cursor: pointer;
    position: relative;
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    color: color("dark", "darkest");
    transition: all 0.15s linear;
    &:hover {
      color: color("dark", "darker");
    }
    &:nth-last-child(1) {
      &:after {
        height: 0;
      }
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -0.0625rem;
      left: 0;
      width: 100%;
      height: 1px;
      background: color("dark", "darkest");
    }
  }
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }
}
</style>
