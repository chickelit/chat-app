<template>
  <header class="header">
    <div class="wrapper">
      <h1 class="title" role="button">ChatApp</h1>
      <div aria-label="Ir para o meu perfil" role="button" class="container">
        <div class="avatar skeleton" role="img"></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: color("primary");
  height: 3.6rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  display: grid;
  justify-items: center;
  .wrapper {
    height: 100%;
    width: 60%;
    max-width: 48rem;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    @include screen("medium") {
      width: 100%;
    }
    .title {
      width: max-content;
      font-family: "Tahoma";
      color: color("light", "darkest");
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s linear;
      &:hover {
        color: color("light");
      }
    }
    .container {
      height: 75%;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      cursor: pointer;
      .avatar {
        height: 100%;
        width: 100%;
        border-radius: 100%;
      }
    }
  }
}
</style>
