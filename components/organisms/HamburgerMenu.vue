<template>
  <div class="hamburger-menu">
    <nav>
      <ul>
        <li class="hamburger-item">
          <div
            :class="['hamburger-link-wrapper', 'hamburger-dropdown-button']"
            @click="toggleDropdown"
          >
            <a :class="['hamburger-link', 'hamburger-dropdown-button']"
              >Amigos</a
            >
          </div>
          <div class="hamburger-dropdown">
            <ul class="hamburger-dropdown-items">
              <li class="hamburger-dropdown-item">
                <a class="hamburger-dropdown-link">Todos</a>
              </li>
              <li class="hamburger-dropdown-item">
                <a class="hamburger-dropdown-link">Pendente</a>
              </li>
              <li class="hamburger-dropdown-item">
                <a class="hamburger-dropdown-link">Bloqueados</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/" class="hamburger-link">Conversas</a>
          </div>
        </li>
        <li class="hamburger-item">
          <div class="hamburger-link-wrapper">
            <a href="/" class="hamburger-link">Grupos</a>
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

        const dropdown = document.querySelector(
          ".hamburger-dropdown"
        ) as Element;

        if (dropdown.classList.contains("hamburger-dropdown-active")) {
          dropdown.classList.toggle("hamburger-dropdown-active");
        }
      }
    },
  },
  mounted() {
    window.addEventListener("click", (event: Event) => {
      event.preventDefault();

      const target = event.target as Element;
      const whiteList = [
        "hamburger-dropdown-button",
        "hamburger-dropdown-link",
        "hamburger-dropdown-items",
        "hamburger-dropdown-item",
      ];

      const classList = target.classList.value.split(" ") as string[];

      if (
        !whiteList.some((whiteListClass) => {
          return (
            classList.filter((listClass) => listClass === whiteListClass)
              .length > 0
          );
        })
      ) {
        const dropdown = document.querySelector(
          ".hamburger-dropdown"
        ) as Element;

        dropdown.classList.remove("hamburger-dropdown-active");
      }
    });
  },
  methods: {
    toggleDropdown() {
      const dropdown = document.querySelector(".hamburger-dropdown") as Element;

      dropdown.classList.toggle("hamburger-dropdown-active");
    },
  },
});
</script>

<style lang="scss" scoped>
.hamburger-menu {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  position: absolute;
  right: 0;
  top: 0;
  @include screen("small") {
    height: 100%;
    width: 40%;
    background: color("primary", "lighter");
    box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    &.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    }
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
          width: 100%;
          padding: 0.5rem 1rem;
          &:hover {
            background: color("primary", "lightest");
            color: color("light");
          }
          .hamburger-link {
            position: relative;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 1.25rem;
            font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
            color: color("light", "darkest");
          }
        }
        .hamburger-dropdown {
          position: absolute;
          left: -10rem;
          top: 0;
          background: color("light", "darkest");
          width: 10rem;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-10px);
          transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
          .hamburger-dropdown-items {
            .hamburger-dropdown-item {
              display: grid;
              justify-content: end;
              width: 100%;
              position: relative;
              cursor: pointer;
              .hamburger-dropdown-link {
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
          border-radius: 0 0 0 0.3rem;
        }
      }
    }
  }
}
</style>
