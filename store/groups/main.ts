import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Group, Meta } from "@/models";
import { $axios } from "~/utils/nuxt-instance";

interface IndexPayload {
  page?: number;
  perPage: number;
}

@Module({ name: "groups/main", stateFactory: true, namespaced: true })
export default class GroupStore extends VuexModule {
  private groups = [] as Group[];
  private group = {} as Group;
  private meta = {} as Meta;

  public get $all() {
    return this.groups;
  }

  public get $single() {
    return this.group;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  UPDATE_GROUPS(groups: Group[]) {
    this.groups.push(...groups);
  }

  @Mutation
  UPDATE_GROUP(group: Group) {
    this.group = group;
  }

  @Mutation
  UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async index({ page, perPage }: IndexPayload) {
    const { data: groups, meta } = await $axios.$get(
      `/groups?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_GROUPS", groups);
    this.context.commit("UPDATE_META", meta);
  }
}
