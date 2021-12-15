<template>
  <div class="friend-list" @scroll="checkScroll">
    <div
      v-for="(friend, index) of friends"
      :key="index"
      :class="{ last: index === friends.length - 1 && friends.length > 1 }"
    >
      <FriendCard v-if="!friend" :index="index" />
      <FriendCard v-else :index="index" :friend="friend" />
    </div>
    <div v-show="friends.length < $meta.total" class="loading-wrapper">
      <Loading :active="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { friendship } from "~/store";
export default Vue.extend({
  data() {
    return {
      friends: Array(20).fill(false),
      page: 1,
      loading: false,
    };
  },
  computed: {
    $meta() {
      return friendship.$meta;
    },
  },
  async mounted() {
    if (friendship.$all.length > 0) {
      const friends = friendship.$all;

      this.friends = friends;
    } else {
      try {
        await friendship.index({ page: this.page, perPage: 20 });

        const friends = friendship.$all;

        this.friends = friends;
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao listar seus amigos...",
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
        if (this.page < friendship.$meta.last_page) {
          this.page += 1;
          this.loading = true;

          await friendship.index({ page: this.page, perPage: 20 });

          const friends = friendship.$all;

          this.friends = friends;
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
.friend-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  .last {
    ::v-deep.friend-card {
      .wrapper {
        .friend-card-dropdown {
          top: -1rem;
        }
      }
    }
  }
}
</style>
