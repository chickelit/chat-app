import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { $axios } from "~/utils/nuxt-instance";

interface ShowPayload {
  id: number;
}

interface IndexPayload {
  page?: number;
  perPage?: number;
}

@Module({ name: "conversations", stateFactory: true, namespaced: true })
export default class Conversation extends VuexModule {
  private conversation = {} as Conversation;
  private conversations = [] as Conversation[];
  private meta = {} as any;

  public get $single() {
    return this.conversation;
  }

  public get $all() {
    return this.conversations;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  UPDATE_CONVERSATIONS(conversations: Conversation[]) {
    this.conversations.push(...conversations);
  }

  @Mutation
  UPDATE_CONVERSATION(conversation: Conversation) {
    this.conversation = conversation;
  }

  @Mutation
  UPDATE_META(meta: any) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async index({ page, perPage }: IndexPayload) {
    const conversations = await $axios.$get(
      `/conversations?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_CONVERSATIONS", conversations.data);
    this.context.commit("UPDATE_META", conversations.meta);
  }

  @Action({ rawError: true })
  public async show({ id }: ShowPayload) {
    const conversation = await $axios.$get(`/conversations/${id}`);

    this.context.commit("UPDATE_CONVERSATION", conversation);
  }
}
