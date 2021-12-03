<template>
  <div class="register-form">
    <clientOnly>
      <notifications
        position="bottom right"
        classes="custom-notification"
        style="bottom: 0.5rem; right: 0.5rem"
        :max="1"
      />
    </clientOnly>
    <form name="register-form" @submit.prevent="register">
      <h1 class="title">Cadastro</h1>
      <BaseInput
        v-model="email"
        type="email"
        placeholder="E-mail"
        aria-placeholder="Digite seu email"
        required
      />
      <div class="links">
        <NuxtLink class="link" to="/login">Já tem uma conta?</NuxtLink>
      </div>
      <BaseButton type="submit" text="Enviar email" aria-label="Enviar email" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { register, error } from "~/store";
export default Vue.extend({
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async register() {
      try {
        await register.create({
          email: this.email,
          redirectUrl: "http://0.0.0.0:3000",
        });

        this.$notify({
          type: "success",
          title: "Email enviado!",
          text: "Verifique sua caixa de entrada...",
        });

        this.email = "";
        document.forms.namedItem("register-form")?.reset();
      } catch (e) {
        const err = error.$error;

        if (err.rule === "unique" && err.field === "email") {
          this.$notify({
            type: "error",
            title: "Houve um erro ao enviar o email!",
            text: "O email já está em uso...",
          });
        }

        this.email = "";
        document.forms.namedItem("register-form")?.reset();
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
.register-form {
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
