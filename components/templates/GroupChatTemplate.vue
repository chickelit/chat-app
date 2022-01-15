<template>
  <div :class="['group-chat-template', $modeClass]">
    <GroupChatHeader :group="group" />
    <GroupMessageList />
    <MessageEngine
      @sendMessage="sendMessage($event)"
      @sendMedia="sendMedia($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Group } from "~/models";
import socket from "~/plugins/socket.client";
import { group, groupMessage, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      group: false as unknown as Group,
      scrollDownButtonActive: false,
      page: 1,
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
  },
  async beforeMount() {
    try {
      await group.show({ groupId: +this.$route.params.id });

      socket.emit("create", `group-${group.$single.id}`);

      this.group = group.$single;
    } catch (error) {}
  },
  methods: {
    async sendMessage(content: string) {
      try {
        await groupMessage.create({
          content,
          groupId: group.$single.id,
        });
      } catch (error) {}
    },
    async sendMedia(file: any) {
      try {
        await groupMessage.create({
          category: "media",
          file,
          groupId: group.$single.id,
        });
      } catch (error) {}
    },
  },
});
</script>

<style lang="scss" scoped>
.group-chat-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
}
</style>
