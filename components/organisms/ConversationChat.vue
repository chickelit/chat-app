<template>
  <div class="conversation-chat">
    <ChatHeader class="chat-header">
      <div aria-label="Voltar para a lista de conversas" class="back" @click="$emit('changeView', 'Conversations')">
        <img src="@/assets/img/arrow-left.svg" alt="Arrow left" />
      </div>
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
    </ChatHeader>
    <div class="scroll-wrapper">
      <MessageList>
        <ConversationMessage
          v-for="(message, index) in messages"
          :key="index"
          :mine="message.mine"
        />
      </MessageList>
    </div>
    <div class="message-engine">
      <form>
        <BaseInput aria-label="Escrever mensagem" placeholder="Mensagem" />
        <button aria-label="Enviar mensagem" type="submit" class="form-button">
          <img src="@/assets/img/send.svg" alt="Paper plane" />
        </button>
        <label aria-label="Fazer upload de mídia" for="file-upload" :class="['file-upload', 'form-button']">
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      messages: [
        { mine: true },
        { mine: true },
        { mine: false },
        { mine: true },
        { mine: false },
        { mine: false },
        { mine: true },
        { mine: true },
        { mine: false },
        { mine: false },
        { mine: true },
        { mine: false },
        { mine: false },
        { mine: true },
        { mine: true },
        { mine: false },
        { mine: false },
        { mine: true },
        { mine: false },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.conversation-chat {
  z-index: 5000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: grid;
  background: color("primary", "lighter");
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  .chat-header {
    .back {
      cursor: pointer;
      &:hover {
        img {
          filter: invert(0.75);
        }
      }
      img {
        filter: invert(0.65);
        transition: all 0.15s linear;
      }
    }
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
    .username {
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
  }
  .message-engine {
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
          filter: invert(0.65);
          transition: all 0.15s linear;
        }
        &:hover {
          background: color("primary", "lightest");
          img {
            filter: invert(0.75);
          }
        }
      }
      input[type="file"] {
        display: none;
      }
    }
  }
  .scroll-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>
