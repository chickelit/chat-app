<template>
  <div class="hamburger-menu">
    <nav class="main-nav">
      <ul class="main-ul">
        <li class="nav-item" @click="toggleDropdown(0)">
          <a :class="['nav-link', 'dropdown-button']">Amigos</a>
          <div class="hamburger-dropdown">
            <ul>
              <li>
                <a class="dropdown-link">Todos</a>
              </li>
              <li>
                <a class="dropdown-link">Pendente</a>
              </li>
              <li>
                <a class="dropdown-link">Bloqueados</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link">Conversas</a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link">Grupos</a>
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

        const dropdown = document.querySelector(
          ".hamburger-dropdown"
        ) as Element;

        if (dropdown.classList.contains("hamburger-dropdown-active")) {
          dropdown.classList.toggle("hamburger-dropdown-active");
        }
      }
    },
  },
  methods: {
    toggleDropdown(index: number) {
      const dropdowns = document.querySelectorAll(".hamburger-dropdown");
      const dropdown = dropdowns[index];

      if (dropdown.classList.contains("hamburger-dropdown-active")) {
        dropdown.classList.toggle("hamburger-dropdown-active");
      } else {
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("hamburger-dropdown-active");
        });

        dropdown.classList.toggle("hamburger-dropdown-active");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.hamburger-menu {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  @include screen("small") {
    height: 100%;
    width: 40%;
    background: color("primary", "lighter");
    position: absolute;
    right: 0;
    box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    &.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    }
  }
  .main-nav {
    display: grid;
    .main-ul {
      margin: 0;
      padding: 0.3125rem;
      margin-block-end: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: max-content;
      grid-auto-flow: row;
      gap: 0.25rem;
      .nav-item {
        position: relative;
        padding: 0.3rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        &:hover {
          background: color("primary", "lightest");
        }
        .nav-link {
          font-size: 1.25rem;
          font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
          color: color("light", "darkest");
          &:hover {
            color: color("light");
          }
        }
        .hamburger-dropdown {
          border-radius: 0.3rem;
          position: absolute;
          left: -10.3125rem;
          top: -0.3125rem;
          background: color("light", "darkest");
          width: 10rem;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-10px);
          transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
          ul {
            li {
              display: grid;
              justify-content: end;
              width: 100%;
              position: relative;
              cursor: pointer;
              a {
                font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
                color: color("dark");
                &:hover {
                  color: color("dark", "darkest");
                }
              }
              ::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                background: color("dark", "lightest");
                bottom: 0;
                left: 0;
              }
            }
            :nth-last-child(1) {
              ::after {
                width: 0;
                height: 0;
              }
            }
            padding: 0.5rem;
            margin: 0;
            display: grid;
            grid-auto-rows: max-content;
            grid-auto-flow: row;
            grid-template-columns: 1fr;
            justify-items: end;
            gap: 0.25rem;
          }
        }
        .hamburger-dropdown-active {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
          border-radius: 0 0 0.3rem 0.3rem;
        }
      }
    }
  }
}
</style>
