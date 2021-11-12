<template>
  <nav class="navigation">
    <ul class="navigation-items">
      <li
        :class="['navigation-item', 'active', 'conversations-anchor']"
        aria-label="Ir para a listagem de conversas"
        @click="
          setView('conversations-anchor');
          $emit('changeView', 'Conversations');
        "
      >
        Conversas
      </li>
      <li
        :class="[
          'navigation-item',
          'dropdown-button',
          'groups-dropdown-button',
        ]"
        aria-label="Abrir menu dos grupos"
        @mouseleave="disableDropdown('groups-dropdown')"
      >
        <div
          class="dropdown-button-text"
          @click="toggleDropdown('groups-dropdown')"
        >
          Grupos
        </div>
        <div :class="['groups-dropdown', 'dropdown']">
          <nav>
            <ul>
              <li>
                <div
                  class="dropdown-item"
                  @click="
                    $emit('changeView', 'Groups');
                    setView('groups-dropdown-button');
                  "
                >
                  Todos
                </div>
              </li>
              <li>
                <div class="dropdown-item">Criar grupo</div>
              </li>
            </ul>
          </nav>
        </div>
      </li>
      <li
        :class="[
          'navigation-item',
          'dropdown-button',
          'friends-dropdown-button',
        ]"
        aria-label="Ir para a listagem de amigos"
        @mouseleave="disableDropdown('friends-dropdown')"
      >
        <div
          class="dropdown-button-text"
          @click="toggleDropdown('friends-dropdown')"
        >
          Amigos
        </div>
        <div :class="['friends-dropdown', 'dropdown']">
          <nav>
            <ul>
              <li>
                <div
                  class="dropdown-item"
                  @click="
                    $emit('changeView', 'Friends');
                    setView('friends-dropdown-button');
                  "
                >
                  Todos
                </div>
              </li>
              <li>
                <div
                  class="dropdown-item"
                  @click="
                    $emit('changeView', 'FriendshipRequests');
                    setView('friends-dropdown-button');
                  "
                >
                  Pendentes
                </div>
              </li>
              <li>
                <div class="dropdown-item">Adicionar</div>
              </li>
            </ul>
          </nav>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    setView(elementClass: string) {
      const element = document.querySelector(`.${elementClass}`);
      const navigationItems = document.querySelectorAll(".navigation-item")!;

      navigationItems.forEach((item) => {
        item.classList.remove("active");
      });

      if (!element?.classList.contains("active")) {
        element?.classList.add("active");
      }
    },
    toggleDropdown(elementClass: string) {
      const dropdown = document.querySelector(`.${elementClass}`)!;

      dropdown.classList.toggle("active");
    },
    disableDropdown(elementClass: string) {
      const dropdown = document.querySelector(`.${elementClass}`)!;

      dropdown.classList.remove("active");
    },
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  z-index: 1;
  position: relative;
  display: grid;
  background: color("primary", "lighter");
  height: 2.5rem;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-items: center;
  .navigation-items {
    width: 60%;
    max-width: 48rem;
    height: 100%;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    align-items: center;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    @include screen("medium") {
      width: 100%;
    }
    .navigation-item {
      height: 100%;
      width: 100%;
      position: relative;
      cursor: pointer;
      font-family: "Acumin Regular";
      color: color("light", "darkest");
      font-weight: 600;
      font-size: 1.125rem;
      transition: all 0.15s linear;
      display: grid;
      align-items: center;
      justify-items: center;
      &:hover {
        background: color("primary", "lightest");
        color: color("light");
      }
      &:after {
        content: "";
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 0.1875rem;
        background: color("light", "darkest");
        bottom: 0;
        left: 0;
        border-radius: 0.5rem;
        justify-self: center;
        transition: opacity 0.15s linear;
      }
      &.active {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
.dropdown-button {
  position: relative;
  .dropdown-button-text {
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
  }
}
.dropdown {
  opacity: 0;
  transform: translateX(-10px);
  pointer-events: none;
  z-index: -1;
  background: color("light", "darkest");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0.3125rem 0.3125rem;
  top: 100%;
  right: 0;
  width: 100%;
  position: absolute;
  transition: all 0.15s linear;
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
  }
  nav {
    ul {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }
  }
  .dropdown-item {
    cursor: pointer;
    position: relative;
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    color: color("dark", "darkest");
    padding: 0.375rem;
    transition: all 0.15s linear;
    font-weight: 500;
    &:hover {
      color: color("dark", "darker");
    }
  }
}
</style>
