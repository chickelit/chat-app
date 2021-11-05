<template>
  <div class="chat-header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.chat-header {
  padding: 0.75rem;
  background: color("primary");
  border-radius: 0.3125rem 0.3125rem 0 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: auto 3.4rem 1fr;
  grid-template-rows: 3.4rem;
  align-items: center;
  gap: 1rem;
}
</style>
