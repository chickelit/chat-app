<template>
  <div class="create-group">
    <FullScreenView label="Voltar">
      <template #header-slot>
        <div class="header-slot">
          <BackButton
            label="Voltar"
            new-view="Groups"
            navigation-active-class="groups-anchor"
          />
          <h1 class="title">Criar grupo</h1>
        </div>
      </template>
      <template #main-slot>
        <form
          name="create-group-form"
          class="form"
          autocomplete="off"
          @submit.prevent="onSubmit"
        >
          <Wrapper class="form-wrapper">
            <BaseInput
              id="title-input"
              v-model="form.title"
              class="form-input"
              placeholder="Título do grupo..."
              :max-length="30"
              required
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
import { group, view } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
      form: {
        title: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        await group.create(this.form);

        this.setView({
          newView: "Groups",
          previousView: view.$view,
          navigationActiveClass: "groups-anchor",
        });
      } catch (e) {
        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao criar o grupo...",
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
