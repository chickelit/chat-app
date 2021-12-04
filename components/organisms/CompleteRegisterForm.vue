<template>
  <div class="complete-register-form">
    <clientOnly>
      <notifications
        :max="1"
        classes="custom-notification"
        position="bottom right"
        style="bottom: 0.5rem; right: 0.5rem;"
      />
    </clientOnly>
    <form @submit.prevent="finishRegister">
      <h1 class="title">Completar cadastro</h1>
      <BaseInput
        type="email"
        :value="$user.email"
        placeholder="E-mail"
        disabled
      />
      <BaseInput
        v-model="form.name"
        placeholder="Nome"
        aria-placeholder="Digite seu nome"
      />
      <BaseInput
        v-model="form.username"
        placeholder="Nome de usuário"
        aria-placeholder="Digite um nome de usuário"
      />
      <BaseInput
        v-model="form.password"
        type="password"
        placeholder="Senha"
        aria-placeholder="Digite uma senha"
      />
      <BaseInput
        v-model="form.passwordConfirmation"
        type="password"
        placeholder="Confirmação de senha"
        aria-placeholder="Confirme sua senha"
      />
      <BaseButton
        type="submit"
        text="Concluir"
        aria-label="Concluir cadastro"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { register, error } from "~/store";
export default Vue.extend({
  data() {
    return {
      form: {
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  computed: {
    $user() {
      return register.$user;
    },
  },
  async beforeMount() {
    try {
      await register.show({ key: this.$route.params.key });
    } catch (error) {
      this.$router.push("/register");
    }
  },
  methods: {
    async finishRegister() {
      try {
        await register.update({ key: this.$route.params.key, ...this.form });

        this.$router.push("/login");
      } catch (e) {
        const err = error.$error;

        if (err.field === "username") {
          if (err.rule === "unique") {
            this.$notify({
              type: "error",
              title: "Ops...",
              text: "O nome de usuário já está em uso...",
            });
          }
          if (err.rule === "alpha") {
            this.$notify({
              type: "error",
              title: "Ops...",
              text: "O nome de usuário é inválido...",
            });
          }
        }
        if (err.field === "passwordConfirmation" && err.rule === "confirmed") {
          this.$notify({
            type: "error",
            title: "Ops...",
            text: "Confirme novamente sua senha...",
          });
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.complete-register-form {
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
