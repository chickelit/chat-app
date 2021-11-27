<template>
  <div class="groups-list">
    <div v-for="(group, index) of groups" :key="index">
      <GroupCard :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { view } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
      groups: Array(15).fill(false),
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
  },
});
</script>

<style lang="scss" scoped>
.groups-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  div {
    &:nth-last-child(1) {
      ::v-deep.group-card {
        .group-card-dropdown {
          top: -0.375rem;
        }
      }
    }
  }
}
</style>
