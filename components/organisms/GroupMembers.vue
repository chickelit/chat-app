<template>
  <div class="group-members">
    <FullScreenView
      label="Voltar"
      new-view="GroupDetails"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Membros do grupo</h1>
      </template>
      <template #main-slot>
        <button class="button">Adicionar membro</button>
        <div class="scroll-wrapper">
          <ul class="member-list">
            <MemberCard
              v-for="(member, index) in members"
              :key="index"
              :index="0"
              :show-options="member.showOptions"
            />
          </ul>
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { view } from "~/store";
export default Vue.extend({
  data() {
    return {
      members: Array(15).fill({ showOptions: true }),
    };
  },
  computed: {
    $previousView() {
      return view.$previousView;
    },
  },
});
</script>

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
