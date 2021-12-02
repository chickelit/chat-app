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
            <notifications
              position="bottom right"
              :max="1"
              classes="custom-notification"
              style="bottom: 5rem; right: 1rem"
            />
          </clientOnly>
          <label id="avatar-input-label" for="avatar-input">
            <div class="avatar">
              <div v-if="$user.avatar">
                <img
                  :src="$user.avatar.url"
                  :alt="`Avatar de ${$user.username}`"
                />
              </div>
              <div v-else>
                <div class="avatar-skeleton skeleton"></div>
              </div>
            </div>
          </label>
          <input
            id="avatar-input"
            type="file"
            style="display: none"
            @input="updateAvatar"
          />
          <form id="profile-form" @submit.prevent="updateProfile">
            <BaseInput placeholder="E-mail" disabled :value="$user.email" />
            <BaseInput
              v-model="user.name"
              class="name-input"
              placeholder="Nome"
            />
            <BaseInput
              v-model="user.username"
              class="username-input"
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
import { error, profile, view, avatar } from "~/store";
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
    async updateProfile(event: any) {
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

        if (err.field === "username") {
          document
            .getElementById("profile-form")
            ?.querySelector(".username-input")
            ?.classList.add("bounce");

          setTimeout(() => {
            document
              .getElementById("profile-form")
              ?.querySelector(".username-input")
              ?.classList.remove("bounce");

            this.user.name = this.$user.name;
            this.user.username = this.$user.username;
            event.target.reset();
          }, 1000);
          if (err.rule === "unique") {
            this.$notify({
              type: "error",
              title: "Ops...",
              text: "O nome de usuário já está em uso",
            });
          }
          if (err.rule === "alpha") {
            this.$notify({
              type: "error",
              title: "Ops...",
              text: "O nome de usuário é inválido",
            });
          }
        }
      }
    },
    async updateAvatar(event: any) {
      try {
        const file = event.target.files[0];
        const imageElement = document
          .getElementById("avatar-input-label")
          ?.querySelector(".avatar div img") as HTMLImageElement;

        imageElement.src = URL.createObjectURL(file);

        await avatar.update({ file });

        this.$notify({
          type: "success",
          text: "Avatar atualizado...",
        });
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao tentar atualizar o avatar...",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.profile {
  height: 100%;
}
.bounce {
  outline: 0;
  border-color: color("danger");
  animation-name: bounce;
  animation-duration: 0.5s;
  animation-delay: 0.25s;
  color: color("danger") !important;
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
  padding: 1rem;
  position: relative;
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
    border: 1px solid color("dark", "darker");
    cursor: pointer;
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    img {
      object-fit: cover;
      width: 10rem;
      height: 10rem;
      border-radius: 100%;
    }
  }
  .avatar-skeleton {
    width: 10rem;
    height: 10rem;
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
