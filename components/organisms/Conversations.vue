<template>
  <div class="conversations">
    <Wrapper>
      <ConversationList class="conversation-list" />
      <clientOnly>
        <notifications
          :max="1"
          group="global"
          classes="custom-notification"
          position="bottom right"
          style="bottom: 0.5rem; right: 0.5rem"
        />
      </clientOnly>
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
  background: color("dark", "darker");
  .conversations-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
</style>
