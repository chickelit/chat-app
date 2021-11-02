<template>
  <div class="conversations-list">
    <ul>
      <li>
        <ConversationCard :index="0" />
      </li>
      <li>
        <ConversationCard :index="1" />
      </li>
      <li>
        <ConversationCard :index="2" />
      </li>
      <li>
        <ConversationCard :index="3" />
      </li>
      <li>
        <ConversationCard :index="4" />
      </li>
      <li>
        <ConversationCard :index="5" />
      </li>
      <li>
        <ConversationCard :index="6" />
      </li>
      <li>
        <ConversationCard :index="7" />
      </li>
      <li>
        <ConversationCard :index="8" />
      </li>
      <li>
        <ConversationCard :index="9" />
      </li>
      <li>
        <ConversationCard :index="10" />
      </li>
      <li>
        <ConversationCard :index="11" />
      </li>
      <li>
        <ConversationCard :index="12" />
      </li>
      <li>
        <ConversationCard :index="13" />
      </li>
      <li>
        <ConversationCard :index="14" />
      </li>
      <li>
        <ConversationCard :index="15" />
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
