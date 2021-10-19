<template>
  <div class="home-template">
    <header class="header">
      <Navigation @toggleHamburgerMenu="toggleHamburgerMenu" />
    </header>
    <Container class="container">
      <ConversationNavigation />
      <Chat />
    </Container>
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
  align-items: center;
}
.container {
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.main {
  height: 100%;
  width: 100%;
}
</style>
