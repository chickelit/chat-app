<template>
  <div class="group-members">
    <FullScreenView
      label="Voltar para os dados do grupo"
      new-view="GroupDetails"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Membros do grupo</h1>
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
  background: color("dark", "darker");
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.125rem;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .full-screen-view {
    &:after {
      content: "a";
    }
  }
}
.title {
  font-size: 1.5rem;
  width: max-content;
  font-family: "Tahoma";
  color: color("light", "darkest");
  font-weight: 500;
  cursor: pointer;
}
</style>
