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
import {
  conversation,
  friendship,
  friendshipRequest,
  profile,
  view,
} from "@/store";
import socket from "~/plugins/socket.client";
import { Conversation, User } from "~/models";
export default Vue.extend({
  computed: {
    $view() {
      return view.$view;
    },
  },
  mounted() {
    socket.emit("create", `user-${profile.$single.id}`);

    socket.on("newFriendshipRequest", (user: User) => {
      friendshipRequest.updateFriendshipRequests([user]);

      Vue.notify({
        type: "primary",
        group: "global",
        title: "Você tem um novo pedido de amizade!",
        text: `${user.username} pediu para ser seu amigo!`,
      });
    });

    socket.on("friendshipRequestAccepted", (user: User) => {
      Vue.notify({
        type: "primary",
        group: "global",
        title: "Pedido de amizade aceito!",
        text: `${user.username} aceitou seu pedido de amizade!`,
      });
    });

    socket.on("newFriend", (user: User) => {
      friendship.updateFriends([user]);
    });

    socket.on("deleteFriend", (userId: number) => {
      friendship.deleteFriend(userId);
    });

    socket.on("newConversation", (newConversation: Conversation) => {
      conversation.updateConversations([newConversation]);
    });

    socket.on("newGroup", (data) => {
      console.log(data);
    });

    socket.on("newMember", (data) => {
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
