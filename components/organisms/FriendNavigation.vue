<template>
  <main class="main">
    <nav class="friend-navigation">
      <ul>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
        </li>
        <li class="friend-card">
          <FriendCard />
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
  inset: 1rem 0;
  background: color("primary");
  border-radius: 0.3125rem;
  .friend-navigation {
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
