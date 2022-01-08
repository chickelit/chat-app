<template>
  <div
    :class="['friends', { dark: $mode === 'dark', light: $mode === 'light' }]"
  >
    <Wrapper>
      <FriendList class="friend-list" />
      <NuxtLink to="/search" @click.native.prevent>
        <AddButton class="add-button" />
      </NuxtLink>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  computed: {
    $mode() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.add-button {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  width: 3rem;
  background: color("primary");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.15s linear;
  &:hover {
    background: color("primary", "lighter");
  }
}
::-webkit-scrollbar {
  width: 0px;
}
.friends {
  position: relative;
  width: 100%;
  height: 100%;
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
  .friend-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
</style>
