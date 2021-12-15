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
              :class="[
                'available-member-card',
                { selected: selectedMembers.find((item) => item === index) },
              ]"
              @click="toggleSelection(index)"
            />
          </ul>
          <button class="continue">
            <img
              src="@/assets/img/arrow-left.svg"
              alt="Seta apontada para a direita"
            />
          </button>
        </div>
        <clientOnly>
          <notifications
            :max="1"
            group="global"
            classes="custom-notification"
            position="bottom right"
            style="bottom: 0.5rem; right: 0.5rem"
          />
        </clientOnly>
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
      selectedMembers: [] as number[],
    };
  },
  computed: {
    $previousView() {
      return view.$previousView;
    },
  },
  methods: {
    toggleSelection(index: number) {
      const card = document.querySelectorAll(".available-member-card")[
        index
      ] as Element;

      card.classList.toggle("selected");

      this.selectedMembers.push(index);
    },
  },
});
</script>

<style lang="scss" scoped>
.continue {
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background: color("primary");
  width: 2.75rem;
  height: 2.75rem;
  transition: all 0.15s linear;
  border-radius: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background: color("primary", "lighter");
    img {
      filter: invert(0.75);
    }
  }
  img {
    transform: rotate(180deg);
    filter: invert(0.65);
    transition: all 0.15s linear;
  }
}
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
