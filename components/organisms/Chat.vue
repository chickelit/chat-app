<template>
  <main class="chat">
    <header class="header">
      <div class="cover skeleton"></div>
      <div class="title">
        <div class="skeleton skeleton-text"></div>
      </div>
    </header>
    <div class="scroll-wrapper">
      <MessageList />
    </div>
    <div class="message-engine">
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
});
</script>

<style lang="scss" scoped>
.chat {
  min-height: 32rem;
  display: none;
  width: 100%;
  height: 100%;
  background: color("primary", "lighter");
  border-radius: 0.3125rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  .scroll-wrapper {
    ::-webkit-scrollbar {
      width: 0px;
    }
    position: relative;
  }
  @include screen("infinity") {
    display: grid;
  }
}
.header {
  background: color("primary");
  padding: 0.75rem;
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
  width: 100%;
  font-size: 1.25rem;
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: color("dark", "lightest");
  .skeleton-text {
    height: 1.25rem;
    width: 20rem;
    border-radius: 0.125rem;
  }
}
.message-engine {
  align-self: end;
  height: 2.5rem;
  background: color("primary");
  padding: 0.75rem;
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
.line {
  height: 1.6rem;
  border-radius: 1rem;
  width: 0.25rem;
  background: color("dark", "lightest");
  position: absolute;
  top: 0.45rem;
  left: 1.2rem;
  &.horizontal {
    transform: rotate(90deg);
  }
}
</style>
