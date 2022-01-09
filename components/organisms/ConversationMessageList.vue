<template>
  <div class="conversation-message-list">
    <ScrollWrapper>
      <MessageList
        id="conversation-message-list"
        @fullScrolled="scrollDownButtonActive = false"
        @notFullScrolled="scrollDownButtonActive = true"
      >
        <Message
          v-for="(message, index) in messages"
          :key="message.id"
          :class="{
            'conversation-latest-message': index === messages.length - 1,
          }"
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
  async created() {
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
      const messageList = document.querySelector("#conversation-message-list");
      const latestMessage = messageList?.lastChild as Element;

      latestMessage.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
