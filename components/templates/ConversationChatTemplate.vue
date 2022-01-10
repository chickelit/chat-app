<template>
  <div :class="['conversation-chat-template', $modeClass]">
    <ConversationChatHeader :user="conversation.user" />
    <ConversationMessageList />
    <ConversationMessageEngine />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Conversation } from "~/models";
import socket from "~/plugins/socket.client";
import { conversation, conversationMessage, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      conversation: false as unknown as Conversation,
      scrollDownButtonActive: false,
      page: 1,
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
    $src() {
      if (this.conversation) {
        const conversation = this.conversation as Conversation;
        return conversation.user.avatar ? conversation.user.avatar.url : "";
      }

      return "";
    },
  },
  async beforeMount() {
    try {
      await conversation.show({ id: +this.$route.params.id });
      await conversationMessage.index({
        conversationId: conversation.$single.id,
        page: this.page,
        perPage: 200,
      });

      socket.emit("create", `conversation-${conversation.$single.id}`);

      this.conversation = conversation.$single;
    } catch (error) {}
  },
});
</script>

<style lang="scss" scoped>
.conversation-chat-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
}
</style>
