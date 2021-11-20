<template>
  <div class="friend-card" @mouseleave="disableDropdown">
    <div class="wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="friend-card-dropdown">
        <div
          role="button"
          aria-label="Conversar com <username>"
          @click="
            setView({
              newView: 'ConversationChat',
              navigationActiveClass: 'friends-anchor',
            })
          "
        >
          Conversar com zezin
        </div>
        <div
          class="danger"
          role="button"
          aria-label="Desfazer amizade com <username>"
        >
          Desfazer amizade
        </div>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      setView,
    };
  },
  methods: {
    toggleDropdown() {
      const friendCardDropdown = document.querySelectorAll(
        ".friend-card-dropdown"
      )[this.index] as Element;

      friendCardDropdown.classList.toggle("active");
    },
    disableDropdown() {
      const friendCardDropdown = document.querySelectorAll(
        ".friend-card-dropdown"
      )[this.index] as Element;

      friendCardDropdown.classList.remove("active");
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
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
.friend-card {
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
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    .friend-card-dropdown {
      right: 2.125rem;
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
