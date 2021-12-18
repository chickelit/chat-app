import { Action, Module, VuexModule } from "vuex-module-decorators";
import { group } from "..";
import { $axios } from "~/utils/nuxt-instance";

interface IndexPayload {
  page?: number;
  perPage: number;
}

@Module({ name: "groups/members", stateFactory: true, namespaced: true })
export default class MembersStore extends VuexModule {
  @Action({ rawError: true })
  public async index({ page, perPage }: IndexPayload) {
    const members = await $axios.$get(
      `/members/${group.$single.id}?page=${page}&perPage=${perPage}`
    );

    this.context.commit("groups/main/UPDATE_MEMBERS", members, {
      root: true,
    });
  }
}
