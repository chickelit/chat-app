<template>
  <div :class="['message', $modeClass, { mine: $mine }]">
    <div class="container">
      <div class="container__complementary">
        <div class="username">
          {{ $mine ? "Você" : message.owner.username }}
        </div>
        <div class="sent-in">
          {{ $sentIn }}
        </div>
      </div>
      <div class="content">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/require-default-prop */
// eslint-disable-next-line import/named
import Vue, { PropOptions } from "vue";
import { Message } from "@/models";
import { mode, profile } from "~/store";
export default Vue.extend({
  props: {
    message: {
      type: Object,
      required: false,
    } as PropOptions<Message>,
  },
  computed: {
    $user() {
      return profile.$single;
    },
    $sentIn() {
      const message = this.message as Message;

      const time = message.createdAt.split(" ")[1];

      return `${time.split(":")[0]}:${time.split(":")[1]}`;
    },
    $mine() {
      if (this.message) {
        const message = this.message as Message;

        return message.userId === profile.$single.id;
      }

      return true;
    },
    $modeClass() {
      return mode.$mode;
    },
  },
});
</script>

<style lang="scss" scoped>
.message {
  user-select: all;
  height: max-content;
  width: max-content;
  min-width: 12rem;
  max-width: 36rem;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0.5rem;
  }
  .content {
    display: grid;
    gap: 0.25rem;
    .skeleton-text {
      border-radius: 0.125rem;
      width: 100%;
      height: 1rem;
      &:nth-last-child(1) {
        width: 75%;
      }
    }
  }
  .container__complementary {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .sent-in {
    height: 0.75rem;
    justify-self: end;
    border-radius: 0.125rem;
    font-size: 0.875rem;
  }
  .username {
    height: 0.75rem;
    width: 6rem;
    border-radius: 0.125rem;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .skeleton-text {
      border-radius: 0.125rem;
      width: 100%;
      height: 1rem;
    }
  }
  &.dark {
    background: color("dark", "lighter");
    .content {
      color: color("light");
    }
    .sent-in {
      color: color("light", "darker");
    }
    .username {
      color: color("light", "darker");
    }
  }
  &.light {
    background: color("light");
    .content {
      color: color("dark");
    }
    .sent-in {
      color: color("dark", "lighter");
    }
    .username {
      color: color("dark", "lighter");
    }
    &.mine {
      .content {
        color: color("light");
      }
      .sent-in {
        color: color("light", "darker");
      }
      .username {
        color: color("light", "darker");
      }
    }
  }
}
.mine {
  justify-self: end;
  background: color("primary") !important;
}
</style>
