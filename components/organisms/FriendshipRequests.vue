<template>
  <div class="friendship-requests">
    <Wrapper>
      <div class="container">
        <ul class="friendship-requests-list">
          <li
            v-for="(friend, index) of friends"
            :key="index"
            class="friendship-request"
          >
            <FriendshipRequestCard :index="index" />
          </li>
        </ul>
      </div>
    </Wrapper>
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
        ".friendship-requests-navigation-item"
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
.friendship-requests {
  height: 100%;
  background: color("dark", "darker");
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 1fr;
  .container {
    position: absolute;
    inset: 0;
    .friendship-requests-list {
      position: absolute;
      inset: 0;
      overflow-y: scroll;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      grid-auto-flow: row;
      gap: 0.125rem;
      .friendship-request {
        &:nth-last-child(1) {
          ::v-deep.friendship-request-card {
            .friendship-request-card-dropdown {
              top: -1.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
