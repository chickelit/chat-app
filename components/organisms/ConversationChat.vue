<template>
  <main class="conversation-chat">
    <header class="header">
      <div class="cover skeleton"></div>
      <div class="title">
        <div class="skeleton skeleton-text"></div>
      </div>
    </header>
    <div class="scroll-wrapper">
      <ConversationMessageList class="conversation-message-list" />
      <div class="scroll-down" @click="scrollToBottom">
        <img
          src="@/assets/img/scroll-down.svg"
          alt="Duas setas apontando para baixo"
        />
      </div>
    </div>
    <div class="conversation-message-engine">
      <form>
        <BaseInput v-model="message.content" placeholder="Mensagem" />
        <button type="submit" class="form-button">
          <img src="@/assets/img/send.svg" alt="Paper plane" />
        </button>
        <label for="file-upload" :class="['file-upload', 'form-button']">
          <img src="@/assets/img/arrow-up.svg" alt="Arrow up" />
        </label>
        <input
          id="file-upload"
          type="file"
          class="custom-file-upload"
          accept=".jpg,.jpeg,.png,.mp3,.mp4"
        />
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: {
        content: "",
      },
    };
  },
  methods: {
    scrollToBottom() {
      const messageList = document.querySelector(".conversation-message-list")!;
      const latestMessage = messageList.lastChild as Element;

      latestMessage?.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
});
</script>

<style lang="scss" scoped>
.conversation-chat {
  min-height: 32rem;
  min-width: 18rem;
  position: absolute;
  inset: 1rem 0;
  display: grid;
  background: color("primary", "lighter");
  border-radius: 0.3125rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  .scroll-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    .scroll-down {
      cursor: pointer;
      position: absolute;
      top: -1.125rem;
      right: 2.5rem;
      width: 2.25rem;
      height: 2.25rem;
      background: color("secondary", "darker");
      border-radius: 100%;
      box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
      display: grid;
      align-items: center;
      justify-items: center;
      transition: all 0.15s linear;
      &:hover {
        background: color("secondary", "lighter");
      }
      img {
        height: 85%;
        width: 85%;
        filter: invert(0.65);
      }
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
}
.header {
  padding: 0.75rem;
  background: color("primary");
  border-radius: 0.3125rem 0.3125rem 0 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 3.4rem 1fr;
  grid-template-rows: 3.4rem;
  align-items: center;
  gap: 1rem;
}
.cover {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.title {
  font-size: 1.25rem;
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: color("dark", "lightest");
  .skeleton-text {
    height: 1.25rem;
    width: 12rem;
    border-radius: 0.125rem;
  }
}
.conversation-message-engine {
  align-self: end;
  height: 2.5rem;
  padding: 0.5rem;
  background: color("primary");
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0.3125rem 0.3125rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  form {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1rem;
  }
}
.form-button {
  cursor: pointer;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: color("primary", "lighter");
  transition: all 0.15s linear;
  display: grid;
  align-items: center;
  justify-items: center;
  img {
    width: 80%;
    filter: invert(0.45);
  }
  &:hover {
    background: color("primary", "lightest");
  }
}
input[type="file"] {
  display: none;
}
</style>
