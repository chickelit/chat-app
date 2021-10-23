<template>
  <div class="navigation">
    <Container class="container">
      <h1 class="title">ChatApp</h1>
      <nav class="nav">
        <ul>
          <li class="nav-item">
            <button
              :class="['nav-link', 'dropdown-button']"
              @focus="activateDropdown"
              @blur="unactivateDropdown"
            >
              Amigos
              <div class="dropdown">
                <ul class="dropdown-items">
                  <li class="dropdown-item">
                    <a class="dropdown-link">Todos</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link">Pendente</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link">Bloqueados</a>
                  </li>
                </ul>
              </div>
            </button>
          </li>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Conversas</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Grupos</NuxtLink>
          </li>
          <li class="nav-item">
            <a href="">
              <div class="avatar skeleton"></div>
            </a>
          </li>
        </ul>
      </nav>
      <button class="hamburger-button" @click="$emit('toggleHamburgerMenu')">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    activateDropdown() {
      const dropdown = document.querySelector(".dropdown") as Element;

      if (!dropdown.classList.contains("dropdown-active")) {
        dropdown.classList.add("dropdown-active");
      }
    },
    unactivateDropdown() {
      const dropdown = document.querySelector(".dropdown") as Element;

      if (dropdown.classList.contains("dropdown-active")) {
        dropdown.classList.remove("dropdown-active");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  height: 2.5rem;
  position: relative;
  width: 100%;
  background: color("primary");
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    align-items: center;
    .title {
      cursor: pointer;
      font-family: Tahoma, Arial, Helvetica, sans-serif;
      font-size: 2rem;
      font-weight: 500;
      justify-self: start;
      color: color("light", "darkest");
      &:hover {
        color: color("light");
      }
    }
    nav {
      display: grid;
      align-items: center;
      justify-self: end;
      @include screen("small") {
        display: none;
      }
      ul {
        margin: 0;
        display: grid;
        grid-auto-columns: max-content;
        grid-template-rows: max-content;
        grid-auto-flow: column;
        gap: 2rem;
        align-items: center;
        .nav-item {
          position: relative;
          .avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 100%;
          }
          .nav-link {
            font-size: 1rem;
            font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
            color: color("light", "darkest");
            cursor: pointer;
            &:hover {
              color: color("light");
            }
          }
          .dropdown {
            border-radius: 0.3rem;
            position: absolute;
            right: 0;
            top: 2.7rem;
            background: color("light", "darkest");
            width: 10rem;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px);
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
          .dropdown-active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
            border-radius: 0 0 0.3rem 0.3rem;
          }
        }
      }
    }
    .hamburger-button {
      display: none;
      justify-self: end;
      @include screen("small") {
        display: grid;
        cursor: pointer;
        width: 2rem;
        height: auto;
        display: grid;
        grid-auto-rows: 0.3125rem;
        grid-auto-flow: row;
        gap: 0.3125rem;
      }
      .bar {
        width: 100%;
        height: 100%;
        background: color("light", "darkest");
        border-radius: 1rem;
      }
      &:hover {
        .bar {
          background: color("light");
        }
      }
    }
  }
}
</style>
