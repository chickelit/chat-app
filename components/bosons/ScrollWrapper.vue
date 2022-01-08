<template>
  <div class="scroll-wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.scroll-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  .content {
    position: absolute;
    inset: 0;
  }
}
</style>
