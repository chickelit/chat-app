<template>
  <div class="login-form">
    <clientOnly>
      <notifications position="bottom right" :max="1" />
    </clientOnly>
    <form @submit.prevent="login">
      <h1 class="title">Login</h1>
      <BaseInput
        v-model="form.email"
        type="email"
        placeholder="E-mail"
        aria-placeholder="Digite seu email"
        required
      />
      <BaseInput
        v-model="form.password"
        type="password"
        placeholder="Senha"
        aria-placeholder="Digite sua senha"
        required
      />
      <div class="links">
        <NuxtLink class="link" to="/forgotPassword"
          >Esqueci minha senha</NuxtLink
        >
        <NuxtLink class="link" to="/register">Cadastrar-se</NuxtLink>
      </div>
      <BaseButton type="submit" text="Entrar" aria-label="Entrar" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { auth } from "~/store";

export default Vue.extend({
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await auth.create(this.form);

        this.$router.push("/");
      } catch (e) {
        this.$notify({ type: "error", text: "Ops... Algo deu errado!" });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.links {
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  .link {
    color: color("light", "darkest");
    transition: all 0.15s linear;
    &:hover {
      text-decoration: underline;
      color: color("light", "darker");
    }
  }
}
.login-form {
  position: relative;
  min-width: 24rem;
  width: 100%;
  background: color("dark", "darker");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  .title {
    color: color("light");
    justify-self: center;
    margin-bottom: 2rem;
  }
  form {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 0.5rem;
    button[type="submit"] {
      margin-top: 1.25rem;
    }
  }
}
</style>
