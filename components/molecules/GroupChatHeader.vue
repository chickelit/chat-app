<template>
  <div :class="['group-chat-header', $modeClass]">
    <BackButton class="back-button" />
    <Cover :src="$src" />
    <div v-if="group" class="title">
      {{ group.title }}
    </div>
    <div v-else class="title">
      <div :class="['skeleton', 'skeleton-text', $modeClass]"></div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { Group } from "~/models";
import { mode } from "~/store";
export default Vue.extend({
  props: {
    group: {
      type: Object,
      required: false,
    } as PropOptions<Group>,
  },
  computed: {
    $src() {
      if (this.group) {
        const group = this.group as Group;

        return group.groupCover ? group.groupCover.url : "";
      }

      return "";
    },
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.group-chat-header {
  padding: 0.75rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background: inherit;
  display: grid;
  grid-template-columns: auto 3.4rem 1fr;
  grid-template-rows: 3.4rem;
  align-items: center;
  gap: 0.5rem;
  .back-button {
    width: 2.25rem;
  }
  .title {
    font-size: 1.125rem;
    .skeleton-text {
      width: 60%;
      max-width: 24rem;
      height: 1.125rem;
      margin-bottom: 0.25rem;
      border-radius: 0.125rem;
    }
  }
  &.dark {
    background: color("dark", "darkest");
    .title {
      color: color("light", "darkest");
    }
  }
  &.light {
    background: color("light", "lightest");
    .title {
      color: color("dark");
    }
  }
}
</style>
