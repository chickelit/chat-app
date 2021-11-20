<template>
  <div class="groups">
    <Wrapper>
      <ul class="groups-list">
        <li v-for="(group, index) of groups" :key="index" class="group">
          <GroupCard
            :index="index"
            :mine="group.mine"
            @click="setView({ newView: 'GroupChat' })"
          />
        </li>
      </ul>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
export default Vue.extend({
  data() {
    return {
      setView,
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
.groups {
  position: absolute;
  inset: 0;
  background: color("dark");
  .groups-list {
    background: color("dark", "darker");
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
            top: -0.375rem;
          }
        }
      }
    }
  }
}
</style>
