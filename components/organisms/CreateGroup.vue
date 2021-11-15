<template>
  <div class="create-group">
    <header class="create-group-header">
      <Wrapper class="header-wrapper">
        <BackButton
          label="Voltar para a lista de grupos"
          new-view="Groups"
          navigation-active-class="groups-anchor"
        />
        <h1 class="title">Criar grupo</h1>
      </Wrapper>
    </header>
    <form class="form" autocomplete="off">
      <Wrapper class="form-wrapper">
        <BaseInput
          id="title-input"
          class="form-input"
          placeholder="Título do grupo..."
          :max-length="30"
        />
        <BaseButton type="submit" text="Criar" aria-label="Criar grupo" />
      </Wrapper>
    </form>
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
.create-group {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5000;
  background: color("dark", "darker");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4.5rem 1fr auto;
  .create-group-header {
    height: 100%;
    padding: 0 1rem;
    background: color("dark", "darkest");
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    align-content: center;
    .header-wrapper {
      justify-self: center;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      gap: 1rem;
    }
    .title {
      font-size: 1.5rem;
      width: max-content;
      font-family: "Tahoma";
      color: color("light", "darkest");
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s linear;
    }
  }
  .form {
    height: max-content;
    padding: 2rem;
    display: grid;
    justify-items: center;
    .form-wrapper {
      height: 100%;
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
