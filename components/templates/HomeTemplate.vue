<template>
  <div class="home-template">
    <Header />
    <Navigation :active="view" @changeView="changeView($event)" />
    <main class="main">
      <component :is="view" @changeView="changeView($event)" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      view: "Conversations",
    };
  },
  methods: {
    changeView(view: string) {
      this.view = view;
    },
  },
});
</script>

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr max-content;
  user-select: none;
  .main {
    position: relative;
  }
}
</style>
