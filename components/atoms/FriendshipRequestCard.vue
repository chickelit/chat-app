<template>
  <div
    :class="[
      'friendship-request-card',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
    @mouseleave="disableDropdown"
  >
    <div v-if="friendshipRequest" class="wrapper">
      <div class="container" @click="toggleDropdown">
        <Avatar :src="$src" />
        <div class="username">
          {{ friendshipRequest.username }}
        </div>
      </div>
      <Dropdown
        :class="[
          'friendship-request-card-dropdown',
          { active: dropdownActive },
        ]"
      >
        <button @click="acceptFriendshipRequest">Aceitar o pedido</button>
        <button class="danger" @click="refuseFriendshipRequest">
          Recusar o pedido
        </button>
      </Dropdown>
    </div>
    <div v-else class="wrapper">
      <div class="container">
        <Avatar />
        <div class="username">
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
import { User } from "~/models";
import { friendship, friendshipRequest, mode } from "~/store";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
    friendshipRequest: {
      type: Object,
      required: false,
    } as PropOptions<User>,
  },
  data() {
    return {
      dropdownActive: false,
    };
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
    $src() {
      if (this.friendshipRequest) {
        const friendshipRequest = this.friendshipRequest as User;

        return friendshipRequest.avatar?.url || "";
      }

      return "";
    },
  },
  methods: {
    toggleDropdown() {
      if (this.friendshipRequest) {
        this.dropdownActive = !this.dropdownActive;
      }
    },
    disableDropdown() {
      if (this.friendshipRequest) {
        this.dropdownActive = false;
      }
    },
    async acceptFriendshipRequest() {
      try {
        await friendship.create({ userId: this.friendshipRequest.id });

        this.dropdownActive = false;
      } catch (e) {
        Vue.notify({
          type: "error",
          group: "global",
          title: "Ops...",
          text: "Houve um erro ao aceitar o pedido...",
        });
      }
    },
    async refuseFriendshipRequest() {
      try {
        await friendshipRequest.delete({ userId: this.friendshipRequest.id });

        this.dropdownActive = false;
      } catch (e) {
        Vue.notify({
          type: "error",
          group: "global",
          title: "Ops...",
          text: "Houve um erro ao recusar o pedido...",
        });
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
.friendship-request-card {
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
      .username {
        width: 100;
        font-size: 1.125rem;
        .skeleton-text {
          width: 75%;
          height: 1.125rem;
          border-radius: 0.125rem;
        }
      }
    }
    .friendship-request-card-dropdown {
      right: 1rem;
      top: 1.5rem;
    }
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  &.dark {
    .wrapper {
      .container {
        .username {
          color: color("light", "darker");
        }
      }
    }
    &:hover {
      background: color("dark");
    }
  }
  &.light {
    .wrapper {
      .container {
        .username {
          color: color("dark");
        }
      }
    }
    &:hover {
      background: color("light", "lighter");
    }
  }
}
</style>
