<template>
  <div class="change-password-form">
    <clientOnly>
      <notifications
        :max="1"
        classes="custom-notification"
        position="bottom right"
        style="bottom: 0.5rem; right: 0.5rem"
      />
    </clientOnly>
    <form @submit.prevent="onSubmit">
      <h1 class="title">Esqueceu a senha</h1>
      <BaseInput
        type="email"
        :value="$user.email"
        placeholder="E-mail"
        disabled
      />
      <BaseInput
        v-model="form.password"
        type="password"
        placeholder="Senha"
        aria-placeholder="Escolha uma nova senha"
        required
      />
      <BaseInput
        v-model="form.passwordConfirmation"
        type="password"
        placeholder="Confirme sua senha"
        aria-placeholder="Confirme sua nova senha"
        required
      />
      <BaseButton type="submit" text="Concluir" aria-label="Concluir" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { error, forgotPassword } from "~/store";
import { $axios } from "~/utils/nuxt-instance";
export default Vue.extend({
  data() {
    return {
      form: {
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  computed: {
    $user() {
      return forgotPassword.$user;
    },
  },
  async beforeMount() {
    try {
      await forgotPassword.show({ key: this.$route.params.key });
    } catch (e) {
      this.$router.push("/forgot-password");
    }
  },
  methods: {
    async onSubmit() {
      try {
        await $axios.put("/forgot-password", {
          key: this.$route.params.key,
          ...this.form,
        });

        this.$router.push("/login");
      } catch (e) {
        const err = error.$error;

        if (err.field === "passwordConfirmation" && err.rule === "confirmed") {
          this.$notify({
            type: "error",
            title: "Ops...",
            text: "Confirme novamente sua senha...",
          });
        } else {
          this.$notify({
            type: "error",
            title: "Ops...",
            text: "Houve um erro ao tentar atualizar a senha...",
          });
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.change-password-form {
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
