<template>
  <div class="friendship-request-card" @mouseleave="disableDropdown">
    <div v-if="friendshipRequest" class="wrapper">
      <div class="container" @click="toggleDropdown">
        <div v-if="friendshipRequest.avatar" class="avatar">
          <img
            :src="friendshipRequest.avatar.url"
            :alt="`Avatar de ${friendshipRequest.username}`"
          />
        </div>
        <div v-else class="avatar skeleton"></div>
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
        <button
          :aria-label="`Aceitar pedido de amizade de ${friendshipRequest.username}`"
          @click="acceptFriendshipRequest"
        >
          Aceitar o pedido
        </button>
        <button
          class="danger"
          :aria-label="`Recusar pedido de amizade de ${friendshipRequest.username}`"
          @click="refuseFriendshipRequest"
        >
          Recusar o pedido
        </button>
      </Dropdown>
    </div>
    <div v-else class="wrapper">
      <div class="container">
        <div class="avatar skeleton"></div>
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
import { friend, friendshipRequest } from "~/store";
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
        await friend.create({ userId: this.friendshipRequest.id });

        this.dropdownActive = false;
      } catch (e) {
        this.$notify({
          type: "error",
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
        this.$notify({
          type: "error",
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
.username {
  width: 100;
  font-size: 1.125rem;
  color: color("light", "darker");
  .skeleton-text {
    width: 75%;
    height: 1.125rem;
    border-radius: 0.125rem;
  }
}
.friendship-request-card {
  cursor: pointer;
  background: color("dark");
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
    .friendship-request-card-dropdown {
      right: 1rem;
      top: 1.5rem;
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
}
</style>
