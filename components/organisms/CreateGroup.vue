<template>
  <div :class="['create-group', $modeClass]">
    <form @submit.prevent="onSubmit">
      <h2 class="form-title">Novo grupo</h2>
      <BaseInput
        v-model="form.title"
        :max-length="30"
        required
        type="text"
        placeholder="Título do grupo..."
      />
      <BaseButton type="submit" :text="text" />
    </form>
    <div class="loading-wrapper">
      <Loading :active="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { group, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      loading: false,
      text: "Criar",
      form: {
        title: "",
      },
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;
        this.text = "Criando...";

        await group.create(this.form);

        this.loading = false;
        this.text = "Criar";

        this.$emit("completed");
      } catch (e) {
        this.loading = false;
        this.text = "Criar";

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
.loading-wrapper {
  height: 5rem;
  width: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  align-self: center;
}
.create-group {
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;
  justify-items: center;
  .form-title {
    margin-bottom: 0;
  }
  form {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 1rem;
    input {
      width: 100%;
    }
    button[type="submit"] {
      width: 100%;
    }
  }
  @include screen("medium") {
    form {
      width: 80%;
    }
  }
  &.dark {
    .form-title {
      color: color("light", "darkest");
    }
  }
  &.light {
    .form-title {
      color: color("dark", "darkest");
    }
  }
}
</style>
