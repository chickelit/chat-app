<template>
  <div class="profile">
    <FullScreenView
      label="Voltar"
      :new-view="$previousView"
      :navigation-active-class="$previousNavigationActiveClass"
      class="full-screen-view"
    >
      <template #header-slot>
        <h1 class="title">Meu perfil</h1>
      </template>
      <template #main-slot>
        <div class="main">
          <clientOnly>
            <notifications position="bottom right" :max="1" />
          </clientOnly>
          <div class="avatar skeleton"></div>
          <form @submit.prevent="updateProfile">
            <BaseInput placeholder="E-mail" disabled :value="$user.email" />
            <BaseInput v-model="user.name" placeholder="Nome" />
            <BaseInput
              v-model="user.username"
              placeholder="Nome do usuário"
              :max-length="32"
            />
            <BaseButton type="submit" text="Salvar" />
            <NuxtLink to="/forgotPassword" class="form-link"
              >Esqueci minha senha</NuxtLink
            >
          </form>
        </div>
      </template>
    </FullScreenView>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { error, profile, view } from "~/store";
export default Vue.extend({
  data() {
    return {
      user: {
        name: profile.$user.name,
        username: profile.$user.username,
      },
    };
  },
  computed: {
    $previousView() {
      return view.$previousView;
    },
    $previousNavigationActiveClass() {
      return view.$previousNavigationActiveClass;
    },
    $user() {
      return profile.$user;
    },
  },
  methods: {
    async updateProfile() {
      try {
        if (this.user.username === this.$user.username) {
          if (this.user.name === this.$user.name) return;
          await profile.update({ name: this.user.name });
        } else {
          await profile.update(this.user);
        }

        this.$notify({
          type: "success",
          text: "Perfil atualizado...",
        });
      } catch (e) {
        const err = error.$error;
        if (err.field === "username" && err.rule === "unique") {
          this.$notify({
            type: "error",
            title: "Ops...",
            text: "O nome de usuário já está em uso",
          });

          this.user = {
            name: this.$user.name,
            username: this.$user.username,
          };
        }

        if (err.field === "username" && err.rule === "alpha") {
          this.$notify({
            type: "error",
            title: "Ops...",
            text: "O nome de usuário é inválido",
          });

          this.user = {
            name: this.$user.name,
            username: this.$user.username,
          };
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.profile {
  height: 100%;
}
.title {
  font-size: 1.5rem;
  width: max-content;
  font-family: "Tahoma";
  color: color("light", "darkest");
  font-weight: 500;
  cursor: pointer;
}
.form-link {
  cursor: pointer;
  color: color("light", "darkest");
  text-decoration: underline;
  transition: all 0.15s linear;
  &:hover {
    color: color("light", "darker");
  }
}
.main {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  justify-items: center;
  gap: 1.5rem;
  background: color("dark");
  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 0.75rem;
    justify-items: center;
    input {
      width: 100%;
      max-width: 20rem;
    }
  }
  .avatar {
    margin-top: 1rem;
    width: 10rem;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  .username {
    height: 1.5rem;
    width: 80%;
    max-width: 20rem;
    border-radius: 0.3125rem;
  }
}
</style>
