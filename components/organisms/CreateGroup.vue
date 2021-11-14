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
        <div class="input-wrapper">
          <label for="title-input" class="label">Título do grupo</label>
          <BaseInput id="title-input" class="form-input" :max-length="30" />
        </div>
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
  background: color("secondary");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  .create-group-header {
    width: 100%;
    display: grid;
    padding: 0.75rem 0;
    background: color("primary");
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    .header-wrapper {
      justify-self: center;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 3.4rem;
      align-items: center;
      gap: 1rem;
    }
    .title {
      color: color("light", "darkest");
      font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
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
