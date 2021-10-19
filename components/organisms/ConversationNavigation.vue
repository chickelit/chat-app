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
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100%;
  background: color("primary");
  border-radius: 0.3125rem;
  .conversation-navigation {
    margin: 0.5rem;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      grid-auto-flow: row;
      gap: 0.5rem;
    }
  }
}
</style>
