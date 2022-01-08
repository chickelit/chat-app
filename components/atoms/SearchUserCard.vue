<template>
  <div
    :class="['search-user-card', $modeClass, { sent: friendshipRequestSent }]"
    @mouseleave="disableDropdown"
  >
    <div class="wrapper">
      <Avatar :src="$src" />
      <div class="username">
        {{ user.username }}
      </div>
      <OptionsButton
        v-if="!user.friendship && !user.friendshipRequest"
        class="options-button"
        @click="toggleDropdown"
      />
      <Dropdown
        :class="['search-user-card-dropdown', { active: dropdownActive }]"
      >
        <button @click="sendFriendshipRequest">Enviar pedido de amizade</button>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { User } from "~/models";
import { friendshipRequest, mode, userSearch } from "~/store";
export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true,
    } as PropOptions<User>,
  },
  data() {
    return {
      dropdownActive: false,
      friendshipRequestSent: this.user.friendshipRequest,
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
    $src() {
      if (this.user.avatar) {
        const user = this.user as User;

        return user.avatar ? user.avatar.url : "";
      }

      return "";
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive;
    },
    disableDropdown() {
      this.dropdownActive = false;
    },
    async sendFriendshipRequest() {
      try {
        await friendshipRequest.create({ userId: this.user.id });

        userSearch.deleteUser(this.user.id);
      } catch (e) {}
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
}
.search-user-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  justify-items: center;
  transition: all 0.15s linear;
  .wrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    .search-user-card-dropdown {
      right: 2.25rem;
      top: 1.6rem;
      transition: opacity 0.15s linear;
    }
  }
  .options-button {
    transition: all 0.15s linear;
  }
  &.sent {
    .options-button {
      opacity: 0;
      pointer-events: none;
    }
    .search-user-card-dropdown {
      opacity: 0;
      pointer-events: none;
    }
  }
  .username {
    width: 100%;
    font-size: 1.125rem;
    color: color("light", "darker");
    .skeleton-text {
      width: 75%;
      height: 1.125rem;
      border-radius: 0.125rem;
    }
  }
  &:hover {
    background: color("dark", "lighter");
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
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
