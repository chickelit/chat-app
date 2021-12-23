<template>
  <div class="group-details">
    <FullScreenView
      label="Voltar"
      new-view="Groups"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <div class="header-slot">
          <BackButton
            label="Voltar"
            new-view="Groups"
            navigation-active-class="groups-anchor"
          />
          <h1 class="title">Dados do grupo</h1>
        </div>
      </template>
      <template #main-slot>
        <div class="main">
          <div v-if="$group.groupCover" class="cover">
            <img
              :src="$group.groupCover.url"
              :alt="`Imagem do grupo ${$group.title}`"
            />
          </div>
          <div v-else class="cover skeleton"></div>
          <div class="group-title">
            {{ $group.title }}
          </div>
          <div class="buttons">
            <button
              class="button"
              aria-label="Ver membros do grupo"
              @click="
                setView({
                  newView: 'GroupMembers',
                  previousView: 'GroupDetails',
                })
              "
            >
              Ver membros do grupo
            </button>
            <button
              v-if="$group.userId !== $user.id"
              class="button danger"
              aria-label="Sair do grupo"
              @click.prevent="leaveGroup"
            >
              Sair do grupo
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
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { group, member, profile } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
    };
  },
  computed: {
    $group() {
      return group.$single;
    },
    $user() {
      return profile.$single;
    },
  },
  methods: {
    async leaveGroup() {
      try {
        await member.destroy({
          userId: this.$user.id,
          groupId: this.$group.id,
        });

        setView({
          newView: "Groups",
          navigationActiveClass: "groups-anchor",
        });
      } catch (e) {
        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao sair do grupo...",
        });
      }
    },
  },
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
.danger {
  color: color("danger") !important;
  &:hover {
    color: color("danger", "lighter") !important;
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
.main {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
  gap: 1.5rem;
  .buttons {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 0.25rem;
    justify-items: center;
  }
  .cover {
    margin-top: 1rem;
    width: 10rem;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  .button {
    cursor: pointer;
    color: color("light", "darkest");
    transition: all 0.15s linear;
    text-decoration: underline;
    &:hover {
      color: color("light", "darker");
    }
  }
  .group-title {
    font-size: 1.5rem;
    color: color("light", "darker");
  }
}
</style>
