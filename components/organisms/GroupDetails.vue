<template>
  <div class="group-details">
    <FullScreenView
      label="Voltar para a lista de grupos"
      new-view="Groups"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Dados do grupo</h1>
      </template>
      <template #main-slot>
        <div class="main">
          <div class="cover skeleton"></div>
          <div class="group-title skeleton skeleton-text"></div>
          <div class="button" role="button" aria-label="Sair do grupo">
            Sair do grupo
          </div>
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  width: max-content;
  font-family: "Tahoma";
  color: color("light", "darkest");
  font-weight: 500;
  cursor: pointer;
}
.main {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
  gap: 1.5rem;
  background: color("dark", "darker");
  .cover {
    margin-top: 1rem;
    width: 10rem;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  .button {
    cursor: pointer;
    color: color("danger");
    transition: all 0.15s linear;
    text-decoration: underline;
    &:hover {
      color: color("danger", "lighter");
    }
  }
  .group-title {
    height: 1.5rem;
    width: 80%;
    max-width: 20rem;
    border-radius: 0.3125rem;
  }
}
</style>
