<template>
  <div :class="['search-user', $modeClass]">
    <form name="search-user-form" @submit.prevent="onSubmit">
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "~/models";
import { mode, userSearch } from "~/store";
export default Vue.extend({
  props: {
    clean: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      text: "Pesquisar",
      result: [] as User[],
      page: 1,
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
  watch: {
    clean(_oldValue, newValue) {
      if (newValue === false) {
        setTimeout(() => {
          this.form.username = "";

          document.forms.namedItem("search-user-form")?.reset();

          this.result = [] as User[];
        }, 500);
      }
    },
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;
        this.text = "Pesquisando...";

        await userSearch.show({
          username: this.form.username,
          page: this.page,
          perPage: 20,
        });

        this.loading = false;
        this.text = "Pesquisar";

        const result = userSearch.$all;

        this.result = result;
      } catch (e) {
        this.loading = false;
        this.text = "Pesquisar";

        this.result = [] as User[];

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
  align-items: center;
  .form-title {
    margin-bottom: 0;
  }
  form {
    padding-top: 2rem;
    width: 80%;
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
