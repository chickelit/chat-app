<template>
  <div
    :class="['groups', { dark: $mode === 'dark', light: $mode === 'light' }]"
  >
    <Wrapper>
      <GroupList class="group-list" />
      <AddButton class="add-button" @click="openForm" />
      <div
        :class="['background-cover', { active: show }]"
        @click="closeForm"
      ></div>
      <div :class="['form-wrapper', { active: show }]">
        <CreateGroup class="create-group" @completed="closeForm" />
      </div>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      show: false,
    };
  },
  computed: {
    $mode() {
      return mode.$mode;
    },
  },
  methods: {
    openForm() {
      this.show = true;
    },
    closeForm() {
      this.show = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.form-wrapper {
  height: 20rem;
  width: 30rem;
  opacity: 0;
  transform: translateY(2rem);
  position: fixed;
  left: calc(50% - 15rem);
  bottom: calc(50% - 10rem);
  z-index: 4;
  transition: all 0.25s linear;
  background: color("light", "lightest");
  border-radius: 1rem;
  .create-group {
    border-radius: 1rem;
  }
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
  @include screen("small") {
    opacity: 1;
    height: 50%;
    max-height: 24rem;
    width: 100vw;
    transform: translateY(100%);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 4;
    transition: all 0.25s linear;
    background: color("light", "lightest");
    border-radius: 2rem 2rem 0 0;
    .create-group {
      border-radius: 2rem 2rem 0 0;
    }
    &.active {
      transform: translateY(0);
    }
  }
}
.background-cover {
  background: color("dark", "darkest");
  position: fixed;
  inset: 0;
  z-index: 3;
  opacity: 0;
  transition: all 0.25s linear;
  pointer-events: none;
  &.active {
    opacity: 0.4;
    pointer-events: auto;
  }
}
::-webkit-scrollbar {
  width: 0px;
}
.groups {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  &.dark {
    background: color("dark", "darker");
  }
  &.light {
    background: color("light", "lightest");
  }
  .group-list {
    position: absolute;
    inset: 0;
    overflow-y: auto;
  }
}
.add-button {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
}
</style>
