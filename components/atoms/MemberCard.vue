<template>
  <div class="member-card" @mouseleave="disableDropdown">
    <div v-if="member" class="member-card-wrapper">
      <div v-if="member.avatar" class="avatar">
        <img :src="member.avatar.url" :alt="`Avatar de ${member.username}`" />
      </div>
      <div v-else class="avatar skeleton"></div>
      <div class="username">
        {{ member.username }}
      </div>
      <OptionsButton v-if="showOptions" @click="toggleDropdown" />
      <Dropdown :class="['member-card-dropdown', { active: dropdownActive }]">
        <button
          :aria-label="`Remover ${member.username} do grupo`"
          class="danger"
        >
          Remover {{ member.username }} do grupo
        </button>
      </Dropdown>
    </div>
    <div v-else class="member-card-wrapper">
      <div class="avatar skeleton"></div>
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <OptionsButton v-if="showOptions" @click="toggleDropdown" />
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
    index: {
      type: Number,
      required: true,
    },
    showOptions: {
      type: Boolean,
      default: false,
    },
    member: {
      type: Object,
      required: false,
    } as PropOptions<User>,
  },
  data() {
    return {
      dropdownActive: false,
    };
  },
  methods: {
    toggleDropdown() {
      if (this.member) {
        this.dropdownActive = !this.dropdownActive;
      }
    },
    disableDropdown() {
      if (this.member) {
        this.dropdownActive = false;
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
.member-card {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  justify-items: center;
  transition: all 0.15s linear;
  .member-card-wrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: 3rem;
    gap: 0.5rem;
    align-items: center;
    .member-card-dropdown {
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
    img {
      height: 100%;
      width: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
  }
}
</style>
