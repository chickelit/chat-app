<template>
  <div class="group-members">
    <FullScreenView class="full-screen-view">
      <template #header-slot>
        <div class="header-slot">
          <BackButton
            label="Voltar"
            new-view="GroupDetails"
            navigation-active-class="groups-anchor"
          />
          <h1 class="title">Membros do grupo</h1>
        </div>
      </template>
      <template #main-slot>
        <div class="main-slot">
          <button
            class="add-member"
            @click="
              setView({
                newView: 'AvailableMembers',
              })
            "
          >
            <img src="@/assets/svg/add.svg" alt="Sinal de adição" />
          </button>
          <ScrollWrapper>
            <MemberList />
          </ScrollWrapper>
          <clientOnly>
            <notifications
              :max="1"
              group="global"
              classes="custom-notification"
              position="bottom right"
              style="bottom: 0.5rem; right: 0.5rem"
            />
          </clientOnly>
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
      page: 1,
    };
  },
  computed: {
    $previousView() {
      return view.$previousView;
    },
  }
});
</script>

<style lang="scss" scoped>
.header-slot {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 1rem;
}
.main-slot {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
}
.add-member {
  z-index: 5000;
  height: 3rem;
  width: 3rem;
  background: color("primary");
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  border-radius: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.15s linear;
  &:hover {
    background: color("primary", "lighter");
    img {
      filter: invert(0.75);
    }
  }
  img {
    height: 50%;
    aspect-ratio: 1 / 1;
    filter: invert(0.65);
    transition: all 0.15s linear;
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
