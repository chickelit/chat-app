<template>
  <nav class="navigation">
    <Wrapper>
      <ul class="navigation-items">
        <li
          :class="[
            'navigation-item',
            'conversations-anchor',
            { active: $navigationActiveClass === 'conversations-anchor' },
          ]"
          aria-label="Ir para a listagem de conversas"
          @click="
            setView({
              newView: 'Conversations',
              navigationActiveClass: 'conversations-anchor',
            })
          "
        >
          Conversas
        </li>
        <li
          :class="[
            'navigation-item',
            'dropdown-button',
            'groups-dropdown-button',
            'groups-anchor',
            { active: $navigationActiveClass === 'groups-anchor' },
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
                    aria-label="Ir para a listagem de grupos"
                    @click="
                      setView({
                        newView: 'Groups',
                        navigationActiveClass: 'groups-anchor',
                      })
                    "
                  >
                    Todos
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    aria-label="Criar grupo"
                    @click="
                      setView({
                        newView: 'CreateGroup',
                        navigationActiveClass: 'groups-anchor',
                      })
                    "
                  >
                    Criar grupo
                  </div>
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
            'friends-anchor',
            { active: $navigationActiveClass === 'friends-anchor' },
          ]"
          aria-label="Abrir menu de amigos"
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
                    aria-label="Ir para a listagem de amigos"
                    @click="
                      setView({
                        newView: 'Friends',
                        navigationActiveClass: 'friends-anchor',
                      })
                    "
                  >
                    Todos
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    aria-label="Ir para a listagem de pedidos de amizade pendentes"
                    @click="
                      setView({
                        newView: 'FriendshipRequests',
                        navigationActiveClass: 'friends-anchor',
                      })
                    "
                  >
                    Pendentes
                  </div>
                </li>
                <li>
                  <div
                    class="dropdown-item"
                    aria-label="Ir para a pesquisa de usuário"
                    @click="
                      setView({
                        newView: 'UserSearch',
                        navigationActiveClass: 'friends-anchor',
                      })
                    "
                  >
                    Adicionar
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </li>
      </ul>
    </Wrapper>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { view } from "@/store";
export default Vue.extend({
  data() {
    return {
      setView,
    };
  },
  computed: {
    $navigationActiveClass() {
      return view.$navigationActiveClass;
    },
  },
  methods: {
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
  background: color("dark", "darker");
  height: 2.5rem;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-items: center;
  .navigation-items {
    height: 100%;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    align-items: center;
    grid-auto-columns: 1fr;
    justify-content: space-between;
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
        background: color("dark");
        color: color("light");
      }
      &:after {
        content: "";
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 0.1875rem;
        background: color("secondary");
        bottom: 0;
        left: 0;
        border-radius: 0.5rem;
        justify-self: center;
        transition: opacity 0.15s linear;
      }
      &.active {
        color: color("secondary");
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
  background: color("dark");
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
    color: color("light", "darkest");
    padding: 0.375rem;
    transition: all 0.15s linear;
    font-weight: 500;
    &:hover {
    color: color("light", "darker");
    }
  }
}
</style>
