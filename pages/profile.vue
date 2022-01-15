<template>
  <ProfileTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import auth from "@/middleware/auth";
import socket from "~/plugins/socket.client";
import {
  conversation,
  friendship,
  friendshipRequest,
  profile,
  group,
  member,
} from "~/store";
export default Vue.extend({
  middleware: auth,
  created() {
    socket.emit("create", `user-${profile.$single.id}`);

    socket.on("newFriendshipRequest", (data) => {
      friendshipRequest.updateFriendshipRequests([data]);
    });

    socket.on("newFriend", (user) => {
      friendship.updateFriends([user]);
    });

    socket.on("deleteFriend", (userId) => {
      friendship.deleteFriend(userId);
    });

    socket.on("newConversation", (data) => {
      conversation.updateConversations([data]);
    });

    socket.on("newGroup", (data) => {
      group.updateGroups([data.group]);
    });

    socket.on("newMember", ({ groupId, user }) => {
      if (group.$single.id === groupId) {
        member.updateMembers([user]);
      }
    });

    socket.on("deleteGroup", (groupId) => {
      group.deleteGroup(groupId);
    });

    socket.on("deleteMember", ({ groupId, user }) => {
      if (group.$single.id === groupId) {
        member.deleteMember(user);
      }
    });
  },
  beforeDestroy() {
    socket.removeAllListeners();
  },
});
</script>
