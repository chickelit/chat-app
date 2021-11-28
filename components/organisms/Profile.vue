<template>
  <div class="group-details">
    <FullScreenView
      label="Voltar"
      :new-view="$previousView"
      :navigation-active-class="$previousNavigationActiveClass"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Meu perfil</h1>
      </template>
      <template #main-slot>
        <div class="main">
          <div class="avatar skeleton"></div>
          <form>
            <BaseInput placeholder="E-mail" disabled />
            <BaseInput placeholder="Nome" />
            <BaseInput placeholder="Nome do usuário" />
            <BaseButton type="submit" text="Salvar" />
            <div class="form-link">Esqueci minha senha</div>
          </form>
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { view } from "~/store";
export default Vue.extend({
  computed: {
    $previousView() {
      return view.$previousView;
    },
    $previousNavigationActiveClass() {
      return view.$previousNavigationActiveClass;
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  width: max-content;
  font-family: "Tahoma";
  color: color("light", "darkest");
  font-weight: 500;
  cursor: pointer;
}
.form-link {
  cursor: pointer;
  color: color("light", "darkest");
  text-decoration: underline;
  transition: all 0.15s linear;
  &:hover {
    color: color("light", "darker");
  }
}
.main {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  justify-items: center;
  gap: 1.5rem;
  background: color("dark");
  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 0.75rem;
    justify-items: center;
    input {
      width: 100%;
      max-width: 20rem;
    }
  }
  .avatar {
    margin-top: 1rem;
    width: 10rem;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  .username {
    height: 1.5rem;
    width: 80%;
    max-width: 20rem;
    border-radius: 0.3125rem;
  }
}
</style>
