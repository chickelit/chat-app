import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Message, Meta } from "~/models";
import { $axios } from "~/utils/nuxt-instance";

interface IndexPayload {
  groupId: number;
  page: number;
  perPage: number;
}

interface CreatePayload {
  groupId?: number;
  content?: string;
  file?: Blob;
  category?: "text" | "media";
}

@Module({
  name: "messages/groups",
  stateFactory: true,
  namespaced: true,
})
export default class GroupMessageStore extends VuexModule {
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
  public async index({ groupId, page, perPage }: IndexPayload) {
    const response = await $axios.$get(
      `/messages/group/${groupId}?page=${page}&perPage=${perPage}`
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
        `/messages/group/${payload.groupId}/media`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    } else {
      await $axios.$post("/messages/group/text", payload);
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
