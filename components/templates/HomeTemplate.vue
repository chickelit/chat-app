<template>
  <div class="home-template">
    <header class="header">
      <Navigation @toggleHamburgerMenu="toggleHamburgerMenu" />
    </header>
    <nav class="hamburger-nav">
      <HamburgerMenu :active="hamburgerMenuActive" />
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hamburgerMenuActive: false,
    };
  },
  methods: {
    toggleHamburgerMenu() {
      this.hamburgerMenuActive = !this.hamburgerMenuActive;
    },
  },
});
</script>

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: hidden;
  overflow-x: hidden;
}
.header {
  z-index: 1;
}
.hamburger-nav {
  position: relative;
  height: 100%;
}
</style>
