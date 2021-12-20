<template>
  <div class="available-member-list" @scroll="checkScroll">
    <div v-if="populated" class="list">
      <div
        v-for="availableMember of availableMembers"
        :key="availableMember.id"
      >
        <AvailableMemberCard
          :available-member="availableMember"
          @selected="select(availableMember.id)"
          @unselected="unselect(availableMember.id)"
        />
      </div>
    </div>
    <div v-else class="list">
      <div v-for="(availableMember, index) in availableMembers" :key="index">
        <AvailableMemberCard />
      </div>
    </div>
    <div v-show="page < $meta.last_page" class="loading-wrapper">
      <Loading :active="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "~/models";
import { friendship } from "~/store";
export default Vue.extend({
  data() {
    return {
      availableMembers: Array(20).fill(false),
      selectedMembers: [] as number[],
      populated: false,
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
      const availableMembers = friendship.$all;

      this.availableMembers = availableMembers;
      this.populated = true;
    } else {
      try {
        await friendship.index({ page: this.page, perPage: 20 });

        const availableMembers = friendship.$all;

        this.availableMembers = availableMembers;
        this.populated = true;
      } catch (e) {
        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao listar os possíveis novos membros...",
        });
      }
    }
  },
  methods: {
    select(id: User["id"]) {
      this.selectedMembers.push(id);
    },
    unselect(id: User["id"]) {
      const index = this.selectedMembers.findIndex(
        (selectedMemberId) => selectedMemberId === id
      );

      this.selectedMembers.splice(index, 1);
    },
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

          const availableMembers = friendship.$all;

          this.availableMembers = availableMembers;
          this.loading = false;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.loading-wrapper {
  position: relative;
  height: 5rem;
  width: 5rem;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-self: center;
}
.available-member-list {
  height: 100%;
  overflow-y: scroll;
  display: grid;
  .list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
  }
}
</style>
