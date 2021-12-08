<template>
  <div class="friend-card" @mouseleave="disableDropdown">
    <div v-if="friend" class="wrapper">
      <div class="container" @click="toggleDropdown">
        <div v-if="friend.avatar" class="avatar">
          <img :src="friend.avatar.url" :alt="`Avatar de ${friend.username}`" />
        </div>
        <div v-else class="avatar skeleton"></div>
        <div class="username">
          {{ friend.username }}
        </div>
      </div>
      <Dropdown class="friend-card-dropdown">
        <button
          :aria-label="`Conversar com ${friend.username}`"
          @click="
            setView({
              newView: 'ConversationChat',
              previousView: $view,
              previousNavigationActiveClass: $navigationActiveClass,
            })
          "
        >
          Conversar com {{ friend.username }}
        </button>
        <button
          class="danger"
          :aria-label="`Desfazer amizade com ${friend.username}`"
        >
          Desfazer amizade
        </button>
      </Dropdown>
    </div>
    <div v-else class="wrapper">
      <div class="container">
        <div class="avatar skeleton"></div>
        <div class="username">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { setView } from "@/utils";
import { view } from "~/store";
import { User } from "~/models";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
    friend: {
      type: Object,
      required: false,
    } as PropOptions<User>,
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
      if (this.friend) {
        const friendCardDropdown = document.querySelectorAll(
          ".friend-card-dropdown"
        )[this.index] as Element;

        friendCardDropdown.classList.remove("active");
      }
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
  font-size: 1.125rem;
  color: color("light", "darker");
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
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
}
</style>
