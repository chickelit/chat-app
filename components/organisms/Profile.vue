<template>
  <div class="profile">
    <Wrapper class="wrapper">
      <label class="avatar-input-label" for="avatar-input">
        <Avatar :src="$src" />
      </label>
      <input id="avatar-input" type="file" accept=".jpg,.jpeg,.png" @input="updateAvatar" />
      <form id="profile-form" @submit.prevent="updateProfile">
        <BaseInput :value="$user.email" disabled />
        <BaseInput v-model="user.name" />
        <BaseInput
          v-model="user.username"
          class="username-input"
          :max-length="32"
        />
        <BaseButton type="submit" :text="text" />
      </form>
      <div v-show="loading" class="loading-wrapper">
        <Loading :active="loading" />
      </div>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { error, profile, avatar } from "~/store";
export default Vue.extend({
  data() {
    return {
      loading: false,
      text: "Salvar",
      user: {
        name: profile.$single.name,
        username: profile.$single.username,
      },
    };
  },
  computed: {
    $user() {
      return profile.$single;
    },
    $src() {
      return profile.$single.avatar ? profile.$single.avatar.url : "";
    },
  },
  methods: {
    async updateProfile(event: any) {
      try {
        this.loading = true;
        this.text = "Salvando...";

        if (this.user.username === this.$user.username) {
          if (this.user.name === this.$user.name) {
            this.loading = false;
            this.text = "Salvar";
          }
          await profile.update({ name: this.user.name });
        } else {
          await profile.update(this.user);
        }

        this.text = "Salvar";
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.text = "Salvar";

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
        }
      }
    },
    async updateAvatar(event: any) {
      try {
        this.loading = true;

        const file = event.target.files[0];
        await avatar.update({ file });

        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.profile {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    justify-items: center;
    gap: 2rem;
    .loading-wrapper {
      width: 5rem;
      height: 5rem;
      display: grid;
      align-items: center;
      justify-items: center;
      align-self: center;
    }
    .avatar-input-label {
      cursor: pointer;
      width: 45%;
      max-width: 12rem;
    }
    input[type="file"] {
      display: none;
    }
    form {
      width: 65%;
      max-width: 22.5rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      gap: 0.75rem;
      button[type="submit"] {
        width: 100%;
      }
    }
  }
  .bounce {
    outline: 0;
    border-color: color("danger", "lighter");
    animation-name: bounce;
    animation-duration: 0.5s;
    animation-delay: 0.25s;
    color: color("danger", "lighter") !important;
  }
}
</style>
