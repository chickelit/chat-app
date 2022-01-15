<template>
  <div
    :class="['friends',$modeClass]"
  >
    <Wrapper>
      <FriendList class="friend-list" @openForm="openForm($event)" />
      <NuxtLink to="/search" @click.native.prevent>
        <AddButton class="add-button" />
      </NuxtLink>
    </Wrapper>
    <div
      :class="['background-cover', { active: formActive }]"
      @click="closeForm"
    ></div>
    <div :class="['send-message-form', $modeClass, { active: formActive }]">
      <form @submit.prevent="onSubmit">
        <AutoExpandingInput id="message-input" placeholder="Mensagem..." />
        <button type="submit" class="form-button">
          <SendButton />
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Message, User } from "~/models";
import { conversationMessage, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      formActive: false,
      friend: {} as User,
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
  methods: {
    openForm(friend: User) {
      this.friend = friend;
      this.formActive = true;
    },
    closeForm() {
      this.formActive = false;
    },
    async onSubmit() {
      try {
        const content = document.getElementById("message-input")!
          .textContent as string;

        if (!content) return;

        const message = (await conversationMessage.create({
          receiverId: this.friend.id,
          content,
        })) as Message;

        this.$router.push(`/chat/conversation/${message.conversationId}`);
      } catch (error) {}
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
.add-button {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  width: 3rem;
  background: color("primary");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.15s linear;
  &:hover {
    background: color("primary", "lighter");
  }
}
.send-message-form {
  opacity: 0;
  pointer-events: none;
  transform: translateY(100%);
  transition: all 0.25s linear;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  &.dark {
    background: color("dark", "darkest");
  }
  &.light {
    background: color("light", "lightest");
  }
  form {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 2.4rem;
    gap: 0.25rem;
    align-items: center;
  }
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
}
::-webkit-scrollbar {
  width: 0px;
}
.friends {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
  .friend-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
.background-cover {
  background: color("dark", "darkest");
  position: fixed;
  inset: 0;
  z-index: 3;
  opacity: 0;
  transition: all 0.25s linear;
  pointer-events: none;
  &.active {
    opacity: 0.4;
    pointer-events: auto;
  }
}
</style>
