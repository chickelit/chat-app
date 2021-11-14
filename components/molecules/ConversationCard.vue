<template>
  <div class="conversation-card" role="link" @click="$emit('click')">
    <Wrapper class="wrapper">
      <div class="avatar skeleton" />
      <div class="container">
        <div class="username">
          <div class="skeleton skeleton-text"></div>
        </div>
        <div class="latest-message">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </Wrapper>
  </div>
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
  transition: all 0.15s linear;
  .wrapper {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
  }
  &:hover {
    background: color("secondary", "lightest");
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  .username {
    width: 100%;
    .skeleton-text {
      width: 60%;
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
</style>
