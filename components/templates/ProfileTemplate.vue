<template>
  <div :class="['profile-template', $modeClass]">
    <CustomHeader class="header">
      <Wrapper class="wrapper">
        <BackButton class="back-button" />
        <div class="title">Meu perfil</div>
      </Wrapper>
    </CustomHeader>
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  width: 2.25rem;
}
.profile-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 2rem;
  .header {
    height: 3.6rem;
    width: calc(100% - 2rem);
    padding: 0 1rem;
    .wrapper {
      display: grid;
      grid-template-columns: 2.25rem 1fr;
      grid-template-rows: auto;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      .hamburger-button {
        justify-self: end;
      }
      @include screen("medium") {
        width: 100%;
      }
      .title {
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 500;
      }
    }
  }
  &.dark {
    background: color("dark", "darker");
    .title {
      color: color("light", "darkest");
    }
  }
  &.light {
    background: color("light", "lightest");
    .title {
      color: color("dark", "lighter");
    }
  }
}
</style>
