<template>
  <div class="user-search">
    <header class="user-search-header">
      <Wrapper class="header-wrapper">
        <BackButton
          label="Voltar para a lista de amigos"
          new-view="Friends"
          navigation-active-class="friends-anchor"
        />
        <h1 class="title">Adicionar amigo</h1>
      </Wrapper>
    </header>
    <form class="form" autocomplete="off">
      <Wrapper class="form-wrapper">
        <div class="input-wrapper">
          <label for="username-input" class="label">Nome do usuário</label>
          <BaseInput id="username-input" class="form-input" :max-length="30" />
        </div>
        <BaseButton type="submit" text="Pesquisar" aria-label="Pesquisar" />
      </Wrapper>
    </form>
    <div class="result-list">
      <ul>
        <li>
          <UserCard :index="0" />
        </li>
        <li>
          <UserCard :index="1" />
        </li>
        <li>
          <UserCard :index="2" />
        </li>
      </ul>
    </div>
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
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5000;
  background: color("secondary");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  .result-list {
    ul {
      display: grid;
      grid-auto-rows: auto;
      gap: 0.125rem;
    }
  }
  .user-search-header {
    width: 100%;
    padding: 0.75rem 0;
    background: color("primary");
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    justify-items: center;
    .header-wrapper {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 3.4rem;
      gap: 1rem;
      align-items: center;
      .title {
        color: color("light", "darkest");
        font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
      }
      .back {
        cursor: pointer;
        &:hover {
          img {
            filter: invert(0.75);
          }
        }
        img {
          filter: invert(0.65);
          transition: all 0.15s linear;
        }
      }
    }
  }
  .form {
    width: 100%;
    background: color("secondary", "darker");
    height: max-content;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    justify-items: center;
    @include screen("medium") {
      padding: 0 2rem;
      width: auto;
    }
    .form-wrapper {
      height: auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      gap: 1.25rem;
      .input-wrapper {
        display: grid;
        grid-template-rows: auto auto;
        .form-input {
          background: color("secondary");
          &:focus {
            background: color("secondary", "lighter");
          }
        }
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
