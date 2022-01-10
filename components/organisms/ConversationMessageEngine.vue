<template>
  <div :class="['conversation-message-engine', $modeClass]">
    <form @submit.prevent="onSubmit">
      <AutoExpandingInput
        id="conversation-message-input"
        placeholder="Mensagem..."
      />
      <button type="submit" class="form-button">
        <SendButton />
      </button>
      <label for="file-upload" :class="['file-upload', 'form-button']">
        <UploadButton />
      </label>
      <input
        id="file-upload"
        type="file"
        class="custom-file-upload"
        accept=".jpg,.jpeg,.png,.mp3,.mp4"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { conversation, conversationMessage, mode } from "~/store";
export default Vue.extend({
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
  methods: {
    async onSubmit() {
      try {
        const content = document.getElementById("conversation-message-input")!
          .textContent as string;

        if (!content) return;

        await conversationMessage.create({
          content,
          receiverId: conversation.$single.user.id,
        });

        document.getElementById("conversation-message-input")!.textContent = "";
      } catch (error) {}
    },
  },
});
</script>

<style lang="scss" scoped>
.conversation-message-engine {
  &.dark {
    background: color("dark", "darkest");
    box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  }
  &.light {
    box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  }
  form {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 2.4rem 2.4rem;
    gap: 0.25rem;
    align-items: center;
    input[type="file"] {
      display: none;
    }
  }
}
</style>
