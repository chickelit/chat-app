<template>
  <a href="/groups/1" :class="['group-card', { mine }]">
    <div class="cover skeleton" />
    <div class="container">
      <div class="title">
        <div class="skeleton skeleton-text"></div>
      </div>
      <div class="latest-message">
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    <a v-if="mine" href="/groups/1/settings" class="options">
      <div class="wrapper">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </a>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    mine: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.options {
  box-shadow: -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  background: color("secondary", "darker");
  border-radius: 100%;
  display: grid;
  align-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("secondary");
  }
  .wrapper {
    display: grid;
    grid-auto-rows: max-content;
    align-items: center;
    justify-items: center;
    gap: 0.125rem;
    .dot {
      width: 0.3125rem;
      height: 0.3125rem;
      background: color("dark", "lightest");
      border-radius: 100%;
    }
  }
}
.title {
  max-width: 16rem;
  .skeleton-text {
    width: 100%;
    height: 1rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
  }
}
.latest-message {
  max-width: 28rem;
  .skeleton-text {
    width: 100%;
    height: 0.875rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
  }
}
.group-card {
  padding: 0.25rem;
  border-radius: 0.3rem;
  background: color("secondary", "lighter");
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.15s linear;
  &.mine {
    grid-template-columns: 3rem 1fr auto;
  }
  &:hover {
    background: color("secondary", "lightest");
  }
  .cover {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  .container {
    .title {
      width: 55%;
    }
    .latest-message {
      width: 85%;
    }
  }
}
</style>
