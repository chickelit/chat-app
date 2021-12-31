<template>
  <div class="home-template">
    <Navigation />
    <Conversations />
  </div>
</template>

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
</style>
