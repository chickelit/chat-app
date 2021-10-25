<template>
  <main class="main">
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
  </main>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.main {
  position: absolute;
  inset: 1rem;
  background: color("primary");
  border-radius: 0.3125rem;
  .conversation-navigation {
    position: absolute;
    inset: 0.5rem;
    ul {
      position: absolute;
      inset: 0;
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
