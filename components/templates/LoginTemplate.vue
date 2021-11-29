<template>
  <div class="login-template">
    <div class="presentation">
      <h1 class="title">ChatApp</h1>
    </div>
    <LoginForm />
  </div>
</template>

<style lang="scss" scoped>
.login-template {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  @include screen("small") {
    grid-template-columns: 1fr;
  }
}
.presentation {
  @include screen("small") {
    display: none;
  }
  display: grid;
  align-items: center;
  justify-items: center;
  background: color("dark", "lighter");
  .title {
    color: color("light");
  }
}
</style>
