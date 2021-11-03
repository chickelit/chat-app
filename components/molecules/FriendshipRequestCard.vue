<template>
  <a class="friendship-request-card" @mouseleave="disableDropdown">
    <div class="avatar skeleton"></div>
    <div class="container">
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    <div class="options" @click="toggleDropdown">
      <div class="wrapper">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="friendship-request-card-dropdown">
      <div class="friendship-request-card-dropdown-item danger">
        Recusar o pedido
      </div>
      <div class="friendship-request-card-dropdown-item">Aceitar o pedido</div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleDropdown() {
      const friendshipRequestCardDropdown = document.querySelectorAll(
        ".friendship-request-card-dropdown"
      )[this.index] as Element;

      friendshipRequestCardDropdown.classList.toggle("active");
    },
    disableDropdown() {
      const friendshipRequestCardDropdown = document.querySelectorAll(
        ".friendship-request-card-dropdown"
      )[this.index] as Element;

      friendshipRequestCardDropdown.classList.remove("active");
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
}
.friendship-request-card-dropdown {
  opacity: 0;
  pointer-events: none;
  padding: 0.3125rem;
  z-index: 1;
  position: absolute;
  right: 2.4rem;
  top: 2.5rem;
  background: color("dark", "lightest");
  border-radius: 0.3125rem;
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  min-width: 12rem;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.25rem;
  transition: all 0.15s linear;
  transform: translateX(-10px);
  .friendship-request-card-dropdown-item {
    cursor: pointer;
    position: relative;
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    color: color("dark", "darkest");
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
.options {
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  background: color("secondary", "darker");
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
.username {
  width: 55%;
  .skeleton-text {
    width: 16rem;
    height: 1rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
  }
}
.friendship-request-card {
  position: relative;
  padding: 0.5rem 1rem;
  background: color("secondary", "lighter");
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("secondary", "lightest");
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
}
</style>
