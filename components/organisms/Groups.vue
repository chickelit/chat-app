<template>
  <div class="groups-list">
    <ul class="groups">
      <li v-for="(group, index) of groups" :key="index" class="group">
        <GroupCard :index="index" :mine="group.mine" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      groups: [
        { mine: false },
        { mine: false },
        { mine: true },
        { mine: false },
        { mine: true },
        { mine: false },
        { mine: false },
        { mine: false },
        { mine: false },
        { mine: false },
        { mine: false },
        { mine: false },
        { mine: true },
        { mine: false },
        { mine: false },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.groups-list {
  position: absolute;
  inset: 0;
  background: color("secondary");
  .groups {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
    gap: 0.125rem;
    .group {
      &:nth-last-child(1) {
        ::v-deep.group-card {
          .group-card-dropdown {
            top: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
