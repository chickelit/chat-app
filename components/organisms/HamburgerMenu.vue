<template>
  <div
    :class="[
      'hamburger-menu',
      { active, dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <div class="leave" @click="$emit('leaveHamburgerMenu')">
      <div class="layer"></div>
    </div>
    <nav class="navigation">
      <ul class="navigation-items">
        <li class="navigation-item">
          <NuxtLink to="/profile">Meu perfil</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/conversations">Conversas</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/groups">Grupos</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/friends">Amigos</NuxtLink>
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
          &.nuxt-link-active {
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
  .leave {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    justify-items: center;
    transition: all 0.15s linear;
    .layer {
      position: relative;
      width: 60%;
      height: 0.3125rem;
      background: color("light", "darker");
      border-radius: 0.15625rem;
      transition: all 0.15s linear;
      transform: rotate(45deg);
      &:after {
        content: "";
        position: absolute;
        height: 0.3125rem;
        width: 100%;
        background: color("light", "darker");
        border-radius: 0.15625rem;
        transition: all 0.15s linear;
        transform: rotate(90deg);
      }
    }
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
            &.nuxt-link-active {
              color: color("primary");
            }
          }
        }
      }
    }
    .leave {
      .layer {
        background: color("dark");
        &:after {
          background: color("dark");
        }
      }
      &:hover {
        .layer {
          background: color("dark", "lightest");
          &:after {
            background: color("dark", "lightest");
          }
        }
      }
    }
  }
}
</style>
