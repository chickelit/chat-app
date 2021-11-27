<template>
  <div class="conversations">
    <Wrapper>
      <ConversationList class="conversation-list" />
    </Wrapper>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.conversations {
  position: relative;
  width: 100%;
  height: 100%;
  background: color("dark");
  .conversations-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
</style>
