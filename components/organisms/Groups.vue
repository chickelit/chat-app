<template>
  <div class="groups">
    <Wrapper>
      <GroupList class="group-list" />
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
.groups {
  position: relative;
  width: 100%;
  height: 100%;
  background: color("dark");
  .group-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
</style>
