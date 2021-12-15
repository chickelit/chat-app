<template>
  <div class="create-group">
    <FullScreenView
      label="Voltar"
      new-view="Groups"
      navigation-active-class="groups-anchor"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Criar grupo</h1>
      </template>
      <template #main-slot>
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
  .title {
    font-size: 1.5rem;
    width: max-content;
    font-family: "Tahoma";
    color: color("light", "darkest");
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s linear;
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
