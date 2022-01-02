<template>
  <nav
    :class="[
      'navigation',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <Wrapper class="wrapper">
      <NuxtLink class="profile" to="/profile" @click.native.prevent>
        <Avatar :src="$url" />
      </NuxtLink>
      <ul class="navigation-items">
        <li class="navigation-item">
          <NuxtLink to="/conversations" @click.native.prevent>Conversas</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/groups" @click.native.prevent>Grupos</NuxtLink>
        </li>
        <li class="navigation-item">
          <NuxtLink to="/friendships" @click.native.prevent>Amigos</NuxtLink>
        </li>
      </ul>
      <div class="hamburger-button" @click="toggleHamburgerMenu">
        <div class="hamburger"></div>
      </div>
    </Wrapper>
    <HamburgerMenu
      :active="hamburgerMenuActive"
      @leaveHamburgerMenu="toggleHamburgerMenu"
    />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { mode, profile } from "~/store";
export default Vue.extend({
  data() {
    return {
      hamburgerMenuActive: false,
    };
  },
  computed: {
    $url() {
      return profile.$single.avatar ? profile.$single.avatar.url : "";
    },
    $mode() {
      return mode.$mode;
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.hamburgerMenuActive = !this.hamburgerMenuActive;
    },
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  background: color("dark", "darkest");
  display: grid;
  padding: 0 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  .wrapper {
    display: grid;
    grid-template-columns: 3rem auto;
    align-items: center;
    justify-items: space-between;
    gap: 3rem;
    .profile {
      width: 100%;
      padding: 0.5rem 0;
    }
  }
  .navigation-items {
    width: max-content;
    justify-self: end;
    height: 100%;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    justify-content: end;
    gap: 2rem;
    @include screen("small") {
      display: none;
    }
    .navigation-item {
      position: relative;
      height: 100%;
      display: grid;
      align-content: center;
      a {
        height: 100%;
        color: color("light", "darker");
        font-size: 1.125rem;
        transition: all 0.15s linear;
        &:hover {
          color: color("light");
        }
        &.nuxt-link-active {
          color: color("primary", "lighter");
          &:after {
            pointer-events: none;
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 0.3125rem;
            width: 100%;
            background: color("primary", "lighter");
            border-radius: 0.15625rem;
          }
        }
      }
    }
  }
  .hamburger-button {
    cursor: pointer;
    width: 3rem;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    display: none;
    align-items: center;
    justify-items: center;
    justify-self: end;
    @include screen("small") {
      display: grid;
    }
    &:hover {
      .hamburger,
      .hamburger::after,
      .hamburger::before {
        background: color("light");
      }
    }
    .hamburger,
    .hamburger::after,
    .hamburger::before {
      height: 0.3125rem;
      background: color("light", "darker");
      border-radius: 0.15625rem;
      transition: all 0.15s linear;
    }
    .hamburger {
      position: relative;
      width: 80%;
      &:before {
        transform: translateY(-12px);
      }
      &:after {
        transform: translateY(12px);
      }
    }
    .hamburger::after,
    .hamburger::before {
      content: "";
      position: absolute;
      width: 100%;
    }
  }
  &.light {
    background: color("light", "lightest");
    .navigation-items {
      .navigation-item {
        a {
          color: color("dark", "lightest");
          &:hover {
            color: color("dark");
          }
          &.nuxt-link-active {
            color: color("primary", "lighter");
            &:after {
              content: "";
              background: color("primary", "lighter");
            }
          }
        }
      }
    }
    .hamburger-button {
      .hamburger,
      .hamburger::after,
      .hamburger::before {
        background: color("dark", "lightest");
      }
      &:hover {
        .hamburger,
        .hamburger::after,
        .hamburger::before {
          background: color("dark");
        }
      }
    }
  }
}
</style>
