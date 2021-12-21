<template>
  <div
    :class="[
      'available-member-card',
      {
        'selected': selected,
      },
    ]"
    @click="toggleSelection"
  >
    <div v-if="availableMember" class="available-member-card-wrapper">
      <div v-if="availableMember.avatar" class="avatar">
        <img
          :src="availableMember.avatar.url"
          :alt="`Avatar de ${availableMember.username}`"
        />
      </div>
      <div v-else class="avatar skeleton"></div>
      <div class="username">
        {{ availableMember.username }}
      </div>
    </div>
    <div v-else class="available-member-card-wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { User } from "~/models";
export default Vue.extend({
  props: {
    availableMember: {
      type: Object,
      required: false,
    } as PropOptions<User>,
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleSelection() {
      if (this.availableMember) {
        this.selected = !this.selected;

        if (this.selected) {
          this.$emit("selected");
        } else {
          this.$emit("unselected");
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.danger {
  color: color("danger") !important;
  transition: all 0.15s linear;
  &:hover {
    color: color("danger", "lighter") !important;
  }
}
.username {
  width: 100%;
  font-size: 1.125rem;
  color: color("light", "darker");
  .skeleton-text {
    width: 75%;
    height: 1.125rem;
    border-radius: 0.125rem;
  }
}
.available-member-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  justify-items: center;
  transition: all 0.15s linear;
  &.selected {
    background: color("dark", "lighter");
  }
  .available-member-card-wrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    .available-member-card-dropdown {
      right: 2.25rem;
      top: 1.6rem;
    }
  }
  &:hover {
    background: color("dark", "lighter");
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
}
</style>
