<template>
  <div class="website">
    <header class="header">
      <Navigation @toggleHamburgerMenu="toggleHamburgerMenu" />
    </header>
    <Container class="container">
      <main class="main">
        <Nuxt />
      </main>
    </Container>
    <aside class="aside">
      <HamburgerMenu class="hamburger-menu" :active="hamburgerMenuActive" />
    </aside>
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
.website {
  position: relative;
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
.container {
  position: relative;
  padding: 1rem 0;
}
</style>
