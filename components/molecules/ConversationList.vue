<template>
  <div class="conversations-list">
    <div
      v-for="(conversation, index) of conversations"
      :key="index"
      class="conversation"
    >
      <ConversationCard v-if="!conversation" :index="index" />
      <ConversationCard
        v-else
        :index="index"
        :conversation="conversation"
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
import { conversation, view } from "~/store";
export default Vue.extend({
  data() {
    return {
      conversations: Array(20).fill(false),
      setView,
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
  },
  async mounted() {
    try {
      await conversation.index({ page: 1, perPage: 20 });

      const conversations = await conversation.$all;

      this.conversations = conversations;
    } catch (e) {}
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
