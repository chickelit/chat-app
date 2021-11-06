<template>
  <div
    :class="['group-card', { mine }]"
    aria-label="Conversar no grupo <title>"
    role="link"
    @mouseleave="disableDropdown"
  >
    <div class="data-container" @click="$emit('click')">
      <div class="cover skeleton" />
      <div class="container">
        <div class="title">
          <div class="skeleton skeleton-text"></div>
        </div>
        <div class="latest-message">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
    <div
      class="options"
      aria-label="Opções do grupo"
      role="button"
      @click="toggleDropdown"
    >
      <div class="wrapper">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="group-card-dropdown">
      <div
        aria-label="Ver dados do grupo"
        role="button"
        class="group-card-dropdown-item"
      >
        Ver dados do grupo
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    mine: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleDropdown() {
      const groupCardDropdown = document.querySelectorAll(
        ".group-card-dropdown"
      )[this.index] as Element;

      groupCardDropdown.classList.toggle("active");
    },
    disableDropdown() {
      const groupCardDropdown = document.querySelectorAll(
        ".group-card-dropdown"
      )[this.index] as Element;

      groupCardDropdown.classList.remove("active");
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
}
.group-card-dropdown {
  opacity: 0;
  pointer-events: none;
  padding: 0.3125rem;
  z-index: 1;
  position: absolute;
  right: 3rem;
  top: 1.5rem;
  background: color("dark", "lightest");
  border-radius: 0.3125rem;
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  min-width: 12rem;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.25rem;
  transition: all 0.15s linear;
  transform: translateX(-10px);
  .group-card-dropdown-item {
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
.group-card {
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  background: color("secondary", "lighter");
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  &:hover {
    background: color("secondary", "lightest");
  }
  .data-container {
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    transition: all 0.15s linear;
    .cover {
      height: 100%;
      width: 100%;
      border-radius: 100%;
    }
    .title {
      width: 100%;
      .skeleton-text {
        width: 60%;
        height: 1.125rem;
        margin-bottom: 0.25rem;
        border-radius: 0.125rem;
      }
    }
    .latest-message {
      width: 100%;
      .skeleton-text {
        width: 70%;
        height: 1rem;
        border-radius: 0.125rem;
      }
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
}
</style>
