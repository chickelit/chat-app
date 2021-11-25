<template>
  <div class="available-new-members">
    <FullScreenView
      label="Voltar"
      new-view="GroupMembers"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Novo membro</h1>
      </template>
      <template #main-slot>
        <div class="scroll-wrapper">
          <ul class="available-members-list">
            <AvailableMemberCard
              v-for="(availableMember, index) in availableMembers"
              :key="index"
              class="available-member-card"
              :index="index"
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
import { setView } from "~/utils";
export default Vue.extend({
  data() {
    return {
      setView,
      availableMembers: Array(15).fill(false),
      selectedMemberIndex: null,
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
.available-members-list {
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  gap: 0.125rem;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .available-member-card {
    &:nth-last-child(1) {
      ::v-deep.available-member-card-dropdown {
        top: -0.375rem;
      }
    }
  }
}
.button {
  width: 100%;
  height: 3rem;
  font-size: 1.125rem;
  background: color("primary");
  transition: all 0.15s linear;
  color: color("light", "darker");
  &:hover {
    color: color("light");
    background: color("primary", "lighter");
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
