<template>
  <FriendshipsTemplate />
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
      console.log(`new request: ${data}`);
      friendshipRequest.updateFriendshipRequests([data]);
    });

    socket.on("friendshipRequestAccepted", (data) => {
      console.log(`accepted: ${data}`);
      /* notity */
    });

    socket.on("newFriend", (user) => {
      console.log(`new friend: ${user}`);
      friendship.updateFriends([user]);
    });

    socket.on("deleteFriend", (userId) => {
      console.log(`deleted friend: ${userId}`);
      friendship.deleteFriend(userId);
    });

    socket.on("newConversation", (data) => {
      console.log(`new conversation: ${data}`);
      conversation.updateConversations([data]);
    });

    socket.on("newGroup", (data) => {
      console.log(`new group: ${data}`);
      group.updateGroups([data.group]);
      /* notify with data.user */
    });

    socket.on("newMember", ({ groupId, user }) => {
      console.log(`new member: ${user} on group: ${groupId}`);

      if (group.$single.id === groupId) {
        member.updateMembers([user]);
      }
    });

    socket.on("deleteGroup", (groupId) => {
      console.log(`delete group: ${groupId}`);

      group.deleteGroup(groupId);
    });

    socket.on("deleteMember", ({ groupId, user }) => {
      console.log(`delete member: ${user} on group: ${groupId}`);

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
