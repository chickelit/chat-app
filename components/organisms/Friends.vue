<template>
  <div class="friends">
    <Wrapper>
      <FriendList class="friend-list" />
    </Wrapper>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.friends {
  position: relative;
  width: 100%;
  height: 100%;
  background: color("dark");
  .friend-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
</style>
