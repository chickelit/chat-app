<template>
  <div class="groups-list">
    <ul>
      <li>
        <GroupCard :mine="true" />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard :mine="true" />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard :mine="true" />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard :mine="true" />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard :mine="true" />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard />
      </li>
      <li>
        <GroupCard :mine="true" />
      </li>
      <li>
        <GroupCard />
      </li>
    </ul>
  </div>
</template>

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
