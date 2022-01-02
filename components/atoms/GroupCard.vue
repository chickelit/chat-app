<template>
  <div
    :class="[
      'group-card',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
  >
    <NuxtLink v-if="group" :to="`/chat/group/${group.id}`" class="wrapper">
      <Cover :src="$src" />
      <div class="container">
        <div class="title">
          {{ group.title }}
        </div>
        <div v-if="group.latestMessage" class="latest-message">...</div>
        <div v-else class="latest-message">
          O grupo ainda não tem mensagens...
        </div>
      </div>
    </NuxtLink>
    <div v-else class="wrapper">
      <Cover />
      <div class="container">
        <div class="title">
          <div
            :class="[
              'skeleton',
              'skeleton-text',
              { dark: $mode === 'dark', light: $mode === 'light' },
            ]"
          ></div>
        </div>
        <div class="latest-message">
          <div
            :class="[
              'skeleton',
              'skeleton-text',
              { dark: $mode === 'dark', light: $mode === 'light' },
            ]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { setView } from "@/utils";
import { Group } from "~/models";
import { groupCover, mode } from "~/store";
export default Vue.extend({
  props: {
    index: {
      type: Number,
      required: true,
    },
    group: {
      type: Object,
      required: false,
    } as PropOptions<Group>,
  },
  data() {
    return {
      setView,
    };
  },
  computed: {
    $cover() {
      return groupCover;
    },
    $mode() {
      return mode.$mode;
    },
    $src() {
      if (this.group) {
        const group = this.group as Group;
        return group.groupCover?.url || "";
      }

      return "";
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
}
.group-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  .wrapper {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    .container {
      display: grid;
      .cover {
        height: 100%;
        width: 100%;
        border-radius: 100%;
        img {
          height: 100%;
          width: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }
      .title {
        width: 100%;
        font-size: 1.125rem;
        .skeleton-text {
          width: 60%;
          height: 1.125rem;
          margin-bottom: 0.25rem;
          border-radius: 0.125rem;
        }
      }
      .latest-message {
        width: 100%;
        .skeleton-text {
          width: 75%;
          height: 1rem;
          border-radius: 0.125rem;
        }
      }
    }
  }

  &.dark {
    &:hover {
      background: color("dark");
    }
    .container {
      .title {
        color: color("light", "darker");
      }
      .latest-message {
        color: color("light", "darkest");
      }
    }
  }
  &.light {
    &:hover {
      background: color("light", "lighter");
    }
    .container {
      .title {
        color: color("dark");
      }
      .latest-message {
        color: color("dark");
      }
    }
  }
}
</style>
