<template>
  <div class="user-card" @mouseleave="disableDropdown">
    <Wrapper class="user-card-wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="user-card-dropdown">
        <button
          aria-label="Enviar pedido de amizade para <username>"
        >
          Enviar pedido de amizade
        </button>
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
    .user-card-dropdown {
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
