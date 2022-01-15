<template>
  <div :class="['group-details-template', $modeClass]">
    <CustomHeader class="header">
      <Wrapper class="wrapper">
        <BackButton class="back-button" />
        <Cover :src="$src" />
        <div v-if="group" class="title">{{ group.title }}</div>
      </Wrapper>
    </CustomHeader>
    <GroupDetails />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Group } from "~/models";
import { group, mode } from "~/store";
export default Vue.extend({
  data() {
    return {
      group: false as unknown as Group,
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
    $src() {
      if (this.group) {
        const group = this.group as Group;

        return group.groupCover ? group.groupCover.url : "";
      }

      return "";
    },
  },
  async beforeMount() {
    try {
      await group.show({ groupId: +this.$route.params.id });

      this.group = group.$single;
    } catch (error) {}
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  width: 2.25rem;
}
.group-details-template {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 2rem;
  .header {
    width: calc(100% - 2rem);
    padding: 0.75rem;
    .wrapper {
      display: grid;
      grid-template-columns: 2.25rem 3.4rem 1fr;
      grid-template-rows: auto;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      .hamburger-button {
        justify-self: end;
      }
      @include screen("medium") {
        width: 100%;
      }
      .title {
        font-size: 1.125rem;
        line-height: 1.125rem;
        font-weight: 500;
      }
    }
  }
  &.dark {
    background: color("dark", "darker");
    .title {
      color: color("light", "darkest");
    }
  }
  &.light {
    background: color("light", "lightest");
    .title {
      color: color("dark", "lighter");
    }
  }
}
</style>
