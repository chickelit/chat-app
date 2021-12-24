import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { group } from "..";
import { $axios } from "~/utils/nuxt-instance";

interface UpdatePayload {
  file: Blob;
}

@Module({ name: "groups/cover", stateFactory: true, namespaced: true })
export default class CoverStore extends VuexModule {
  private blob = "" as string;
  private groupId = null as unknown as number;

  public get $blob() {
    return this.blob;
  }

  public get $groupId() {
    return this.groupId;
  }

  @Mutation
  private UPDATE_BLOB(blob: any) {
    this.blob = blob;
  }

  @Mutation
  private UPDATE_ID(id: number) {
    this.groupId = id;
  }

  @Action({ rawError: true })
  public async update(payload: UpdatePayload) {
    const formData = new FormData();
    formData.append("file", payload.file);

    const cover = await $axios.$put(
      `/groups/${group.$single.id}/cover`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    const blob = URL.createObjectURL(payload.file);

    this.context.commit("UPDATE_ID", group.$single.id);
    this.context.commit("UPDATE_BLOB", blob);
    this.context.commit("groups/main/UPDATE_COVER", cover, {
      root: true,
    });
  }

  @Action({ rawError: true })
  public async destroy() {
    await $axios.delete(`/groups/${group.$single.id}/cover`);

    this.context.commit("groups/main/UPDATE_COVER", null, {
      root: true,
    });
  }
}
