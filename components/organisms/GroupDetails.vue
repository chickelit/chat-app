<template>
  <div class="group-details">
    <Wrapper class="wrapper">
      <label class="cover-input-label" for="cover-input">
        <Cover :src="$src" />
      </label>
      <input
        id="cover-input"
        type="file"
        accept=".jpg,.jpeg,.png"
        @input="updateCover"
      />
      <form id="group-form" @submit.prevent="updateGroup">
        <BaseInput v-model="title" :max-length="32" />
        <BaseButton type="submit" :text="text" />
      </form>
      <div v-show="loading" class="loading-wrapper">
        <Loading :active="loading" />
      </div>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { profile, group, groupCover } from "~/store";
export default Vue.extend({
  data() {
    return {
      loading: false,
      text: "Salvar",
      title: group.$single.title,
    };
  },
  computed: {
    $user() {
      return profile.$single;
    },
    $src() {
      return group.$single.groupCover ? group.$single.groupCover.url : "";
    },
    $group() {
      return group.$single;
    },
  },
  async created() {
    try {
      await group.show({ groupId: +this.$route.params.id });
    } catch (error) {}
  },
  methods: {
    async updateGroup() {
      try {
        this.loading = true;
        this.text = "Salvando...";

        await group.update({
          groupId: group.$single.id,
          title: this.title,
        });

        this.text = "Salvar";
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.text = "Salvar";
      }
    },
    async updateCover(event: any) {
      try {
        this.loading = true;

        const file = event.target.files[0];
        await groupCover.update({ file });

        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.group-details {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    justify-items: center;
    gap: 2rem;
    .loading-wrapper {
      width: 5rem;
      height: 5rem;
      display: grid;
      align-items: center;
      justify-items: center;
      align-self: center;
    }
    .cover-input-label {
      cursor: pointer;
      width: 45%;
      max-width: 12rem;
    }
    input[type="file"] {
      display: none;
    }
    form {
      width: 65%;
      max-width: 22.5rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      gap: 0.75rem;
      button[type="submit"] {
        width: 100%;
      }
    }
  }
  .bounce {
    outline: 0;
    border-color: color("danger", "lighter");
    animation-name: bounce;
    animation-duration: 0.5s;
    animation-delay: 0.25s;
    color: color("danger", "lighter") !important;
  }
}
</style>
