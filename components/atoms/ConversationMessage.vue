<template>
  <div :class="['conversation-message', { 'my-message': mine }]">
    <div class="content">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </div>
    <div class="sent-in">03:33</div>
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
.conversation-message {
  user-select: all;
  height: max-content;
  width: 60%;
  background: color("dark", "lighter");
  padding: 0.5rem;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
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
  .sent-in {
    height: 0.75rem;
    width: 2rem;
    justify-self: end;
    border-radius: 0.125rem;
    color: color("light", "darkest");
    font-size: 0.875rem;
  }
}
.my-message {
  justify-self: end;
  background: color("primary", "lighter");
}
</style>
