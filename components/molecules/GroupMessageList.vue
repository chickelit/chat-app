<template>
  <div class="group-message-list">
    <GroupMessage :mine="true" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="true" />
    <GroupMessage :mine="false" />
    <GroupMessage :mine="true" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {
    const messageList = document.querySelector(".group-message-list")!;
    const latestMessage = messageList.lastChild as Element;

    latestMessage.scrollIntoView({ behavior: "auto", block: "end" });
  },
});
</script>

<style lang="scss" scoped>
.group-message-list {
  position: absolute;
  inset: 0.5rem 1rem;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  gap: 0.75rem;
}
</style>
