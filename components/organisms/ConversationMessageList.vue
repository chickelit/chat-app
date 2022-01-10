<template>
  <div class="conversation-message-list">
    <ScrollWrapper>
      <MessageList
        id="conversation-message-list"
        @fullScrolled="scrollDownButtonActive = false"
        @notFullScrolled="scrollDownButtonActive = true"
      >
        <Message v-for="message in $all" :key="message.id" :message="message" />
      </MessageList>
      <ScrollDownButton
        :active="scrollDownButtonActive"
        class="scroll-down-button"
        @click="scrollDown"
      />
    </ScrollWrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Message } from "~/models";
import socket from "~/plugins/socket.client";
import { conversation, conversationMessage, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      scrollDownButtonActive: false,
      page: 1,
      updated: false,
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
    $all() {
      return conversationMessage.$all;
    },
  },
  async created() {
    try {
      await conversation.show({ id: +this.$route.params.id });
      await conversationMessage.index({
        conversationId: conversation.$single.id,
        page: this.page,
        perPage: 200,
      });

      socket.on("newMessage", (message: Message) => {
        conversationMessage.addMessages([message]);
      });
    } catch (error) {}
  },
  methods: {
    scrollDown() {
      const messageList = document.querySelector("#conversation-message-list")!;
      const latestMessage = messageList.lastChild as Element;

      latestMessage?.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
