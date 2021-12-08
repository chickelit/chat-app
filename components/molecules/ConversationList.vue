<template>
  <div class="conversations-list" @scroll="checkScroll">
    <div
      v-for="(conversation, index) of conversations"
      :key="index"
      class="conversation"
    >
      <ConversationCard v-if="!conversation" :index="index" />
      <ConversationCard
        v-else
        :index="index"
        :conversation="conversation"
        @click="
          setView({
            newView: 'ConversationChat',
            previousView: $view,
          })
        "
      />
    </div>
    <div v-show="conversations.length < $meta.total" class="loading-wrapper">
      <Loading :active="loading" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { conversation, view } from "~/store";
export default Vue.extend({
  data() {
    return {
      conversations: Array(20).fill(false),
      loading: false,
      page: 1,
      setView,
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
    $meta() {
      return conversation.$meta;
    },
  },
  async mounted() {
    if (conversation.$all.length > 0) {
      const conversations = conversation.$all;

      this.conversations = conversations;
    } else {
      try {
        await conversation.index({ page: this.page, perPage: 20 });

        const conversations = conversation.$all;

        this.conversations = conversations;
      } catch (e) {
        this.$notify({
          type: "error",
          title: "Ops...",
          text: "Houve um erro ao carregar as conversas...",
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
        if (this.page < conversation.$meta.last_page) {
          this.page += 1;
          this.loading = true;

          await conversation.index({ page: this.page, perPage: 20 });

          const conversations = conversation.$all;

          this.conversations = conversations;
          this.loading = false;
        }
      } else {
        this.$emit("notFullScrolled");
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
.conversations-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: row;
}
</style>
