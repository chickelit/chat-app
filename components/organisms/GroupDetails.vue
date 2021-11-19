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
          <div class="members-wrapper">
            <div class="members-title">Membros do grupo</div>
            <div class="scroll-wrapper">
              <div class="members">
                <MemberCard :index="0" :show-options="true"/>
                <MemberCard :index="1" :show-options="true"/>
                <MemberCard :index="2" :show-options="true"/>
                <MemberCard :index="3" :show-options="true"/>
                <MemberCard :index="4" :show-options="true"/>
                <MemberCard :index="5" :show-options="true"/>
                <MemberCard :index="6" :show-options="true"/>
                <MemberCard :index="7" :show-options="true"/>
                <MemberCard :index="8" :show-options="true"/>
                <MemberCard :index="9" :show-options="true"/>
              </div>
            </div>
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
  grid-template-rows: auto auto auto 1fr;
  justify-items: center;
  gap: 1.5rem;
  background: color("dark", "darker");
  .members-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 0.25rem;
  }
  .members-title {
    color: color("light", "darker");
    font-size: 1.25rem;
  }
  .scroll-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
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
  .members {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.125rem;
  }
}
</style>
