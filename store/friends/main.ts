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

interface DestroyPayload {
  userId: number;
}

@Module({ name: "friends/main", stateFactory: true, namespaced: true })
export default class Friend extends VuexModule {
  private friends = [] as User[];
  private meta = {} as Meta;

  public get $all() {
    return this.friends;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  UPDATE_FRIENDS_REVERSE(friends: User[]) {
    this.friends.unshift(...friends);
  }

  @Mutation
  UPDATE_FRIENDS(friends: User[]) {
    this.friends.push(...friends);
  }

  @Mutation
  UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Mutation
  DELETE_FRIEND(userId: User["id"]) {
    const index = this.friends.findIndex((friend) => friend.id === userId);

    this.friends.splice(index, 1);
  }

  @Action({ rawError: true })
  public async index({ page, perPage }: IndexPayload) {
    const { data: friends, meta } = await $axios.$get(
      `/friendships?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_FRIENDS", friends);
    this.context.commit("UPDATE_META", meta);
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    await $axios.post("/friendships", payload);

    this.context.commit(
      "friends/requests/DELETE_FRIENDSHIP_REQUEST",
      payload.userId,
      {
        root: true,
      }
    );
  }

  @Action({ rawError: true })
  public async destroy({ userId }: DestroyPayload) {
    await $axios.delete(`/friendships/${userId}`);

    this.context.commit("DELETE_FRIEND", userId);
  }

  @Action({ rawError: true })
  public updateFriends(friends: User[]) {
    this.context.commit("UPDATE_FRIENDS_REVERSE", friends);
  }
}
