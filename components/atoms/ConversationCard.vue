<template>
  <div class="conversation-card" role="link" @click="$emit('click')">
    <div
      v-if="conversation"
      :aria-label="`Conversar com ${conversation.user.username}`"
      class="wrapper"
    >
      <div v-if="conversation.user.avatar" class="avatar">
        <img
          :src="conversation.user.avatar.url"
          :alt="`Avatar de ${conversation.user.username}`"
        />
      </div>
      <div v-else class="avatar skeleton"></div>
      <div class="container">
        <div class="username">
          {{ conversation.user.username }}
        </div>
        <div class="latest-message">
          <div v-if="conversation.latestMessage">
            ...
          </div>
          <div v-else>A conversa ainda não tem mensagens...</div>
        </div>
      </div>
    </div>
    <div v-else class="wrapper">
      <div class="avatar skeleton" />
      <div class="container">
        <div class="username">
          <div class="skeleton skeleton-text"></div>
        </div>
        <div class="latest-message">
          <div class="skeleton skeleton-text"></div>
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
export default Vue.extend({
  props: {
    conversation: {
      type: Object,
      required: false,
    } as PropOptions<Conversation>,
  },
});
</script>

<style lang="scss" scoped>
.conversation-card {
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.15s linear;
  .wrapper {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
  }
  &:hover {
    background: color("dark", "lighter");
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
  .username {
    width: 100%;
    color: color("light", "darker");
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
    color: color("light", "darkest");
    .skeleton-text {
      width: 100%;
      height: 1rem;
      border-radius: 0.125rem;
    }
  }
}
</style>
