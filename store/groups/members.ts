import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { group } from "..";
import { $axios } from "~/utils/nuxt-instance";
import { Meta, User } from "~/models";

interface IndexPayload {
  page?: number;
  updateAll: boolean;
  perPage: number;
}

interface CreatePayload {
  userId: number;
  groupId: number;
}

@Module({ name: "groups/members", stateFactory: true, namespaced: true })
export default class MembersStore extends VuexModule {
  private members = [] as User[];
  private meta = {} as Meta;

  public get $all() {
    return this.members;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  private UPDATE_MEMBERS(members: User[]) {
    this.members.push(...members);
  }

  @Mutation
  private UPDATE_ALL_MEMBERS(members: User[]) {
    this.members = members;
  }

  @Mutation
  private UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async index({ page, perPage, updateAll }: IndexPayload) {
    const { data: members, meta } = await $axios.$get(
      `/members/${group.$single.id}?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_META", meta);

    updateAll
      ? this.context.commit("UPDATE_ALL_MEMBERS", members)
      : this.context.commit("UPDATE_MEMBERS", members);
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    await $axios.post("/members", payload);
  }

  @Action({ rawError: true })
  public updateMembers(members: User[]) {
    this.context.commit("UPDATE_MEMBERS", members);
  }
}
