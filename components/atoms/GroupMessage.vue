<template>
  <div :class="['group-message', { 'my-message': mine }]">
    <div class="container">
      <div class="username">
        <div v-if="!mine" class="skeleton skeleton-text"></div>
        <div v-else>Você</div>
      </div>
      <div class="sent-in">03:33</div>
    </div>
    <div class="content">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    mine: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.group-message {
  user-select: all;
  height: max-content;
  width: 60%;
  background: color("dark", "lighter");
  padding: 0.5rem;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0.5rem;
  .content {
    display: grid;
    gap: 0.25rem;
    .skeleton-text {
      border-radius: 0.125rem;
      width: 100%;
      height: 1rem;
      &:nth-last-child(1) {
        width: 75%;
      }
    }
  }
  .container {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .sent-in {
    height: 0.75rem;
    width: 2rem;
    justify-self: end;
    border-radius: 0.125rem;
    color: color("light", "darkest");
    font-size: 0.875rem;
  }
  .username {
    height: 0.75rem;
    width: 6rem;
    border-radius: 0.125rem;
    color: color("light", "darkest");
    font-size: 0.875rem;
    .skeleton-text {
      border-radius: 0.125rem;
      width: 100%;
      height: 1rem;
    }
  }
}
.my-message {
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  background: color("primary", "lighter");
}
</style>
