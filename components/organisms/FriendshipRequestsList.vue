<template>
  <div class="friendship-requests-list">
    <nav>
      <ul>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
        <li>
          <FriendshipRequestCard />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.friendship-requests-list {
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
