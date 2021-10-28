<template>
  <div class="conversation-message-list">
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
    <ConversationMessage :mine="false" />
    <ConversationMessage :mine="true" />
  </div>
</template>

<style lang="scss" scoped>
.conversation-message-list {
  position: absolute;
  inset: 0.5rem 1rem;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  gap: 0.75rem;
}
</style>
