<template>
  <GroupsTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import auth from "@/middleware/auth";
import socket from "~/plugins/socket.client";
import { friendship, friendshipRequest, profile } from "~/store";
export default Vue.extend({
  middleware: auth,
  created() {
    socket.emit("create", `user-${profile.$single.id}`);

    socket.on("newFriendshipRequest", (data) => {
      friendshipRequest.updateFriendshipRequests([data]);
    });

    socket.on("friendshipRequestAccepted", (data) => {
      console.log(data);
    });

    socket.on("newFriend", (user) => {
      console.log(user);
      friendship.updateFriends([user]);
    });
  },
});
</script>