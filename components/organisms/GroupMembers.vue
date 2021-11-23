<template>
  <div class="group-members">
    <FullScreenView
      label="Voltar para os dados do grupo"
      new-view="GroupDetails"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <div class="wrapper">
          <h1 class="title">Membros do grupo</h1>
          <div class="button" role="button">
            <div class="line"></div>
            <div class="line vertical"></div>
          </div>
        </div>
      </template>
      <template #main-slot>
        <div class="scroll-wrapper">
          <ul class="member-list">
            <MemberCard :index="0" :show-options="true" />
            <MemberCard :index="1" :show-options="true" />
            <MemberCard :index="2" :show-options="true" />
            <MemberCard :index="3" :show-options="true" />
            <MemberCard :index="4" :show-options="true" />
            <MemberCard :index="5" :show-options="true" />
            <MemberCard :index="6" :show-options="true" />
            <MemberCard :index="7" :show-options="true" />
            <MemberCard :index="8" :show-options="true" />
            <MemberCard :index="9" :show-options="true" />
            <MemberCard :index="10" :show-options="true" />
            <MemberCard :index="11" :show-options="true" />
            <MemberCard :index="12" :show-options="true" />
            <MemberCard :index="13" :show-options="true" />
            <MemberCard :index="14" :show-options="true" />
            <MemberCard :index="15" :show-options="true" />
          </ul>
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrapper {
  height: 100%;
  position: relative;
}
.member-list {
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.125rem;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: max-content;
  align-items: center;
}
.button {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  background: color("dark");
  transition: all 0.15s linear;
  &:hover {
    background: color("dark", "lighter");
    .line {
      background: color("success", "lighter");
    }
  }
}
.line {
  position: absolute;
  top: 1.125rem;
  left: 0.5rem;
  width: 60%;
  height: 0.15625rem;
  border-radius: 1rem;
  background: color("success");
  transition: all 0.15s linear;
  &.vertical {
    transform: rotate(90deg);
  }
}
.title {
  font-size: 1.5rem;
  text-justify: center;
  width: max-content;
  font-family: "Tahoma";
  color: color("light", "darkest");
  font-weight: 500;
  cursor: pointer;
}
</style>
