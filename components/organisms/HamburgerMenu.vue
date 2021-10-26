<template>
  <div class="hamburger-menu">
    <nav>
      <ul>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/" class="hamburger-link">Home</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/friends" class="hamburger-link">Amigos</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/conversations" class="hamburger-link">Conversas</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/groups" class="hamburger-link">Grupos</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/friendshipRequests" class="hamburger-link">Pedidos de amizade</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/blocked" class="hamburger-link">Bloqueados</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/profile" class="hamburger-link">Meu perfil</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    active() {
      const hamburgerMenu = document.querySelector(
        ".hamburger-menu"
      ) as Element;

      if (this.active) {
        hamburgerMenu.classList.add("active");
      } else {
        hamburgerMenu.classList.remove("active");
      }
    },
  }
});
</script>

<style lang="scss" scoped>
.hamburger-menu {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  position: absolute;
  right: 0;
  top: 4.25rem;
  height: 100%;
  width: 15rem;
  background: color("primary", "lighter");
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }
  nav {
    display: grid;
    ul {
      margin: 0;
      padding: 0;
      margin-block-end: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: max-content;
      grid-auto-flow: row;
      .hamburger-item {
        .hamburger-link-wrapper {
          position: relative;
          width: 100%;
          padding: 0.5rem 1rem;
          &:hover {
            background: color("primary", "lightest");
            color: color("light");
          }
        }
        .hamburger-link {
          cursor: pointer;
          font-size: 1.25rem;
          font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
          color: color("light", "darkest");
          text-justify: start;
          display: grid;
          justify-items: start;
        }
      }
    }
  }
}
</style>
