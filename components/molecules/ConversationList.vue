<template>
  <div class="conversations-list">
    <div
      v-for="(conversation, index) of conversations"
      :key="index"
      class="conversation"
    >
      <ConversationCard
        aria-label="Conversar com <username>"
        :index="index"
        @click="
          setView({
            newView: 'ConversationChat',
            previousView: $view,
          })
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { view } from "~/store";
export default Vue.extend({
  data() {
    return {
      conversations: Array(15).fill(false),
      setView,
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
  },
});
</script>

<style lang="scss" scoped>
.conversations-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
}
</style>
