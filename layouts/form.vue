<template>
  <div class="form-layout">
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.form-layout {
  height: 100vh;
  width: 100%;
  margin: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  background: color("secondary");
}
</style>
