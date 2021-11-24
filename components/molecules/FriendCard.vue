<template>
  <div class="friend-card" @mouseleave="disableDropdown">
    <div class="wrapper">
      <div class="container" @click="toggleDropdown">
        <div class="avatar skeleton"></div>
        <div class="username">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
      <Dropdown class="friend-card-dropdown">
        <button
          aria-label="Conversar com <username>"
          @click="
            setView({
              newView: 'ConversationChat',
              previousView: $view,
              previousNavigationActiveClass: $navigationActiveClass,
            })
          "
        >
          Conversar com zezin
        </button>
        <button
          class="danger"
          aria-label="Desfazer amizade com <username>"
        >
          Desfazer amizade
        </button>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { view } from "~/store";
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
  computed: {
    $view() {
      return view.$view;
    },
    $navigationActiveClass() {
      return view.$navigationActiveClass;
    },
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
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 0.5rem;
  justify-items: center;
  transition: all 0.15s linear;
  .wrapper {
    width: 100%;
    height: max-content;
    position: relative;
    .container {
      padding: 0.5rem 1rem;
      display: grid;
      grid-template-columns: 3rem 1fr;
      grid-template-rows: 3rem;
      gap: 0.5rem;
      align-items: center;
    }
    .friend-card-dropdown {
      right: 1rem;
      top: 1.75rem;
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
