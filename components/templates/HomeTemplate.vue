<template>
  <div class="home-template">
    <Header />
    <Navigation />
    <main class="main">
      <component :is="$view" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { friendshipRequest, view } from "@/store";
import { socket } from "~/plugins/socket.client";
import { User } from "~/models";
export default Vue.extend({
  computed: {
    $view() {
      return view.$view;
    },
  },
  mounted() {
    socket.on("newFriendshipRequest", (user: User) => {
      friendshipRequest.update([user]);

      this.$notify({
        type: "primary",
        title: "Pedido de amizade",
        text: `Você tem um novo pedido de amizade de ${user.username}...`,
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr max-content;
  user-select: none;
  .main {
    position: relative;
  }
}
</style>
