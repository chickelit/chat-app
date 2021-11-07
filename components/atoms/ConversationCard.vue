<template>
  <a href="/chat/conversation/1" class="conversation-card" role="link">
    <div class="wrapper">
      <div class="avatar skeleton" />
      <div class="container">
        <div class="username">
          <div class="skeleton skeleton-text"></div>
        </div>
        <div class="latest-message">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.conversation-card {
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  background: color("secondary", "lighter");
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("secondary", "lightest");
  }
  .wrapper {
    width: 60%;
    max-width: 48rem;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    @include screen("medium") {
      width: 100%;
    }
    .avatar {
      height: 100%;
      width: 100%;
      border-radius: 100%;
    }
    .username {
      width: 100%;
      .skeleton-text {
        width: 100%;
        height: 1.125rem;
        margin-bottom: 0.25rem;
        border-radius: 0.125rem;
      }
    }
    .latest-message {
      width: 100%;
      .skeleton-text {
        width: 100%;
        height: 1rem;
        border-radius: 0.125rem;
      }
    }
  }
}
</style>
