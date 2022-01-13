<template>
  <div
    :class="[
      'message',
      $modeClass,
      { mine: $mine, media: message.category === 'media' },
    ]"
  >
    <div class="container">
      <div class="container__complementary">
        <div class="username">
          {{ $mine ? "Você" : message.owner.username }}
        </div>
        <div class="sent-in">
          {{ $sentIn }}
        </div>
      </div>
      <div v-if="message.category === 'text'" class="content">
        {{ message.content }}
      </div>
      <div v-else class="media">
        <img v-if="$type === 'image'" :src="$src" />
        <video v-if="$type === 'video'" :src="$src" />
        <audio v-if="$type === 'audio'" controls>
          <source :src="$src">
        </audio>
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
    $src() {
      const message = this.message as Message;

      return message.media ? message.media.url : "";
    },
    $modeClass() {
      return mode.$mode;
    },
    $type() {
      if (this.message.media) {
        const message = this.message as Message;
        const url = message.media!.url;
        const splittedUrl = url.split(".")
        
        const extname = splittedUrl[splittedUrl.length - 1]

        if (["jpeg", "jpg", "png"].includes(extname)) {
          return "image";
        } else if (extname === "mp4") {
          return "video";
        } else {
          return "audio";
        }
      }

      return "";
    },
  },
});
</script>

<style lang="scss" scoped>
.message {
  user-select: text;
  height: max-content;
  width: max-content;
  min-width: 16rem;
  max-width: 32rem;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  @include screen("medium") {
    min-width: 12rem;
    max-width: 24rem;
  }
  @include screen("small") {
    min-width: 6rem;
    max-width: 12rem;
  }
  &.media {
    max-width: 12rem;
  }
  .media {
    width: 100%;
    border-radius: 0.25rem;
    img {
      border-radius: 0.25rem;
      width: 100%;
    }
    video {
      border-radius: 0.25rem;
      width: 100%;
    }
    audio {
      width: 100%;
    }
  }
  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0.5rem;
  }
  .content {
    word-break: break-all;
  }
  .container__complementary {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }
  .sent-in {
    height: 0.75rem;
    justify-self: end;
    border-radius: 0.125rem;
    font-size: 0.875rem;
  }
  .username {
    height: 0.75rem;
    width: 100%;
    border-radius: 0.125rem;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
