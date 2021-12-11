<template>
  <div class="user-search">
    <FullScreenView
      label="Voltar"
      new-view="Friends"
      navigation-active-class="friends-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Adicionar amigo</h1>
      </template>
      <template #main-slot>
        <form
          name="user-search-form"
          class="form"
          autocomplete="off"
          @submit.prevent="onSubmit"
        >
          <Wrapper class="form-wrapper">
            <BaseInput
              id="username-input"
              v-model="form.username"
              placeholder="Nome do usuário..."
              class="form-input"
              :max-length="32"
            />
            <BaseButton type="submit" text="Pesquisar" aria-label="Pesquisar" />
          </Wrapper>
        </form>
        <div v-show="loading" class="loading-wrapper">
          <Loading :active="loading" />
        </div>
        <SearchUserCard v-if="$searchUser.id" :user="$searchUser" />
        <clientOnly>
          <notifications
            :max="1"
            classes="custom-notification"
            position="bottom right"
            style="bottom: 0.5rem; right: 0.5rem"
          />
        </clientOnly>
      </template>
    </FullScreenView>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { userSearch } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
      form: {
        username: "",
      },
      loading: false,
    };
  },
  computed: {
    $searchUser() {
      return userSearch.$single;
    },
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;

        await userSearch.show(this.form);

        this.form.username = "";
        document.forms.namedItem("user-search-form")?.reset();

        this.loading = false;
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Usuário não encontrado...",
        });

        this.form.username = "";
        document.forms.namedItem("user-search-form")?.reset();

        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.loading-wrapper {
  height: 5rem;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-self: center;
}
.user-search {
  .title {
    font-size: 1.5rem;
    width: max-content;
    font-family: "Tahoma";
    color: color("light", "darkest");
    font-weight: 500;
    cursor: pointer;
  }
  .result-list {
    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.125rem;
    }
  }
  .form {
    height: max-content;
    padding: 2rem 1rem;
    display: grid;
    justify-items: center;
    @include screen("medium") {
      padding: 2rem 1rem;
    }
    .form-wrapper {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto auto auto;
      gap: 1.25rem;
      .input-wrapper {
        display: grid;
        grid-template-rows: auto auto;
        .label {
          margin-bottom: 0.3125rem;
          color: color("light", "darkest");
          font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
        }
      }
    }
  }
}
</style>
