<template>
  <div :class="['conversation-chat-template', $modeClass]">
    <ConversationChatHeader :user="conversation.user" />
    <ConversationMessageList />
    <MessageEngine @sendMessage="sendMessage($event)" @sendMedia="sendMedia($event)" />
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
  methods: {
    async sendMessage(content: string) {
      try {
        await conversationMessage.create({
          content,
          receiverId: conversation.$single.user.id,
        });
      } catch (error) {}
    },
    async sendMedia(file: any) {
      try {
        await conversationMessage.create({
          category: "media",
          file,
          conversationId: conversation.$single.id,
        });
      } catch (error) {}
    },
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
