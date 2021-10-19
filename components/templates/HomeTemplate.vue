<template>
  <div class="home-template">
    <header class="header">
      <Navigation @toggleHamburgerMenu="toggleHamburgerMenu" />
    </header>
    <div class="wrapper">
      <ConversationNavigation />
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
  background: color("secondary");
}
.header {
  width: 100%;
  z-index: 1;
}
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 29.25rem;
  grid-template-rows: 1fr;
  align-items: center;
}
</style>
