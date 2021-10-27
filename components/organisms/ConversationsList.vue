<template>
  <div class="conversations-list">
    <nav>
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
    </nav>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.conversations-list {
  position: absolute;
  inset: 1rem 0;
  background: color("primary");
  border-radius: 0.3125rem;
  nav {
    position: absolute;
    inset: 0.5rem;
    ul {
      position: absolute;
      inset: 0;
      overflow-y: scroll;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      grid-auto-flow: row;
      gap: 0.5rem;
    }
  }
}
</style>
