<template>
  <div class="home-template">
    <header class="header">
      <Navigation @toggleHamburgerMenu="toggleHamburgerMenu" />
    </header>
    <div class="wrapper">
      <HamburgerMenu :active="hamburgerMenuActive" />
    </div>
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
  width: 100%;
  margin: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
}
.header {
  width: 100%;
  z-index: 1;
}
.wrapper {
  position: relative;
  height: 100%;
}
</style>
