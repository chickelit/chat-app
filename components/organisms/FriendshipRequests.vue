<template>
  <div class="friendship-requests">
    <Wrapper>
      <FriendshipRequestList />
      <clientOnly>
        <notifications
          :max="1"
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
.friendship-requests {
  position: relative;
  width: 100%;
  height: 100%;
  background: color("dark");
  .friendship-request-list {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
  }
}
</style>
