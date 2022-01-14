<template>
  <div :class="['message-engine', $modeClass]">
    <form @submit.prevent="onSubmit">
      <AutoExpandingInput id="message-input" placeholder="Mensagem..." />
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
        accept=".jpg,.jpeg,.png,.mp4"
        @input.prevent="sendMedia"
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
    onSubmit() {
      const content = document.getElementById("message-input")!
        .textContent as string;

      if (!content) return;

      this.$emit("sendMessage", content);

      document.getElementById("message-input")!.textContent = "";
    },
    sendMedia(event: any) {
      const file = event.target.files[0];

      this.$emit("sendMedia", file);
    },
  },
});
</script>

<style lang="scss" scoped>
.message-engine {
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
