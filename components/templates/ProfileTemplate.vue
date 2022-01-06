<template>
  <div class="profile-template">
    <CustomHeader class="header">
      <Wrapper class="wrapper">
        <BackButton />
        <div class="title">Meu perfil</div>
        <HamburgerButton
          class="hamburger-button"
          @click="toggleHamburgerMenu"
        />
      </Wrapper>
      <HamburgerMenu
        :active="hamburgerMenuActive"
        @leaveHamburgerMenu="toggleHamburgerMenu"
      />
    </CustomHeader>
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hamburgerMenuActive: false,
    };
  },
  methods: {
    toggleHamburgerMenu() {
      this.hamburgerMenuActive = !this.hamburgerMenuActive;
    },
  },
});
</script>

<style lang="scss" scoped>
.profile-template {
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
      grid-template-columns: auto auto 1fr;
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
        color: color("dark", "lighter");
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 500;
      }
    }
  }
}
</style>
