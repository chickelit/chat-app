<template>
  <div
    class="group-card"
    aria-label="Conversar no grupo <title>"
    role="link"
    @mouseleave="disableDropdown"
  >
    <div v-if="group" class="group-card-wrapper">
      <div class="data-container" @click="$emit('click')">
        <div v-if="group.id === $cover.$groupId && $cover.$blob" class="cover">
          <img :src="$cover.$blob" :alt="`Imagem do grupo ${group.title}`" />
        </div>
        <div v-else-if="group.groupCover" class="cover">
          <img
            :src="group.groupCover.url"
            :alt="`Imagem do grupo ${group.title}`"
          />
        </div>
        <div v-else class="cover skeleton"></div>
        <div class="container">
          <div class="title">
            {{ group.title }}
          </div>
          <div v-if="group.latestMessage" class="latest-message">
            ...
          </div>
          <div v-else class="latest-message">
            O grupo ainda não tem mensagens...
          </div>
        </div>
      </div>
      <OptionsButton @click="toggleDropdown" />
      <Dropdown class="group-card-dropdown">
        <button aria-label="Ver dados do grupo" @click="handleGroupDetails">
          Ver dados do grupo
        </button>
      </Dropdown>
    </div>
    <div v-else class="group-card-wrapper">
      <div class="data-container">
        <div class="cover skeleton" />
        <div class="container">
          <div class="title">
            <div class="skeleton skeleton-text"></div>
          </div>
          <div class="latest-message">
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>
      <OptionsButton />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { setView } from "@/utils";
import { Group } from "~/models";
import { group, groupCover } from "~/store";
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
  },
  methods: {
    toggleDropdown() {
      if (this.group) {
        const groupCardDropdown = document.querySelectorAll(
          ".group-card-dropdown"
        )[this.index] as Element;

        groupCardDropdown.classList.toggle("active");
      }
    },
    disableDropdown() {
      if (this.group) {
        const groupCardDropdown = document.querySelectorAll(
          ".group-card-dropdown"
        )[this.index] as Element;

        groupCardDropdown.classList.remove("active");
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
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("dark", "lighter");
  }
  .group-card-wrapper {
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
  .data-container {
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
}
</style>
