import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { group } from "..";
import { $axios } from "~/utils/nuxt-instance";
import { Meta } from "~/models";

interface IndexPayload {
  page?: number;
  perPage: number;
}

@Module({ name: "groups/members", stateFactory: true, namespaced: true })
export default class MembersStore extends VuexModule {
  private meta = {} as Meta;

  @Mutation
  private UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async index({ page, perPage }: IndexPayload) {
    const { data: members, meta } = await $axios.$get(
      `/members/${group.$single.id}?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_META", meta);
    this.context.commit("groups/main/UPDATE_MEMBERS", members, {
      root: true,
    });
  }
}
