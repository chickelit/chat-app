<template>
  <div
    :class="[
      'hamburger-menu',
      { active, dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <CancelButton class="cancel" @click="$emit('leaveHamburgerMenu')" />
    <nav class="navigation">
      <ul class="navigation-items">
        <li class="navigation-item">
          <NuxtLink to="/profile" @click.native.prevent>Meu perfil</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/conversations" @click.native.prevent
            >Conversas</NuxtLink
          >
        </li>
        <li class="navigation-item">
          <NuxtLink to="/friendships" @click.native.prevent>Amigos</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/friendships/requests" @click.native.prevent
            >Pendentes</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.hamburger-menu {
  background: color("dark", "darkest");
  position: fixed;
  z-index: 5000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  /* hiding the menu */
  pointer-events: none;
  transform: translateX(100%);
  transition: transform 0.3s linear;
  /* ... */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  .navigation {
    height: 70%;
    width: 70%;
    display: grid;
    align-items: center;
    justify-items: center;
    .navigation-items {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      align-items: center;
      justify-items: center;
      gap: 0.5rem;
      .navigation-item {
        a {
          color: color("light", "darker");
          transition: all 0.15s linear;
          font-size: 1.5rem;
          &:hover {
            color: color("light");
          }
          &.nuxt-link-exact-active {
            position: relative;
            color: color("primary", "lighter");
          }
        }
      }
    }
  }
  &.active {
    @include screen("medium") {
      pointer-events: auto;
      transform: translateX(0);
    }
  }
  .cancel {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0.75rem;
    width: 3rem;
    aspect-ratio: 1 / 1;
  }
  &.light {
    background: color("light", "lightest");
    .navigation {
      .navigation-items {
        .navigation-item {
          a {
            color: color("dark");
            &:hover {
              color: color("dark", "lightest");
            }
            &.nuxt-link-exact-active {
              color: color("primary");
            }
          }
        }
      }
    }
  }
}
</style>
