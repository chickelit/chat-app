<template>
  <div class="member-list" @scroll="checkScroll">
    <transition-group
      v-if="populated"
      tag="div"
      class="list"
      name="members-list"
    >
      <div
        v-for="(member, index) in members"
        :key="member.id"
        :class="{ last: index === members.length - 1 && members.length > 1 }"
      >
        <MemberCard
          :index="index"
          :show-options="$showOptions && $profile.id !== member.id"
          :member="member"
        />
      </div>
    </transition-group>
    <div v-else class="list">
      <div v-for="(member, index) of members" :key="index">
        <MemberCard :index="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { group, member, profile } from "~/store";
export default Vue.extend({
  data() {
    return {
      members: Array(20).fill({ showOptions: true }),
      page: 1,
      loading: false,
      populated: false,
    };
  },
  computed: {
    $showOptions() {
      return group.$single.userId === profile.$single.id;
    },
    $profile() {
      return profile.$single;
    },
  },
  async mounted() {
    if (member.$all.length > 0) {
      const members = member.$all;

      this.members = members;
      this.populated = true;
    } else {
      try {
        await member.index({ page: this.page, perPage: 20, updateAll: true });

        const members = member.$all;

        this.members = members;
        this.populated = true;
      } catch (e) {
        Vue.notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao listar os membros do grupo...",
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
        if (this.page < member.$meta.last_page) {
          this.page += 1;
          this.loading = true;

          await member.index({
            page: this.page,
            perPage: 20,
            updateAll: false,
          });

          const members = member.$all;

          this.members = members;
          this.loading = false;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.members-list-enter-active,
.members-list-leave-active {
  transition: all 0.25s ease;
}
.members-list-enter-from,
.members-list-leave-to {
  opacity: 0;
}
.member-list {
  .list {
    position: absolute;
    inset: 0;
    overflow-y: scroll;
    display: grid;
    grid-auto-rows: max-content;
    .last {
      ::v-deep.member-card-dropdown {
        top: -0.375rem;
      }
    }
  }
}
</style>
