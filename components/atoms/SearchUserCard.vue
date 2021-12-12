<template>
  <div class="user-card" @mouseleave="disableDropdown">
    <div class="wrapper">
      <div v-if="user.avatar" class="avatar"></div>
      <div v-else class="avatar skeleton"></div>
      <div class="username">
        {{ user.username }}
      </div>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="user-card-dropdown">
        <button
          :aria-label="`Enviar pedido de amizade para ${user.username}`"
          @click="sendFriendshipRequest"
        >
          Enviar pedido de amizade
        </button>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { User } from "~/models";
import { friendshipRequest } from "~/store";
export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true,
    } as PropOptions<User>,
  },
  methods: {
    toggleDropdown() {
      const userCardDropdown = document.querySelector(
        ".user-card-dropdown"
      ) as Element;

      userCardDropdown.classList.toggle("active");
    },
    disableDropdown() {
      const userCardDropdown = document.querySelector(
        ".user-card-dropdown"
      ) as Element;

      userCardDropdown.classList.remove("active");
    },
    async sendFriendshipRequest() {
      try {
        await friendshipRequest.create({ userId: this.user.id });

        this.$notify({
          type: "success",
          title: "Pedido enviado!",
        });
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao enviar o pedido...",
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
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
.user-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: color("dark");
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
    .user-card-dropdown {
      right: 2.25rem;
      top: 1.6rem;
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