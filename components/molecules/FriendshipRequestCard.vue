<template>
  <div class="friendship-request-card" @mouseleave="disableDropdown">
    <Wrapper class="wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="friendship-request-card-dropdown">
        <div role="button" aria-label="Aceitar pedido de amizade de <username>">
          Aceitar o pedido
        </div>
        <div
          class="danger"
          role="button"
          aria-label="Recusar pedido de amizade de <username>"
        >
          Recusar o pedido
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
.username {
  width: 100;
  .skeleton-text {
    width: 75%;
    height: 1.125rem;
    border-radius: 0.125rem;
  }
}
.friendship-request-card {
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
