<template>
  <div class="groups-list">
    <ul>
      <li v-for="(group, index) of groups" :key="index">
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
  ul {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
    gap: 0.125rem;
  }
}
</style>
