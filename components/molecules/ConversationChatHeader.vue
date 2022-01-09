<template>
  <div :class="['conversation-chat-header', $modeClass]">
    <BackButton class="back-button" />
    <Avatar :src="$src" />
    <div v-if="user" class="username">
      {{ user.username }}
    </div>
    <div v-else class="username">
      <div :class="['skeleton', 'skeleton-text', $modeClass]"></div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { User } from "~/models";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: false,
    } as PropOptions<User>,
  },
  computed: {
    $src() {
      if (this.user) {
        const user = this.user as User;

        return user.avatar ? user.avatar.url : "";
      }

      return "";
    },
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.conversation-chat-header {
  padding: 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background: inherit;
  display: grid;
  grid-template-columns: auto 3.4rem 1fr;
  grid-template-rows: 3.4rem;
  align-items: center;
  gap: 0.5rem;
  .back-button {
    width: 2.25rem;
  }
  .username {
    font-size: 1.125rem;
    .skeleton-text {
      width: 60%;
      max-width: 24rem;
      height: 1.125rem;
      margin-bottom: 0.25rem;
      border-radius: 0.125rem;
    }
  }
  &.dark {
    background: color("dark", "darkest");
    .username {
      color: color("light", "darkest");
    }
  }
  &.light {
    background: color("light", "lightest");
    .username {
      color: color("dark");
    }
  }
}
</style>
