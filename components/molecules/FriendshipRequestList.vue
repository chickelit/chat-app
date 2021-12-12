<template>
  <div class="friendship-requests-list" @scroll="checkScroll">
    <div
      v-for="(friendshipRequest, index) of friendshipRequests"
      :key="index"
      :class="{
        last:
          index === friendshipRequests.length - 1 &&
          friendshipRequests.length > 1,
      }"
    >
      <FriendshipRequestCard
        v-if="friendshipRequest"
        :index="index"
        :friendship-request="friendshipRequest"
      />
      <FriendshipRequestCard v-else :index="index" />
    </div>
    <div
      v-show="friendshipRequests.length < $meta.total"
      class="loading-wrapper"
    >
      <Loading :active="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { friendshipRequest } from "~/store";
export default Vue.extend({
  data() {
    return {
      friendshipRequests: Array(20).fill(false),
      page: 1,
      loading: false,
    };
  },
  computed: {
    $meta() {
      return friendshipRequest.$meta;
    },
  },
  async mounted() {
    if (friendshipRequest.$all.length > 0) {
      const friendshipRequests = friendshipRequest.$all;

      this.friendshipRequests = friendshipRequests;
    } else {
      try {
        await friendshipRequest.index({
          page: this.page,
          perPage: 20,
        });

        const friendshipRequests = friendshipRequest.$all;

        this.friendshipRequests = friendshipRequests;
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao listar seus pedidos de amizade...",
        });
      }
    }
  },
  methods: {
    async checkScroll(event: any) {
      const target = event.target as HTMLElement;

      if (
        target.scrollHeight - 200 <= target.scrollTop + target.clientHeight &&
        !this.loading
      ) {
        if (this.page < friendshipRequest.$meta.last_page) {
          this.page += 1;
          this.loading = true;

          await friendshipRequest.index({ page: this.page, perPage: 20 });

          const friendshipRequests = friendshipRequest.$all;

          this.friendshipRequests = friendshipRequests;
          this.loading = false;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.loading-wrapper {
  height: 5rem;
  width: 5rem;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-self: center;
}
.friendship-requests-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  .last {
    ::v-deep.friendship-request-card {
      .wrapper {
        .friendship-request-card-dropdown {
          top: -1rem;
        }
      }
    }
  }
}
</style>
