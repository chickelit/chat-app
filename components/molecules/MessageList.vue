<template>
  <div class="message-list" @scroll="checkScroll">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    checkScroll() {
      this.$emit("scroll");

      const messageList = document.querySelector(".message-list")!;

      if (
        messageList.scrollHeight ===
        messageList.scrollTop + messageList.clientHeight
      ) {
        this.$emit("fullScrolled");
      } else {
        this.$emit("notFullScrolled");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.message-list {
  position: absolute;
  inset: 0.5rem 1rem;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  gap: 0.75rem;
}
</style>
