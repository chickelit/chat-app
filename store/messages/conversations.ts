import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Message, Meta } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface IndexPayload {
  conversationId: number;
  page: number;
  perPage: number;
}

interface CreatePayload {
  receiverId?: number;
  conversationId?: number;
  content?: string;
  file?: Blob;
  category?: "text" | "media";
}

@Module({
  name: "messages/conversations",
  stateFactory: true,
  namespaced: true,
})
export default class ConversationMessageStore extends VuexModule {
  private messages = [] as Message[];
  private meta = {} as Meta;

  public get $all() {
    return this.messages;
  }

  public get $meta() {
    return this.meta;
  }

  @Mutation
  private UPDATE_MESSAGES(messages: Message[]) {
    this.messages = messages;
  }

  @Mutation
  private ADD_MESSAGES(messages: Message[]) {
    this.messages.push(...messages);
  }

  @Mutation
  private UPDATE_META(meta: Meta) {
    this.meta = meta;
  }

  @Action({ rawError: true })
  public async index({ conversationId, page, perPage }: IndexPayload) {
    const response = await $axios.$get(
      `/messages/conversation/${conversationId}?page=${page}&perPage=${perPage}`
    );

    this.context.commit("UPDATE_MESSAGES", response.data);
    this.context.commit("UPDATE_META", response.meta);
  }

  @Action({ rawError: true })
  public async create(payload: CreatePayload) {
    if (payload.category === "media") {
      const formData = new FormData();

      formData.append("file", payload.file!);

      await $axios.$post(
        `/messages/conversation/${payload.conversationId}/media`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    } else {
      await $axios.$post("/messages/conversation/text", payload);
    }
  }

  @Action({ rawError: true })
  public updateMessages(messages: Message[]) {
    this.context.commit("UPDATE_MESSAGES", messages);
  }

  @Action({ rawError: true })
  public addMessages(messages: Message[]) {
    this.context.commit("ADD_MESSAGES", messages);
  }
}
