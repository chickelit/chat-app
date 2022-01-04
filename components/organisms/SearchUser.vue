<template>
  <div :class="['search-user', $modeClass]">
    <form @submit.prevent="onSubmit">
      <h2 class="form-title">Adicionar amigo</h2>
      <BaseInput
        v-model="form.username"
        :max-length="32"
        required
        type="text"
        placeholder="Nome de usuário..."
      />
      <BaseButton type="submit" :text="text" />
    </form>
    <div v-show="loading" class="loading-wrapper">
      <Loading :active="loading" />
    </div>
    <div v-if="resultUser.id" class="result">
      <SearchUserCard :user="resultUser" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "~/models";
import { mode, userSearch } from "~/store";
export default Vue.extend({
  data() {
    return {
      loading: false,
      text: "Pesquisar",
      resultUser: {} as User,
      form: {
        username: "",
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
        this.text = "Pesquisando...";

        await userSearch.show(this.form);

        this.loading = false;
        this.text = "Pesquisar";

        const resultUser = userSearch.$single;

        this.resultUser = resultUser;
      } catch (e) {
        this.loading = false;
        this.text = "Pesquisar";

        this.resultUser = {} as User;

        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Usuário não encontrado...",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.result {
  width: 80%;
  align-self: center;
}
.loading-wrapper {
  height: 5rem;
  width: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  align-self: center;
}
.search-user {
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
    .form-wrapper {
      background: color("dark");
    }
  }
  &.light {
    .form-title {
      color: color("dark", "darkest");
    }
    .form-wrapper {
      background: color("light", "lightest");
    }
  }
}
</style>
