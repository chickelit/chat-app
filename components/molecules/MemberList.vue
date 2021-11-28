<template>
  <div class="member-list">
    <MemberCard
      v-for="(member, index) in members"
      :key="index"
      class="member-card"
      :index="index"
      :show-options="member.showOptions"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      members: Array(15).fill({ showOptions: true }),
    };
  },
});
</script>

<style lang="scss" scoped>
.member-list {
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: max-content;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .member-card {
    &:nth-last-child(1) {
      ::v-deep.member-card-dropdown {
        top: -0.375rem;
      }
    }
  }
}
</style>
