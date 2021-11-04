<template>
  <div class="conversations">
    <ul class="conversations-list">
      <li
        v-for="(conversation, index) of conversations"
        :key="index"
        class="conversation"
      >
        <ConversationCard :index="index" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      conversations: Array(15).fill(false),
    };
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.conversations {
  position: absolute;
  inset: 0;
  background: color("secondary");
  .conversations-list {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
    gap: 0.125rem;
  }
}
</style>
