import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Meta, User } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface IndexPayload {
  page?: number;
  perPage: number;
}

interface CreatePayload {
  userId: number;
}

interface DeletePayload {
  userId: number;
}

@Module({ name: "friends/requests", stateFactory: true, namespaced: true })
export default class FriendshipRequestStore extends VuexModule {
  private friendshipRequests = [] as User[];
  private meta = {} as Meta;

  public get $all() {
    return this.friendshipRequests;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  private UPDATE_FRIENDSHIP_REQUESTS(friendshipRequests: User[]) {
    this.friendshipRequests.push(...friendshipRequests);
  }

  @Mutation
  private UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async index({ page, perPage }: IndexPayload) {
    const { data: friendshipRequests, meta } = await $axios.$get(
      `/friendships/requests?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_FRIENDSHIP_REQUESTS", friendshipRequests);
    this.context.commit("UPDATE_META", meta);
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    await $axios.post(`/friendships/requests`, payload);
  }

  @Action({ rawError: true })
  public async delete({ userId }: DeletePayload) {
    await $axios.delete(`/friendships/requests/${userId}`);
  }
}
