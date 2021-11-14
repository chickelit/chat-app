<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  position: relative;
  height: 100%;
  width: 60%;
  max-width: 48rem;
  @include screen("medium") {
    width: 100%;
  }
}
</style>