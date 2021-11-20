<template>
  <div class="member-card" @mouseleave="disableDropdown">
    <Wrapper class="member-card-wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <OptionsButton v-if="showOptions" @click="toggleDropdown" />
      <Dropdown class="member-card-dropdown">
        <div
          role="button"
          aria-label="Remover <username> do grupo"
          class="danger"
        >
          Remover zezin do grupo
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
    showOptions: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleDropdown() {
      const memberCardDropdown = document.querySelectorAll(
        ".member-card-dropdown"
      )[this.index] as Element;

      memberCardDropdown.classList.toggle("active");
    },
    disableDropdown() {
      const memberCardDropdown = document.querySelectorAll(
        ".member-card-dropdown"
      )[this.index] as Element;

      memberCardDropdown.classList.remove("active");
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
  transition: all 0.15s linear;
  &:hover {
    color: color("danger", "lighter") !important;
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
.member-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: color("dark");
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
    .member-card-dropdown {
      right: 2.25rem;
      top: 1.6rem;
    }
  }
  &:hover {
    background: color("dark", "lighter");
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
}
</style>
