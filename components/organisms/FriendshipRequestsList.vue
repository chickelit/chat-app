<template>
  <div class="friendship-requests-list">
    <nav>
      <ul>
        <li>
          <FriendshipRequestCard :index="0" />
        </li>
        <li>
          <FriendshipRequestCard :index="1" />
        </li>
        <li>
          <FriendshipRequestCard :index="2" />
        </li>
        <li>
          <FriendshipRequestCard :index="3" />
        </li>
        <li>
          <FriendshipRequestCard :index="4" />
        </li>
        <li>
          <FriendshipRequestCard :index="5" />
        </li>
        <li>
          <FriendshipRequestCard :index="6" />
        </li>
        <li>
          <FriendshipRequestCard :index="7" />
        </li>
        <li>
          <FriendshipRequestCard :index="8" />
        </li>
        <li>
          <FriendshipRequestCard :index="9" />
        </li>
        <li>
          <FriendshipRequestCard :index="10" />
        </li>
        <li>
          <FriendshipRequestCard :index="11" />
        </li>
        <li>
          <FriendshipRequestCard :index="12" />
        </li>
        <li>
          <FriendshipRequestCard :index="13" />
        </li>
        <li>
          <FriendshipRequestCard :index="14" />
        </li>
        <li>
          <FriendshipRequestCard :index="15" />
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
