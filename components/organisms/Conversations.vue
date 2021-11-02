<template>
  <div class="conversations-list">
    <ul>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
      <li>
        <ConversationCard />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.conversations-list {
  position: absolute;
  inset: 0;
  background: color("secondary");
  ul {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
    gap: 0.125rem;
  }
}
</style>
