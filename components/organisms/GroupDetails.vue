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
          <div v-if="$group.userId === $user.id" class="cover">
            <label for="cover-input" style="cursor: pointer">
              <img
                v-if="$blob"
                :src="$blob"
                :alt="`Imagem do grupo ${$group.title}`"
              />
              <img
                v-else-if="$group.groupCover"
                :src="$group.groupCover.url"
                :alt="`Imagem do grupo ${$group.title}`"
              />
              <div v-else class="cover skeleton"></div>
            </label>
            <input
              id="cover-input"
              type="file"
              accept=".jpg,.jpeg,.png"
              style="display: none"
              @input="updateCover"
            />
          </div>
          <div v-else class="cover skeleton"></div>
          <form
            v-if="$group.userId === $user.id"
            class="group-form"
            @submit.prevent="onSubmit"
          >
            <BaseInput
              v-model="title"
              :max-length="30"
              type="text"
              class="title-input"
              :value="$group.title"
              style="text-align: center"
              required
            />
            <BaseButton type="submit" text="Salvar" />
          </form>
          <div v-else class="group-title">
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
              group="group-details"
              classes="custom-notification"
              position="bottom right"
              style="bottom: 0.5rem; right: 0.5rem"
            />
          </clientOnly>
          <div v-show="loading" class="loading-wrapper">
            <Loading :active="loading" />
          </div>
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { group, groupCover, member, profile } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
      loading: false,
      title: group.$single.title as unknown as string,
    };
  },
  computed: {
    $group() {
      return group.$single;
    },
    $user() {
      return profile.$single;
    },
    $blob() {
      return groupCover.$blob;
    },
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;

        await group.update({ title: this.title, groupId: group.$single.id });

        this.loading = false;
      } catch (e) {
        this.loading = false;

        Vue.notify({
          type: "error",
          group: "group-details",
          title: "Ops...",
          text: "Houve um erro ao atualizar os dados do grupo...",
        });
      }
    },
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
          group: "group-details",
          title: "Ops...",
          text: "Houve um erro ao sair do grupo...",
        });
      }
    },
    async updateCover(event: any) {
      try {
        const file = event.target.files[0];

        await groupCover.update({ file });
      } catch (e) {
        Vue.notify({
          type: "error",
          group: "group-details",
          title: "Ops...",
          text: "Houve um erro ao atualizar a imagem do grupo...",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.loading-wrapper {
  height: 5rem;
  width: 5rem;
  display: grid;
  justify-items: center;
  align-items: center;
}
.group-form {
  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
}
.title-input {
  width: 18rem;
  font-size: 1.125rem;
}
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
    height: 10rem;
    border-radius: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
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
