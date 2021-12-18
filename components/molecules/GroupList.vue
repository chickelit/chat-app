<template>
  <div class="groups-list" @scroll="checkScroll">
    <div
      v-for="(group, index) of groups"
      :key="index"
      :class="{ last: index === groups.length - 1 && groups.length > 1 }"
    >
      <GroupCard
        v-if="group"
        :index="index"
        :group="group"
        @click="setView({ newView: 'GroupChat' })"
      />
      <GroupCard v-else :index="index" />
    </div>
    <div v-show="groups.length < $meta.total" class="loading-wrapper">
      <Loading :active="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { group, view } from "~/store";
export default Vue.extend({
  data() {
    return {
      setView,
      groups: Array(20).fill(false),
      page: 1,
      loading: false,
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
    $meta() {
      return group.$meta;
    },
  },
  async mounted() {
    if (group.$wasLoaded) {
      const groups = group.$all;

      this.groups = groups;
    } else {
      try {
        await group.index({ page: this.page, perPage: 20 });

        const groups = group.$all;

        this.groups = groups;
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao listar seus grupos...",
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
        if (this.page < group.$meta.last_page) {
          this.page += 1;
          this.loading = true;

          await group.index({ page: this.page, perPage: 20 });

          const groups = group.$all;

          this.groups = groups;
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
.groups-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
  .last {
    ::v-deep.group-card {
      .group-card-wrapper {
        .group-card-dropdown {
          top: -0.375rem;
        }
      }
    }
  }
}
</style>
