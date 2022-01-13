<template>
  <div :class="['group-message-engine', $modeClass]">
    <form @submit.prevent="'onSubmit'">
      <AutoExpandingInput
        id="group-message-input"
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
        @input.prevent="'sendMedia'"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
  methods: {
    // async onSubmit() {
    //   try {
    //     const content = document.getElementById("group-message-input")!
    //       .textContent as string;

    //     if (!content) return;

    //     await conversationMessage.create({
    //       content,
    //       receiverId: conversation.$single.user.id,
    //     });

    //     document.getElementById("group-message-input")!.textContent = "";
    //   } catch (error) {}
    // },
    // async sendMedia(event: any) {
    //   try {
    //     const file = event.target.files[0];

    //     await conversationMessage.create({
    //       category: "media",
    //       file,
    //       conversationId: conversation.$single.id,
    //     });
    //   } catch (error) {}
    // },
  },
});
</script>

<style lang="scss" scoped>
.group-message-engine {
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
