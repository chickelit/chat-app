<template>
  <div class="friends">
    <div class="friends-list">
      <ul>
        <li v-for="(friend, index) of friends" :key="index">
          <FriendCard :index="index" />
        </li>
      </ul>
    </div>
    <nav class="friends-navigation">
      <ul>
        <li
          :class="['friends-navigation-item', 'active']"
          @click="
            setView($event);
            $emit('changeView', 'Friends');
          "
        >
          Todos
        </li>
        <li
          class="friends-navigation-item"
          @click="
            setView($event);
            $emit('changeView', 'FriendshipRequests');
          "
        >
          Pendentes
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      friends: Array(15).fill(false),
    };
  },
  methods: {
    setView({ target }: Event) {
      const element = target as Element;
      const navigationItems = document.querySelectorAll(
        ".friends-navigation-item"
      )!;

      navigationItems.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });

      if (!element.classList.contains("active")) {
        element.classList.add("active");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.friends {
  height: 100%;
  background: color("secondary");
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  .friends-navigation {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
    background: color("primary", "lightest");
    height: 2.5rem;
    box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: 1fr;
    ul {
      height: 100%;
      align-self: center;
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      justify-content: space-between;
      li {
        height: 100%;
        width: 100%;
        position: relative;
        cursor: pointer;
        font-family: "Acumin Regular";
        color: color("light", "darkest");
        font-weight: 600;
        font-size: 1.125rem;
        transition: all 0.15s linear;
        display: grid;
        align-items: center;
        justify-items: center;
        &:hover {
          background: color("secondary");
          color: color("light");
        }
        &.active {
          background: color("secondary");
          color: color("light");
        }
      }
    }
  }
  .friends-list {
    position: absolute;
    top: 0;
    bottom: 2.5rem;
    left: 0;
    right: 0;
    ul {
      position: absolute;
      inset: 0;
      overflow-y: scroll;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      grid-auto-flow: row;
      gap: 0.125rem;
      li {
        &:nth-last-child(1) {
          ::v-deep.friend-card {
            .friend-card-dropdown {
              top: -0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
