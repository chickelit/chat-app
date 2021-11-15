<template>
  <div
    :class="['group-card', { mine }]"
    aria-label="Conversar no grupo <title>"
    role="link"
    @mouseleave="disableDropdown"
  >
    <div class="group-card-wrapper">
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
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="group-card-dropdown">
        <div role="button" aria-label="Ver dados do grupo">
          Ver dados do grupo
        </div>
      </Dropdown>
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
.group-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: color("dark", "lighter");
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("dark", "lightest");
  }
  .group-card-wrapper {
    position: relative;
    width: 60%;
    max-width: 48rem;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    @include screen("medium") {
      width: 100%;
    }
    .group-card-dropdown {
      right: 2.25rem;
      top: 1.6rem;
    }
  }
  .data-container {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
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
        width: 75%;
        height: 1rem;
        border-radius: 0.125rem;
      }
    }
  }
}
</style>
