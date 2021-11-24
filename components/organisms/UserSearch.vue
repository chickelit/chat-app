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
        <form class="form" autocomplete="off">
          <Wrapper class="form-wrapper">
            <BaseInput
              id="username-input"
              placeholder="Nome do usuário..."
              class="form-input"
              :max-length="30"
            />
            <BaseButton type="submit" text="Pesquisar" aria-label="Pesquisar" />
          </Wrapper>
        </form>
        <div class="result-list">
          <ul>
            <li>
              <SearchUserCard :index="0" />
            </li>
            <li>
              <SearchUserCard :index="1" />
            </li>
            <li>
              <SearchUserCard :index="2" />
            </li>
          </ul>
        </div>
      </template>
    </FullScreenView>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
export default Vue.extend({
  data() {
    return {
      setView,
    };
  },
});
</script>

<style lang="scss" scoped>
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
