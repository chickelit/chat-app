import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { User } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface ShowPayload {
  username: string;
}

@Module({ name: "users/search", stateFactory: true, namespaced: true })
export default class UserSearch extends VuexModule {
  private user = {} as User;

  public get $single() {
    return this.user;
  }

  @Mutation
  private UPDATE_USER(user: User) {
    this.user = user;
  }

  @Action({ rawError: true })
  public async show({ username }: ShowPayload) {
    const user = await $axios.$get(`/users/search?username=${username}`);

    this.context.commit("UPDATE_USER", user);
  }
}
