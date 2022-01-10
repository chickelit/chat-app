<template>
  <div class="conversation-message-list">
    <ScrollWrapper>
      <MessageList
        id="conversation-message-list"
        :block-auto-scroll="blockAutoScroll"
        @fullScrolled="onFullScrolled"
        @notFullScrolled="onNotFullScrolled"
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
import { conversation, conversationMessage, mode, profile } from "~/store";
export default Vue.extend({
  data() {
    return {
      scrollDownButtonActive: false,
      blockAutoScroll: false,
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
        if (message.userId === profile.$single.id) {
          this.onFullScrolled();
        }

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
    onFullScrolled() {
      this.scrollDownButtonActive = false;
      this.blockAutoScroll = false;
    },
    onNotFullScrolled() {
      this.scrollDownButtonActive = true;
      this.blockAutoScroll = true;
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
