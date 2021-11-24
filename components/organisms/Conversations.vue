<template>
  <div class="conversations">
    <Wrapper>
      <ul class="conversations-list">
        <li
          v-for="(conversation, index) of conversations"
          :key="index"
          class="conversation"
        >
          <ConversationCard
            aria-label="Conversar com <username>"
            :index="index"
            @click="
              setView({
                newView: 'ConversationChat',
                previousView: $view,
              })
            "
          />
        </li>
      </ul>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setView } from "@/utils";
import { view } from "~/store";
export default Vue.extend({
  data() {
    return {
      conversations: Array(15).fill(false),
      setView,
    };
  },
  computed: {
    $view() {
      return view.$view;
    },
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.conversations {
  position: absolute;
  inset: 0;
  background: color("dark", "darker");
  .conversations-list {
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
