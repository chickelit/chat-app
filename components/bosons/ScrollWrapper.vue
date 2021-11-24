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
  ::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
