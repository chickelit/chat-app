import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Conversation, Meta } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface ShowPayload {
  id: number;
}

interface IndexPayload {
  page?: number;
  perPage: number;
}

interface CreatePayload {
  userId: number;
}

@Module({ name: "conversations", stateFactory: true, namespaced: true })
export default class ConversationStore extends VuexModule {
  private conversation = {} as Conversation;
  private conversations = [] as Conversation[];
  private meta = {} as Meta;

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
  private UPDATE_CONVERSATIONS_REVERSE(conversations: Conversation[]) {
    this.conversations.unshift(...conversations);
  }

  @Mutation
  private UPDATE_CONVERSATIONS(conversations: Conversation[]) {
    this.conversations.push(...conversations);
  }

  @Mutation
  private UPDATE_CONVERSATION(conversation: Conversation) {
    this.conversation = conversation;
  }

  @Mutation
  private UPDATE_META(meta: Meta) {
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

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    const conversation = await $axios.$post("/conversations", payload);

    this.context.commit("UPDATE_CONVERSATION", conversation);
  }

  @Action({ rawError: true })
  public updateConversations(conversations: Conversation[]) {
    this.context.commit("UPDATE_CONVERSATIONS_REVERSE", conversations);
  }
}
