<template>
  <header class="header">
    <Wrapper class="wrapper">
      <h1 class="title">ChatApp</h1>
      <button
        aria-label="Ir para o meu perfil"
        class="button"
        @click="
          setView({
            newView: 'Profile',
            previousView: $view,
            previousNavigationActiveClass: $navigationActiveClass,
          })
        "
      >
        <div v-if="$blob" class="avatar">
          <img :src="$blob" alt="Meu avatar" />
        </div>
        <div v-else-if="$user.avatar" class="avatar">
          <img :src="$user.avatar.url" alt="Meu avatar" />
        </div>
        <div v-else class="avatar skeleton" role="img"></div>
      </button>
    </Wrapper>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { avatar, profile, view } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
    $navigationActiveClass() {
      return view.$navigationActiveClass;
    },
    $user() {
      return profile.$single;
    },
    $blob() {
      return avatar.$blob;
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  background: color("dark", "darkest");
  height: 4.5rem;
  padding: 0 1rem;
  display: grid;
  justify-items: center;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    .title {
      width: max-content;
      font-family: "Tahoma";
      color: color("light", "darkest");
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s linear;
      &:hover {
        color: color("light", "darker");
      }
    }
    .button {
      height: 62.5%;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      cursor: pointer;
      .avatar {
        height: 100%;
        width: 100%;
        border-radius: 100%;
        img {
          height: 100%;
          width: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
