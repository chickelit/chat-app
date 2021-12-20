<template>
  <div class="scroll-wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  ::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
