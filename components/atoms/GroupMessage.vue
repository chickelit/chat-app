<template>
  <Message :mine="mine">
    <template #before>
      <div class="container">
        <div class="username">
          <div v-if="!mine" class="skeleton skeleton-text"></div>
          <div v-else>Você</div>
        </div>
        <div class="sent-in">03:33</div>
      </div>
    </template>
    <template #content>
      <div class="content">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </template>
  </Message>
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
.container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
</style>
