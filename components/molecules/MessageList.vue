<template>
  <div class="message-list" @scroll="checkScroll">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    blockAutoScroll: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      scrolled: false,
    };
  },
  updated() {
    if (!this.blockAutoScroll) {
      const messageList = document.querySelector(".message-list")!;
      const latestMessage = messageList.lastChild as Element;

      latestMessage?.scrollIntoView({ behavior: "auto", block: "end" });
    }
  },
  methods: {
    checkScroll() {
      const messageList = document.querySelector(".message-list")!;

      if (
        messageList.scrollHeight - 500 >
        messageList.scrollTop + messageList.clientHeight
      ) {
        this.$emit("notFullScrolled");
      } else if (
        messageList.scrollHeight - 50 <=
        messageList.scrollTop + messageList.clientHeight
      ) {
        this.$emit("fullScrolled");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.message-list {
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  gap: 0.75rem;
}
</style>
