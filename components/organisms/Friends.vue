<template>
  <div class="friends">
    <ul>
      <li>
        <FriendCard :index="0" />
      </li>
      <li>
        <FriendCard :index="1" />
      </li>
      <li>
        <FriendCard :index="2" />
      </li>
      <li>
        <FriendCard :index="3" />
      </li>
      <li>
        <FriendCard :index="4" />
      </li>
      <li>
        <FriendCard :index="5" />
      </li>
      <li>
        <FriendCard :index="6" />
      </li>
      <li>
        <FriendCard :index="7" />
      </li>
      <li>
        <FriendCard :index="8" />
      </li>
      <li>
        <FriendCard :index="9" />
      </li>
      <li>
        <FriendCard :index="10" />
      </li>
      <li>
        <FriendCard :index="11" />
      </li>
      <li>
        <FriendCard :index="12" />
      </li>
      <li>
        <FriendCard :index="13" />
      </li>
      <li>
        <FriendCard :index="14" />
      </li>
      <li>
        <FriendCard :index="15" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.friends {
  height: 100%;
  background: color("secondary");
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  ul {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
    gap: 0.125rem;
    li {
      &:nth-last-child(1) {
        ::v-deep.friend-card {
          .friend-card-dropdown {
            top: -0.8rem;
          }
        }
      }
    }
  }
}
</style>
