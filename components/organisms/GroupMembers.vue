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
        <div class="main-slot">
          <button
            class="button"
            @click="
              setView({
                newView: 'AvailableMembers',
              })
            "
          >
            Adicionar membro
          </button>
          <ScrollWrapper>
            <MemberList />
          </ScrollWrapper>
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
.main-slot {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
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
