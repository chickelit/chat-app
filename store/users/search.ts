import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Meta, User } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface ShowPayload {
  username: string;
  page: number;
  perPage: number;
}

@Module({ name: "users/search", stateFactory: true, namespaced: true })
export default class UserSearch extends VuexModule {
  private users = [] as User[];
  private meta = {} as Meta;

  public get $all() {
    return this.users;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  private UPDATE_USERS(users: User[]) {
    this.users = users;
  }

  @Mutation
  private UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async show({ username, page, perPage }: ShowPayload) {
    const { data, meta } = await $axios.$get(
      `/users/search?username=${username}&page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_USERS", data);
    this.context.commit("UPDATE_META", meta);
  }
}
