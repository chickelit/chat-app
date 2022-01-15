<template>
  <div
    :class="[
      'friend-card',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
    @mouseleave="disableDropdown"
  >
    <div v-if="friend" class="wrapper">
      <div class="container" @click="toggleDropdown">
        <Avatar :src="$src" />
        <div class="username">
          {{ friend.username }}
        </div>
      </div>
      <Dropdown class="friend-card-dropdown">
        <button
          :aria-label="`Conversar com ${friend.username}`"
          @click="handleConversationTransition"
        >
          Conversar com {{ friend.username }}
        </button>
        <button
          class="danger"
          :aria-label="`Desfazer amizade com ${friend.username}`"
          @click="deleteFriendship"
        >
          Desfazer amizade
        </button>
      </Dropdown>
    </div>
    <div v-else class="wrapper">
      <div class="container">
        <Avatar />
        <div class="username">
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
import { setView } from "@/utils";
import { conversation, error, friendship, mode, view } from "~/store";
import { User } from "~/models";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
    friend: {
      type: Object,
      required: false,
    } as PropOptions<User>,
  },
  data() {
    return {
      setView,
    };
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
    $src() {
      if (this.friend) {
        const friend = this.friend as User;
        return friend.avatar?.url || "";
      }

      return "";
    },
  },
  methods: {
    toggleDropdown() {
      if (this.friend) {
        const friendCardDropdown = document.querySelectorAll(
          ".friend-card-dropdown"
        )[this.index] as Element;

        friendCardDropdown.classList.toggle("active");
      }
    },
    disableDropdown() {
      if (this.friend) {
        const friendCardDropdown = document.querySelectorAll(
          ".friend-card-dropdown"
        )[this.index] as Element;

        friendCardDropdown.classList.remove("active");
      }
    },
    async deleteFriendship() {
      try {
        await friendship.destroy({ userId: this.friend.id });
      } catch (e) {
        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao desfazer a amizade...",
        });
      }
    },
    async handleConversationTransition() {
      try {
        if (this.friend.existingConversation) {
          this.$router.push(
            `/chat/conversation/${this.friend.existingConversation.id}`
          );
        } else {
          this.$emit("openForm", this.friend)
        }
      } catch (e) {
        const err = error.$error;

        if (err.rule === "unique" && err.target === "conversation") {
          this.setView({
            newView: "ConversationChat",
            previousView: view.$view,
            previousNavigationActiveClass: view.$navigationActiveClass,
          });

          await conversation.show({ id: err.conversationId });
        } else if (err.rule === "exists" && err.target === "friendship") {
          Vue.notify({
            type: "error",
            title: "Ops...",
            text: "Houve um erro ao começar a conversa...",
          });
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
  &:hover {
    color: color("danger", "lighter") !important;
  }
}
.username {
  width: 100%;
  font-size: 1.125rem;
  .skeleton-text {
    width: 75%;
    height: 1.125rem;
    border-radius: 0.125rem;
  }
}
.friend-card {
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 0.5rem;
  justify-items: center;
  transition: all 0.15s linear;
  .wrapper {
    width: 100%;
    height: max-content;
    position: relative;
    .container {
      padding: 0.5rem 1rem;
      display: grid;
      grid-template-columns: 3rem 1fr;
      grid-template-rows: 3rem;
      gap: 0.5rem;
      align-items: center;
    }
    .friend-card-dropdown {
      right: 1rem;
      top: 1.75rem;
    }
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
  &.dark {
    .username {
      color: color("light", "darker");
    }
    &:hover {
      background: color("dark");
    }
  }
  &.light {
    .username {
      color: color("dark");
    }
    &:hover {
      background: color("light", "lighter");
    }
  }
}
</style>
