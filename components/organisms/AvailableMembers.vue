<template>
  <div class="available-new-members">
    <FullScreenView class="full-screen-view">
      <template #header-slot>
        <div class="header-slot">
          <BackButton
            label="Voltar"
            new-view="GroupMembers"
            navigation-active-class="groups-anchor"
          />
          <h1 class="title">Novo membro</h1>
        </div>
      </template>
      <template #main-slot>
        <div class="scroll-wrapper">
          <AvailableMemberList
            @selectMember="select($event)"
            @unselectMember="unselect($event)"
          />
        </div>
        <button class="continue" @click.prevent="addMembers">
          <img
            src="@/assets/img/arrow-left.svg"
            alt="Seta apontada para a direita"
          />
        </button>
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
import { User } from "~/models";
import { group, member } from "~/store";
import { setView } from "~/utils";
export default Vue.extend({
  data() {
    return {
      selectedMembers: [] as number[],
    };
  },
  computed: {
    $group() {
      return group.$single;
    },
  },
  methods: {
    select(id: User["id"]) {
      if (!this.selectedMembers.includes(id)) {
        this.selectedMembers.push(id);
      }
    },
    unselect(id: User["id"]) {
      const index = this.selectedMembers.findIndex(
        (selectedMemberId) => selectedMemberId === id
      );

      this.selectedMembers.splice(index, 1);
    },
    async addMembers() {
      try {
        const queries = this.selectedMembers.map(async (memberId) => {
          await member.create({ userId: memberId, groupId: this.$group.id });
        });

        await Promise.all(queries);

        setView({
          newView: "GroupMembers",
          navigationActiveClass: "groups-anchor",
        });
      } catch (e) {
        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao adicionar os novos membros...",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.header-slot {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 1rem;
}
.continue {
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: color("primary");
  width: 3rem;
  height: 3rem;
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
.scroll-wrapper {
  position: absolute;
  inset: 0;
  overflow-y: scroll;
}
</style>
