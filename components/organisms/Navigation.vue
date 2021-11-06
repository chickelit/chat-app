<template>
  <nav class="navigation">
    <ul class="navigation-items">
      <li
        :class="['navigation-item', 'active']"
        aria-label="Ir para a listagem de conversas"
        @click="
          setView($event);
          $emit('changeView', 'Conversations');
        "
      >
        Conversas
      </li>
      <li
        class="navigation-item"
        aria-label="Ir para a listagem de grupos"
        @click="
          setView($event);
          $emit('changeView', 'Groups');
        "
      >
        Grupos
      </li>
      <li
        class="navigation-item"
        aria-label="Ir para a listagem de amigos"
        @click="
          setView($event);
          $emit('changeView', 'Friends');
        "
      >
        Amigos
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    setView({ target }: Event) {
      const element = target as Element;
      const navigationItems = document.querySelectorAll(".navigation-item")!;

      navigationItems.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });

      if (!element.classList.contains("active")) {
        element.classList.add("active");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  background: color("primary", "lighter");
  height: 2.5rem;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  align-items: center;
  .navigation-items {
    height: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    align-items: center;
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
</style>
