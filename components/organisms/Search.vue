<template>
  <div :class="['search-user', $modeClass]">
    <Wrapper class="wrapper">
      <form name="search-user-form" @submit.prevent="onSubmit">
        <BaseInput
          v-model="form.username"
          :max-length="32"
          required
          type="search"
          placeholder="Nome de usuário..."
        />
        <button type="submit" >
          <SearchButton class="search-button" />
        </button>
      </form>
      <div v-if="loading" class="loading-wrapper">
        <Loading :active="loading" />
      </div>
      <div v-else-if="$all.length > 0" class="container">
        <ScrollWrapper class="scroll-wrapper">
          <transition-group name="result-list">
            <div
              v-for="(user, index) of $all"
              :key="user.id"
              :class="[
                'card',
                { last: index === $all.length - 1 && $all.length > 1 },
              ]"
            >
              <SearchUserCard :user="user" />
            </div>
          </transition-group>
        </ScrollWrapper>
      </div>
    </Wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "~/models";
import { mode, userSearch } from "~/store";
export default Vue.extend({
  props: {
    clean: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      text: "Pesquisar",
      result: [] as User[],
      form: {
        username: "",
      },
    };
  },
  computed: {
    $modeClass() {
      return mode.$mode;
    },
    $all() {
      return userSearch.$all;
    },
  },
  watch: {
    clean(_oldValue, newValue) {
      if (newValue === false) {
        setTimeout(() => {
          this.form.username = "";

          document.forms.namedItem("search-user-form")?.reset();

          this.result = [] as User[];
        }, 500);
      }
    },
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;
        this.text = "Pesquisando...";

        await userSearch.show({
          username: this.form.username,
          page: 1,
          perPage: 20,
        });

        this.loading = false;
        this.text = "Pesquisar";

        const result = userSearch.$all;

        this.result = result;
      } catch (e) {
        this.loading = false;
        this.text = "Pesquisar";

        this.result = [] as User[];
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.result-list-enter-active,
.result-list-leave-active {
  transition: all 0.25s ease;
}
.result-list-enter-from,
.result-list-leave-to {
  opacity: 0;
}
.container {
  height: 100%;
  width: 100%;
  position: relative;
}
.scroll-wrapper {
  position: absolute;
  inset: 0;
  overflow-y: scroll;
  .last {
    ::v-deep.search-user-card {
      .wrapper {
        .search-user-card-dropdown {
          top: -1rem;
        }
      }
    }
  }
}
.search-button {
  background: color("primary");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.15s linear;
  &:hover {
    background: color("primary", "lighter");
  }
}
.loading-wrapper {
  height: 5rem;
  width: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  align-self: center;
}
.search-user {
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.2);
  height: 100%;
  .wrapper {
    display: grid;
    grid-template-rows: 5rem 1fr;
    justify-items: center;
    align-items: center;
    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 2.4rem;
      grid-auto-rows: max-content;
      align-items: center;
      gap: 0.5rem;
      @include screen("medium") {
        width: calc(100% - 2rem);
        padding: 0 1rem;
      }
      input {
        width: 100%;
      }
      input[type="search"]::-webkit-search-decoration,
      input[type="search"]::-webkit-search-cancel-button,
      input[type="search"]::-webkit-search-results-button,
      input[type="search"]::-webkit-search-results-decoration {
        display: none;
      }
      button[type="submit"] {
        width: 100%;
      }
    }
  }
}
</style>
