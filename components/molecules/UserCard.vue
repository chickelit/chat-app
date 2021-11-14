<template>
  <div class="user-card" @mouseleave="disableDropdown">
    <Wrapper class="user-card-wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="user-card-dropdown">
        <div
          role="button"
          aria-label="Enviar pedido de amizade para <username>"
        >
          Enviar pedido de amizade
        </div>
      </Dropdown>
    </Wrapper>
  </div>
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
      const userCardDropdown = document.querySelectorAll(".user-card-dropdown")[
        this.index
      ] as Element;

      userCardDropdown.classList.toggle("active");
    },
    disableDropdown() {
      const userCardDropdown = document.querySelectorAll(".user-card-dropdown")[
        this.index
      ] as Element;

      userCardDropdown.classList.remove("active");
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
}
.user-card-dropdown {
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
  .user-card-dropdown-item {
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
.username {
  width: 100%;
  .skeleton-text {
    width: 75%;
    height: 1.125rem;
    border-radius: 0.125rem;
  }
}
.user-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: color("secondary", "lighter");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  justify-items: center;
  transition: all 0.15s linear;
  .wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
  }
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
