<template>
  <div class="navigation">
    <Container class="container">
      <h1 class="title">ChatApp</h1>
      <nav class="main-nav">
        <ul class="main-ul">
          <li>
            <a
              :class="['nav-item', 'dropdown-button']"
              @click="toggleDropdown(0)"
              >Amigos</a
            >
            <div class="dropdown">
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
          <li>
            <NuxtLink to="/" class="nav-item">Conversas</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="nav-item">Grupos</NuxtLink>
          </li>
        </ul>
      </nav>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {
    window.addEventListener("click", (event: Event) => {
      event.preventDefault();

      const target = event.target as Element;

      if (
        !target.classList.contains("dropdown-button") &&
        !target.classList.contains("dropdown-link")
      ) {
        const dropdowns = document.querySelectorAll(".dropdown");

        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("dropdown-active");
        });
      }
    });
  },
  methods: {
    toggleDropdown(index: number) {
      const dropdowns = document.querySelectorAll(".dropdown");
      const dropdown = dropdowns[index];

      if (dropdown.classList.contains("dropdown-active")) {
        dropdown.classList.toggle("dropdown-active");
      } else {
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("dropdown-active");
        });

        dropdown.classList.toggle("dropdown-active");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  background: color("primary");
  display: grid;
  justify-items: center;
  .container {
    padding: 0.75rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    .title {
      cursor: pointer;
      font-family: "Tahoma";
      font-size: 2rem;
      font-weight: 500;
      color: color("light", "darkest");
      &:hover {
        color: color("light");
      }
    }
    .main-nav {
      display: grid;
      align-items: center;
      justify-self: end;
      .main-ul {
        margin: 0;
        display: grid;
        grid-auto-columns: max-content;
        grid-template-rows: max-content;
        grid-auto-flow: column;
        gap: 2rem;
        align-items: center;
        li {
          position: relative;
          .nav-item {
            font-size: 1rem;
            font-family: "Acumin Regular";
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
            top: 2.45rem;
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
                  font-family: "Acumin Regular";
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
            transform: translateY(0);
            pointer-events: auto;
            border-radius: 0 0 0.3rem 0.3rem;
          }
        }
      }
    }
  }
}
</style>
