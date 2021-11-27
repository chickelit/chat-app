<template>
  <div class="groups">
    <Wrapper>
      <GroupList class="group-list" />
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
