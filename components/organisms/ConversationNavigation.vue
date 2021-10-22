<template>
  <aside class="aside">
    <nav class="conversation-navigation">
      <ul>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
        <li class="conversation-card">
          <ConversationCard />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.aside {
  min-height: 32rem;
  height: 100%;
  background: color("primary");
  border-radius: 0.3125rem;
  .conversation-navigation {
    position: relative;
    height: 100%;
    ul {
      position: absolute;
      inset: 0.5rem;
      overflow-y: scroll;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      grid-auto-flow: row;
      gap: 0.5rem;
    }
  }
}
</style>
