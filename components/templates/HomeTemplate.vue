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
import { friendshipRequest, profile, view } from "@/store";
import socket from "~/plugins/socket.client";
import { User } from "~/models";
export default Vue.extend({
  computed: {
    $view() {
      return view.$view;
    },
  },
  mounted() {
    socket.emit("create", `user-${profile.$single.id}`);

    socket.on("newFriendshipRequest", (user: User) => {
      friendshipRequest.update([user]);

      Vue.notify({
        type: "primary",
        title: "Você tem um novo pedido de amizade!",
        text: `${user.username} pediu para ser seu amigo!`,
      });
    });

    socket.on("newFriend", (data: any) => {
      console.log(data);
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
