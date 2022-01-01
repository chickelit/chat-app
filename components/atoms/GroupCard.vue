<template>
  <div
    :class="[
      'group-card',
      { dark: $mode === 'dark', light: $mode === 'light' },
    ]"
    @mouseleave="disableDropdown"
  >
    <div v-if="group" class="wrapper">
      <NuxtLink :to="`/chat/group/${group.id}`" class="container">
        <Cover :src="$src" />
        <div class="secondary__container">
          <div class="title">
            {{ group.title }}
          </div>
          <div v-if="group.latestMessage" class="latest-message">...</div>
          <div v-else class="latest-message">
            O grupo ainda não tem mensagens...
          </div>
        </div>
      </NuxtLink>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown :class="['group-card-dropdown', { active: dropdownActive }]">
        <NuxtLink :to="`/groups/${group.id}/details`">
          Ver dados do grupo
        </NuxtLink>
      </Dropdown>
    </div>
    <div v-else class="wrapper">
      <div class="container">
        <Cover />
        <div class="secondary__container">
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
      <OptionsButton v-if="group" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { setView } from "@/utils";
import { Group } from "~/models";
import { group, groupCover, mode } from "~/store";
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
      dropdownActive: false,
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
  methods: {
    toggleDropdown() {
      if (this.group) {
        this.dropdownActive = !this.dropdownActive;
      }
    },
    disableDropdown() {
      if (this.group) {
        this.dropdownActive = false;
      }
    },
    async handleGroupDetails() {
      try {
        await group.show({ groupId: this.group.id });

        setView({
          newView: "GroupDetails",
          previousView: "Groups",
          navigationActiveClass: "groups-anchor",
        });
      } catch (e) {}
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
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("dark", "lighter");
  }
  .wrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    .group-card-dropdown {
      right: 2rem;
      top: 1.6rem;
    }
  }
  .container {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
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
      color: color("light", "darker");
      .skeleton-text {
        width: 60%;
        height: 1.125rem;
        margin-bottom: 0.25rem;
        border-radius: 0.125rem;
      }
    }
    .latest-message {
      width: 100%;
      color: color("light", "darkest");
      .skeleton-text {
        width: 75%;
        height: 1rem;
        border-radius: 0.125rem;
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
