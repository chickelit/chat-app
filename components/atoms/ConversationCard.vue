<template>
  <div
    :class="[
      'conversation-card',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
    @click="$emit('click')"
  >
    <NuxtLink
      v-if="conversation"
      :to="`/chat/conversation/${conversation.id}`"
      class="wrapper"
    >
      <Avatar :src="$src" />
      <div class="container">
        <div class="username">
          {{ conversation.user.username }}
        </div>
        <div class="latest-message">
          <div v-if="conversation.latestMessage">...</div>
          <div v-else>A conversa ainda não tem mensagens...</div>
        </div>
      </div>
    </NuxtLink>
    <div v-else class="wrapper">
      <Avatar />
      <div class="container">
        <div class="username">
          <div
            :class="[
              'skeleton',
              'skeleton-text',
              { dark: $mode === 'dark', light: $mode === 'light' },
            ]"
          ></div>
        </div>
        <div class="latest-message">
          <div
            :class="[
              'skeleton',
              'skeleton-text',
              { dark: $mode === 'dark', light: $mode === 'light' },
            ]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { Conversation } from "@/models";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    conversation: {
      type: Object,
      required: false,
    } as PropOptions<Conversation>,
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
    $src() {
      if (this.conversation) {
        const conversation = this.conversation as Conversation;
        return conversation.user.avatar?.url || "";
      }

      return "";
    },
  },
});
</script>

<style lang="scss" scoped>
.conversation-card {
  cursor: pointer;
  position: relative;
  transition: all 0.15s linear;
  .wrapper {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
  .avatar-skeleton {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
  }
  .username {
    width: 100%;
    font-size: 1.125rem;
    .skeleton-text {
      width: 60%;
      height: 1.125rem;
      margin-bottom: 0.25rem;
      border-radius: 0.125rem;
    }
  }
  .latest-message {
    width: 100%;
    .skeleton-text {
      width: 100%;
      height: 1rem;
      border-radius: 0.125rem;
    }
  }
  &.dark {
    &:hover {
      background: color("dark");
    }
    .username {
      color: color("light", "darker");
    }
    .latest-message {
      color: color("light", "darkest");
    }
  }
  &.light {
    &:hover {
      background: color("light", "lighter");
    }
    .username {
      color: color("dark");
    }
    .latest-message {
      color: color("dark");
    }
  }
}
</style>
