<template>
  <div class="scroll-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.scroll-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
