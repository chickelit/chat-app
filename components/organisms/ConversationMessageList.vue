<template>
  <div class="conversation-message-list">
    <ScrollWrapper>
      <MessageList
        @fullScrolled="scrollDownButtonActive = false"
        @notFullScrolled="scrollDownButtonActive = true"
      >
        <Message
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
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
import { conversation, conversationMessage, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      scrollDownButtonActive: false,
      messages: [] as Message[],
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

      this.messages = conversationMessage.$all;
    } catch (error) {}
  },
  methods: {
    scrollDown() {
      if (this.messages.length > 0) {
        const messageList = document.querySelector(".message-list")!;
        const latestMessage = messageList.lastChild as Element;

        latestMessage?.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>