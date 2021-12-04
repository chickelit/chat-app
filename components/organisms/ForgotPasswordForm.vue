<template>
  <div class="forgot-password-form">
    <clientOnly>
      <notifications
        position="bottom right"
        classes="custom-notification"
        style="bottom: 0.5rem; right: 0.5rem"
        :max="1"
      />
    </clientOnly>
    <form @submit.prevent="onSubmit">
      <h1 class="title">Esqueceu a senha</h1>
      <BaseInput
        v-model="email"
        type="email"
        placeholder="E-mail"
        aria-placeholder="Digite seu email"
        required
      />
      <div class="links">
        <NuxtLink class="link" to="/login">Fazer login</NuxtLink>
      </div>
      <BaseButton type="submit" text="Enviar email" aria-label="Enviar email" />
    </form>
    <NuxtLink class="link register-link" to="/register"
      >Não tem uma conta?</NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { forgotPassword } from "~/store";
export default Vue.extend({
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        await forgotPassword.create({
          email: this.email,
          redirectUrl: "http://192.168.0.103:3000",
        });

        this.$notify({
          type: "success",
          title: "Email enviado!",
          text: "Verifique sua caixa de entrada...",
        });
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao enviar o email...",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.register-link {
  position: absolute;
  bottom: 0.25rem;
  right: 0.5rem;
}
.link {
  color: color("light", "darkest");
  transition: all 0.15s linear;
  &:hover {
    text-decoration: underline;
    color: color("light", "darker");
  }
}
.forgot-password-form {
  min-width: 24rem;
  width: 100%;
  background: color("dark", "darker");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  .links {
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
  }
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
